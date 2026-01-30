// lib/otp-manager.ts

interface OTPRecord {
  phoneNumber: string;
  otp: string;
  expiresAt: Date;
  attempts: number;
  type: 'registration' | 'login';
}

// In-memory store for OTPs (use Redis in production)
const otpStore = new Map<string, OTPRecord>();

class OTPManager {
  private readonly OTP_EXPIRY_MINUTES = 10;
  private readonly MAX_ATTEMPTS = 3;
  private readonly RESEND_COOLDOWN_SECONDS = 60;

  /**
   * Generate 6-digit OTP
   */
  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  /**
   * Store OTP in memory
   */
  async storeOTP(
    phoneNumber: string,
    otp: string,
    type: 'registration' | 'login'
  ): Promise<void> {
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + this.OTP_EXPIRY_MINUTES);

    otpStore.set(phoneNumber, {
      phoneNumber,
      otp,
      expiresAt,
      attempts: 0,
      type,
    });

    console.log(`✅ OTP stored for ${phoneNumber}: ${otp} (expires: ${expiresAt.toLocaleString()})`);
  }

  /**
   * Generate and store OTP
   */
  async generateAndStore(phoneNumber: string, type: 'registration' | 'login'): Promise<string> {
    const otp = this.generateOTP();
    await this.storeOTP(phoneNumber, otp, type);
    return otp;
  }

  /**
   * Verify OTP
   */
  async verifyOTP(
    phoneNumber: string,
    otp: string
  ): Promise<{ success: boolean; message: string }> {
    const record = otpStore.get(phoneNumber);

    if (!record) {
      return {
        success: false,
        message: 'OTP not found or expired. Please request a new OTP.',
      };
    }

    // Check if expired
    if (new Date() > record.expiresAt) {
      otpStore.delete(phoneNumber);
      return {
        success: false,
        message: 'OTP has expired. Please request a new OTP.',
      };
    }

    // Check max attempts
    if (record.attempts >= this.MAX_ATTEMPTS) {
      otpStore.delete(phoneNumber);
      return {
        success: false,
        message: 'Maximum verification attempts exceeded. Please request a new OTP.',
      };
    }

    // Increment attempts
    record.attempts++;

    // Verify OTP
    if (record.otp !== otp) {
      return {
        success: false,
        message: `Invalid OTP. ${this.MAX_ATTEMPTS - record.attempts} attempts remaining.`,
      };
    }

    // Success - remove OTP
    otpStore.delete(phoneNumber);
    return {
      success: true,
      message: 'OTP verified successfully.',
    };
  }

  /**
   * Check if can resend OTP (cooldown period)
   */
  canResendOTP(phoneNumber: string): boolean {
    const record = otpStore.get(phoneNumber);
    if (!record) return true;

    const timeSinceCreation = new Date().getTime() - 
      (record.expiresAt.getTime() - this.OTP_EXPIRY_MINUTES * 60 * 1000);
    
    return timeSinceCreation > this.RESEND_COOLDOWN_SECONDS * 1000;
  }

  /**
   * Get remaining cooldown time
   */
  getRemainingCooldown(phoneNumber: string): number {
    const record = otpStore.get(phoneNumber);
    if (!record) return 0;

    const timeSinceCreation = new Date().getTime() - 
      (record.expiresAt.getTime() - this.OTP_EXPIRY_MINUTES * 60 * 1000);
    
    const remaining = this.RESEND_COOLDOWN_SECONDS - Math.floor(timeSinceCreation / 1000);
    return Math.max(0, remaining);
  }

  /**
   * Clear expired OTPs (call periodically)
   */
  clearExpiredOTPs(): void {
    const now = new Date();
    let cleared = 0;
    for (const [phoneNumber, record] of otpStore.entries()) {
      if (now > record.expiresAt) {
        otpStore.delete(phoneNumber);
        cleared++;
      }
    }
    if (cleared > 0) {
      console.log(`🧹 Cleared ${cleared} expired OTPs`);
    }
  }

  /**
   * Delete OTP manually
   */
  deleteOTP(phoneNumber: string): void {
    otpStore.delete(phoneNumber);
  }

  /**
   * Get OTP record (for debugging)
   */
  getOTPRecord(phoneNumber: string): OTPRecord | undefined {
    return otpStore.get(phoneNumber);
  }

  /**
   * Get OTP info
   */
  async getOTPInfo(phoneNumber: string, type: 'registration' | 'login'): Promise<{ exists: boolean; ttl: number }> {
    const record = otpStore.get(phoneNumber);
    
    if (!record || record.type !== type) {
      return { exists: false, ttl: 0 };
    }

    const now = new Date();
    if (now > record.expiresAt) {
      otpStore.delete(phoneNumber);
      return { exists: false, ttl: 0 };
    }

    const ttl = Math.floor((record.expiresAt.getTime() - now.getTime()) / 1000);
    return { exists: true, ttl };
  }
}

// Create singleton instance
const otpManager = new OTPManager();

// Clean up expired OTPs every 5 minutes
setInterval(() => {
  otpManager.clearExpiredOTPs();
}, 5 * 60 * 1000);

export default otpManager;