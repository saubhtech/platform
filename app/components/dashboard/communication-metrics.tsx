"use client"

import { Mail, MessageCircle, Phone, TrendingUp, Users, ArrowUpRight, Activity, Clock } from "lucide-react"

const communicationStats = [
  {
    channel: "Emails",
    icon: Mail,
    sent: 312,
    metric: "68% open rate",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-100",
    textColor: "text-purple-600",
    increase: "+12%",
    trend: "up",
  },
  {
    channel: "WhatsApp",
    icon: MessageCircle,
    sent: 24,
    metric: "active conversations",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    textColor: "text-green-600",
    increase: "+8%",
    trend: "up",
  },
  {
    channel: "Calls",
    icon: Phone,
    sent: 48,
    metric: "today • Call summaries",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
    textColor: "text-blue-600",
    increase: "+15%",
    trend: "up",
  },
]

export function CommunicationMetrics() {
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
          animation: shimmer 3s infinite;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-count-up {
          animation: count-up 0.5s ease-out;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .icon-container {
          position: relative;
        }

        .icon-glow {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .stat-card:hover .icon-glow {
          opacity: 0.6;
        }
      `}</style>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 animate-slide-in-up relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                  <Activity className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Live Communication Stats
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse-ring" />
                    <div className="h-2 w-2 bg-green-500 rounded-full absolute" />
                  </div>
                  <p className="text-sm text-gray-500">Real-time updates</p>
                </div>
              </div>
            </div>

            {/* Time indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 animate-fade-in">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Last 24h</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {communicationStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="stat-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${stat.bgGradient} border-2 border-white shadow-lg`}>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    <div className="relative">
                      {/* Icon and Channel Name */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="icon-container">
                            <div className={`icon-glow bg-gradient-to-r ${stat.gradient} blur-xl`} />
                            <div className={`relative p-3 rounded-xl ${stat.iconBg} shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                              <Icon className={`h-6 w-6 ${stat.textColor}`} />
                            </div>
                          </div>
                          <h4 className={`font-bold text-lg ${stat.textColor}`}>{stat.channel}</h4>
                        </div>

                        {/* Trend indicator */}
                        <div className={`flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${stat.gradient} rounded-full shadow-md animate-scale-in`}>
                          <ArrowUpRight className="h-3 w-3 text-white" />
                          <span className="text-xs font-bold text-white">{stat.increase}</span>
                        </div>
                      </div>

                      {/* Main Metric */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-2">
                          <p className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent animate-count-up`}>
                            {stat.sent}
                          </p>
                          {stat.channel === "Emails" && (
                            <span className="text-sm text-gray-500 font-medium">sent</span>
                          )}
                        </div>
                      </div>

                      {/* Secondary Metric */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden shadow-inner">
                          <div 
                            className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: stat.channel === "Emails" ? "68%" : stat.channel === "WhatsApp" ? "85%" : "72%" }}
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 font-medium mt-2">
                        {stat.metric}
                      </p>

                      {/* Shimmer effect overlay */}
                      <div className="absolute inset-0 animate-shimmer rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Total Outreach</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    384
                  </p>
                  <p className="text-xs text-gray-500 font-medium">This Week</p>
                </div>
                <div className="h-10 w-px bg-gray-300" />
                <div className="text-center">
                  <p className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    92%
                  </p>
                  <p className="text-xs text-gray-500 font-medium">Response Rate</p>
                </div>
                <div className="h-10 w-px bg-gray-300" />
                <div className="text-center">
                  <p className="text-2xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    2.3h
                  </p>
                  <p className="text-xs text-gray-500 font-medium">Avg Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}