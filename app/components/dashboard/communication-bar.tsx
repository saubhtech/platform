"use client"

import { useState } from "react"
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Video, 
  MapPin, 
  Send, 
  Share2,
  Bell,
  Sparkles
} from "lucide-react"
import { Button } from "../ui/button"

const communicationChannels = [
  { icon: Phone, label: "Call", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50", hoverBg: "hover:bg-blue-100", textColor: "text-blue-600" },
  { icon: MessageCircle, label: "WhatsApp", color: "from-green-500 to-green-600", bgColor: "bg-green-50", hoverBg: "hover:bg-green-100", textColor: "text-green-600" },
  { icon: Mail, label: "Email", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50", hoverBg: "hover:bg-purple-100", textColor: "text-purple-600" },
  { icon: Send, label: "RCS", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50", hoverBg: "hover:bg-orange-100", textColor: "text-orange-600" },
  { icon: Bell, label: "Notification", color: "from-yellow-500 to-yellow-600", bgColor: "bg-yellow-50", hoverBg: "hover:bg-yellow-100", textColor: "text-yellow-600" },
  { icon: Video, label: "V-Meeting", color: "from-red-500 to-red-600", bgColor: "bg-red-50", hoverBg: "hover:bg-red-100", textColor: "text-red-600" },
  { icon: MapPin, label: "Visit", color: "from-indigo-500 to-indigo-600", bgColor: "bg-indigo-50", hoverBg: "hover:bg-indigo-100", textColor: "text-indigo-600" },
  { icon: Share2, label: "Messenger", color: "from-pink-500 to-pink-600", bgColor: "bg-pink-50", hoverBg: "hover:bg-pink-100", textColor: "text-pink-600" },
  { icon: Share2, label: "Social", color: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-50", hoverBg: "hover:bg-cyan-100", textColor: "text-cyan-600" },
  { icon: Bell, label: "Reminder", color: "from-teal-500 to-teal-600", bgColor: "bg-teal-50", hoverBg: "hover:bg-teal-100", textColor: "text-teal-600" },
]

export function CommunicationBar() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null)

  const getChannelInfo = (label: string) => {
    const info: Record<string, string> = {
      "Call": "Whisper mode: English/Hindi transcription available. Call recording enabled.",
      "WhatsApp": "Chat window will appear for messaging. Template messages available.",
      "Email": "Email interface will open for composition. Templates and tracking enabled.",
      "RCS": "Rich Communication Services with read receipts and typing indicators.",
      "Notification": "Push notifications will be sent to the lead's device.",
      "V-Meeting": "Virtual meeting room will be created. Calendar invite sent automatically.",
      "Visit": "Schedule an in-person visit. Location and directions will be shared.",
      "Messenger": "Facebook Messenger integration. Chat history available.",
      "Social": "Social media DM integration. Multi-platform support.",
      "Reminder": "Set automated reminders for follow-ups. Smart scheduling enabled."
    }
    return info[label] || ""
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.4s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .channel-btn {
          position: relative;
          overflow: hidden;
        }

        .channel-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s;
        }

        .channel-btn:hover::before {
          left: 100%;
        }

        .gradient-border {
          position: relative;
        }

        .gradient-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gradient-border:hover::after {
          opacity: 1;
        }
      `}</style>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 animate-slide-in-up relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Communication Channels
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Select a channel to engage with leads
                </p>
              </div>
            </div>
            
            {selectedChannel && (
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full animate-scale-in">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse-ring" />
                <div className="h-2 w-2 bg-green-500 rounded-full absolute" />
                <span className="text-sm font-semibold text-gray-700">Active</span>
              </div>
            )}
          </div>

          {/* Channels Grid */}
          <div className="grid grid-cols-5 gap-3 mb-4">
            {communicationChannels.map((channel, index) => {
              const Icon = channel.icon
              const isSelected = selectedChannel === channel.label
              // Safely extract gradient colors with fallbacks
              const gradientFrom = channel.color?.split(' ')[0]?.replace('from-', '') || 'blue-500'
              const gradientTo = channel.color?.split(' ')[2]?.replace('to-', '') || 'blue-600'
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedChannel(channel.label)}
                  className={`channel-btn group relative flex flex-col items-center gap-2 p-4 rounded-xl font-medium text-sm transition-all duration-300 border-2 ${
                    isSelected
                      ? `${channel.bgColor} border-current shadow-xl scale-105 ${channel.textColor}`
                      : `bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-105 ${channel.textColor}`
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    '--gradient-from': gradientFrom,
                    '--gradient-to': gradientTo
                  } as any}
                >
                  {/* Glow effect for selected */}
                  {isSelected && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} opacity-20 rounded-xl blur-xl`} />
                  )}
                  
                  {/* Icon container */}
                  <div className={`relative p-3 rounded-lg transition-all duration-300 ${
                    isSelected 
                      ? `bg-gradient-to-r ${channel.color} text-white shadow-lg` 
                      : `${channel.bgColor} group-hover:scale-110`
                  }`}>
                    <Icon className="h-5 w-5" />
                    
                    {/* Shimmer effect */}
                    {isSelected && (
                      <div className="absolute inset-0 animate-shimmer rounded-lg" />
                    )}
                  </div>
                  
                  {/* Label */}
                  <span className={`relative z-10 transition-all duration-300 ${
                    isSelected ? 'font-bold' : 'font-medium'
                  }`}>
                    {channel.label}
                  </span>

                  {/* Active indicator */}
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 flex items-center justify-center">
                      <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse-ring" />
                      <div className="h-3 w-3 bg-green-500 rounded-full absolute" />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Selected Channel Info */}
          {selectedChannel && (
            <div className="relative overflow-hidden animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
              <div className="relative p-5 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className={`p-3 bg-gradient-to-r ${
                      communicationChannels.find(c => c.label === selectedChannel)?.color
                    } rounded-xl shadow-lg animate-bounce-gentle`}>
                      {(() => {
                        const channel = communicationChannels.find(c => c.label === selectedChannel)
                        const Icon = channel?.icon || Phone
                        return <Icon className="h-6 w-6 text-white" />
                      })()}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-900 text-lg">{selectedChannel}</h4>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-scale-in">
                        Ready
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {getChannelInfo(selectedChannel)}
                    </p>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-4">
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        <span className="relative">Start Communication</span>
                      </button>
                      <button className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
                        View Templates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Stats */}
          {!selectedChannel && (
            <div className="grid grid-cols-3 gap-3 mt-4 animate-fade-in">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-900">Total Calls</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">156</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-900">Messages</span>
                </div>
                <p className="text-2xl font-bold text-green-600">89</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="h-4 w-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-900">Emails</span>
                </div>
                <p className="text-2xl font-bold text-purple-600">234</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}