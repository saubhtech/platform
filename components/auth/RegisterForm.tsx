// components/auth/RegisterForm.tsx
'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [fname, setFname] = useState('');
  const BOT_NUMBER = '+919770370187'; // ⚠️ APNA BOT NUMBER YAHAN DALO

  const openWhatsApp = () => {
    if (!fname.trim()) {
      alert('Please enter your name first!');
      return;
    }

    // Create pre-filled message
    const message = `REGISTER ${fname}`;
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp link with pre-filled message
    const whatsappUrl = `https://wa.me/${BOT_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create Account
      </h2>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">📱 How it works:</h3>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Enter your name below</li>
          <li>Click "Register via WhatsApp"</li>
          <li>Send the pre-filled message</li>
          <li>Get your User ID and Password instantly!</li>
        </ol>
      </div>

      {/* Name Input */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Yash Singh"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            required
            minLength={2}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                openWhatsApp();
              }
            }}
          />
          <p className="text-xs text-gray-500 mt-1">
            Message will be: <code className="bg-gray-100 px-1 rounded">REGISTER {fname || '...'}</code>
          </p>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Register via WhatsApp
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>

      {/* What Happens Next */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-3 text-center">What happens next?</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>WhatsApp will open with message "REGISTER {fname || 'Your Name'}"</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Just click Send button</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>You'll receive your User ID and Password</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Use them to login at saubh.tech/login</span>
          </div>
        </div>
      </div>

      {/* Manual Option */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center mb-3">
          Or send manually to: <strong>{BOT_NUMBER}</strong>
        </p>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <code className="text-sm bg-white px-3 py-2 rounded border border-gray-300 inline-block">
            REGISTER Your Full Name
          </code>
        </div>
      </div>
    </div>
  );
}