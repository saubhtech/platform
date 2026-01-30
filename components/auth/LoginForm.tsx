// app/login/page.tsx
"use client"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  // Register State (Manual)
  const [manualRegisterName, setManualRegisterName] = useState("")
  const [manualRegisterPhone, setManualRegisterPhone] = useState("")
  const [manualRegisterLoading, setManualRegisterLoading] = useState(false)
  const [manualRegisterMessage, setManualRegisterMessage] = useState("")

  // Login State (Manual)
  const [manualLoginPhone, setManualLoginPhone] = useState("")
  const [manualLoginPasscode, setManualLoginPasscode] = useState("")
  const [manualLoginLoading, setManualLoginLoading] = useState(false)
  const [manualLoginMessage, setManualLoginMessage] = useState("")

  // ========== MANUAL WHATSAPP REGISTRATION FUNCTIONS ==========
  
  const handleManualRegister = () => {
    setManualRegisterMessage("")
    
    const trimmedName = manualRegisterName.trim()
    const trimmedPhone = manualRegisterPhone.trim()

    if (!trimmedName) {
      setManualRegisterMessage("❌ Please enter your name")
      return
    }
    if (trimmedName.length < 3) {
      setManualRegisterMessage("❌ Name must be at least 3 characters")
      return
    }
    if (!trimmedPhone) {
      setManualRegisterMessage("❌ Please enter your WhatsApp number")
      return
    }
    if (trimmedPhone.length !== 10) {
      setManualRegisterMessage("❌ Please enter a valid 10-digit WhatsApp number")
      return
    }
    if (!/^\d{10}$/.test(trimmedPhone)) {
      setManualRegisterMessage("❌ WhatsApp number should contain only digits")
      return
    }

    setManualRegisterLoading(true)

    try {
      const message = `Register ${trimmedName}`
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/918800607598?text=${encodedMessage}`
      
      window.open(whatsappUrl, "_blank")
      setManualRegisterMessage("✅ WhatsApp opened! Send the message and you'll receive your credentials automatically within seconds.")

      setTimeout(() => {
        setManualRegisterName("")
        setManualRegisterPhone("")
        setManualRegisterMessage("")
        setManualRegisterLoading(false)
      }, 3000)
    } catch (error) {
      setManualRegisterMessage("❌ Something went wrong. Please try again.")
      setManualRegisterLoading(false)
    }
  }

  // ========== MANUAL WHATSAPP LOGIN FUNCTIONS ==========

  const handleManualSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setManualLoginMessage("")

    const trimmedPhone = manualLoginPhone.trim()
    const trimmedPasscode = manualLoginPasscode.trim()

    if (!trimmedPhone) {
      setManualLoginMessage("❌ Please enter your WhatsApp number")
      return
    }
    if (trimmedPhone.length !== 10) {
      setManualLoginMessage("❌ Please enter a valid 10-digit WhatsApp number")
      return
    }
    if (!/^\d{10}$/.test(trimmedPhone)) {
      setManualLoginMessage("❌ WhatsApp number should contain only digits")
      return
    }
    if (!trimmedPasscode) {
      setManualLoginMessage("❌ Please enter your passcode")
      return
    }
    if (trimmedPasscode.length !== 4) {
      setManualLoginMessage("❌ Passcode must be 4 digits")
      return
    }

    setManualLoginLoading(true)

    try {
      // Call API to verify passcode
      const response = await fetch('/api/auth/verify-manual-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          whatsapp: `91${trimmedPhone}`,
          passcode: trimmedPasscode,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify passcode')
      }

      // Store user data
      localStorage.setItem('user', JSON.stringify(data.user))
      
      setManualLoginMessage('✅ Login successful! Redirecting...')
      
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } catch (err: any) {
      setManualLoginMessage(`❌ ${err.message}`)
      setManualLoginLoading(false)
    }
  }

  const requestManualLoginPasscode = () => {
    const trimmedPhone = manualLoginPhone.trim()
    
    if (!trimmedPhone) {
      setManualLoginMessage("❌ Please enter your WhatsApp number first")
      return
    }
    if (trimmedPhone.length !== 10) {
      setManualLoginMessage("❌ Please enter a valid 10-digit WhatsApp number")
      return
    }

    const message = `Login`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/918800607598?text=${encodedMessage}`, "_blank")
    setManualLoginMessage("✅ WhatsApp opened! Send 'Login' and you'll receive your passcode automatically within seconds.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-30"></div>
              <Image 
                src="/Saubh-Good.png" 
                alt="Saubh Tech Logo" 
                width={60} 
                height={60}
                className="object-contain relative z-10 drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
              Saubh.Tech
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ========== MANUAL REGISTER CARD ========== */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">👤</div>
              <h2 className="text-3xl font-bold text-gray-800">Register</h2>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-purple-600 text-xl flex-shrink-0 mt-1">•</div>
                <div className="text-gray-700 leading-relaxed">
                  <p>Click the button below to open WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-purple-600 text-xl flex-shrink-0 mt-1">•</div>
                <div className="text-gray-700 leading-relaxed">
                  <p>Send the pre-filled message <span className="font-bold text-purple-600 bg-yellow-100 px-2 py-1 rounded">Register Your Name</span> to</p>
                  <p className="font-bold text-purple-600 mt-1">+918800607598</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-purple-600 text-xl flex-shrink-0 mt-1">•</div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-green-600">Instant Response!</span> You'll automatically receive your login credentials (WhatsApp number & 4-digit passcode)
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">🤖 Fully Automated:</span> Our system will create your account and send credentials within seconds!
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  placeholder="Yash Singh"
                  value={manualRegisterName}
                  onChange={(e) => setManualRegisterName(e.target.value)}
                  disabled={manualRegisterLoading}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp Number:
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-500 font-medium">
                    +91
                  </div>
                  <input
                    type="text"
                    placeholder="8130960040"
                    value={manualRegisterPhone}
                    onChange={(e) => setManualRegisterPhone(e.target.value.replace(/\D/g, ""))}
                    disabled={manualRegisterLoading}
                    maxLength={10}
                    className="w-full pl-14 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700"
                  />
                </div>
              </div>

              <button
                onClick={handleManualRegister}
                disabled={manualRegisterLoading}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {manualRegisterLoading ? "Opening WhatsApp..." : "Register via WhatsApp 🤖"}
              </button>

              {manualRegisterMessage && (
                <div className={`text-sm text-center p-3 rounded-lg ${
                  manualRegisterMessage.includes("✅") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  {manualRegisterMessage}
                </div>
              )}
            </div>
          </div>

          {/* ========== MANUAL SIGN IN CARD ========== */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🔐</div>
              <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-orange-600 text-xl flex-shrink-0 mt-1">•</div>
                <div className="text-gray-700 leading-relaxed">
                  <p>Click the button below to request your passcode</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-orange-600 text-xl flex-shrink-0 mt-1">•</div>
                <div className="text-gray-700 leading-relaxed">
                  <p>Send <span className="font-bold text-orange-600 bg-yellow-100 px-2 py-1 rounded">Login</span> to</p>
                  <p className="font-bold text-purple-600 mt-1">+918800607598</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-orange-600 text-xl flex-shrink-0 mt-1">•</div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-green-600">Instant Response!</span> You'll automatically receive your 4-digit passcode within seconds
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-orange-600 text-xl flex-shrink-0 mt-1">•</div>
                <p className="text-gray-700 leading-relaxed">
                  Enter the passcode below to access your dashboard
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">🤖 Fully Automated:</span> Your passcode will be sent automatically - no waiting!
                </p>
              </div>
            </div>

            <form onSubmit={handleManualSignIn} className="space-y-4 mt-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp Number:
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-500 font-medium">
                    +91
                  </div>
                  <input
                    type="text"
                    placeholder="8130960040"
                    value={manualLoginPhone}
                    onChange={(e) => setManualLoginPhone(e.target.value.replace(/\D/g, ""))}
                    disabled={manualLoginLoading}
                    maxLength={10}
                    className="w-full pl-14 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={requestManualLoginPasscode}
                  className="text-sm text-indigo-600 hover:underline font-semibold"
                >
                  📱 Click here to request passcode via WhatsApp
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  4-Digit Passcode:
                </label>
                <input
                  type="text"
                  placeholder="1234"
                  value={manualLoginPasscode}
                  onChange={(e) => setManualLoginPasscode(e.target.value.replace(/\D/g, ""))}
                  disabled={manualLoginLoading}
                  maxLength={4}
                  className="w-full px-4 py-3 text-center text-2xl tracking-widest border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700"
                />
              </div>

              <button
                type="submit"
                disabled={manualLoginLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <span className="text-xl">✔️</span>
                <span>{manualLoginLoading ? "Logging In..." : "Login to Dashboard"}</span>
              </button>

              {manualLoginMessage && (
                <div className={`text-sm text-center p-3 rounded-lg ${
                  manualLoginMessage.includes("✅") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  {manualLoginMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-700 font-medium">
            © 2025 Saubh.Tech | All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}