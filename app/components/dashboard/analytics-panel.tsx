"use client"

import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, ArrowDownRight, Zap, Award, BarChart3 } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "₹8,700",
    change: "+18%",
    trend: "up",
    subtitle: "this month",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Deals Closed",
    value: "12",
    change: "+5",
    trend: "up",
    subtitle: "this month",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Avg Deal Size",
    value: "₹5K",
    change: "+12%",
    trend: "up",
    subtitle: "vs last month",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Conversion Rate",
    value: "45%",
    change: "+8%",
    trend: "up",
    subtitle: "improved",
    gradient: "from-orange-500 to-red-500",
  },
]

const funnelData = [
  { stage: "Leads Enter", count: 1000, percentage: 100, color: "from-blue-500 to-blue-600" },
  { stage: "Show Interest", count: 200, percentage: 20, color: "from-green-500 to-green-600" },
  { stage: "Consider", count: 50, percentage: 5, color: "from-yellow-500 to-yellow-600" },
  { stage: "Purchases", count: 10, percentage: 1, color: "from-red-500 to-red-600" },
]

const pipelineData = [
  { stage: "Prospecting", count: 5, percentage: 25, color: "from-purple-500 to-purple-600", bgColor: "bg-purple-100", textColor: "text-purple-700" },
  { stage: "Negotiation", count: 10, percentage: 50, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-100", textColor: "text-blue-700" },
  { stage: "Near Closing", count: 5, percentage: 25, color: "from-green-500 to-green-600", bgColor: "bg-green-100", textColor: "text-green-700" },
]

export function AnalyticsPanel() {
  return (
    <>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out;
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
            rgba(255, 255, 255, 0.5) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
        }

        .animate-fill-bar {
          animation: fillBar 1s ease-out forwards;
        }

        .animate-count-up {
          animation: countUp 0.5s ease-out;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
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
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <aside className="w-80 space-y-4 animate-slide-in-right">
        {/* Stats Cards */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-5 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sales Overview
              </h3>
            </div>

            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start justify-between p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent animate-count-up`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                    </div>
                    <div
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shadow-md ${
                        stat.trend === "up"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                          : "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Funnel Chart */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-5 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-orange-600 to-red-600 p-2.5 rounded-xl shadow-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Funnel Analysis
              </h3>
            </div>

            <div className="space-y-4">
              {funnelData.map((item, index) => (
                <div key={index} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{item.stage}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-gray-900">{item.count}</span>
                      <span className="text-xs font-semibold text-gray-500">({item.percentage}%)</span>
                    </div>
                  </div>
                  <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full animate-fill-bar shadow-lg transition-all group-hover:shadow-xl`}
                      style={{ 
                        '--target-width': `${item.percentage}%`,
                        width: `${item.percentage}%`
                      } as any}
                    >
                      <div className="absolute inset-0 animate-shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline Chart */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-5 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 p-2.5 rounded-xl shadow-lg">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Pipeline Status
              </h3>
            </div>

            <div className="mb-5 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
              <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-count-up">
                20 Deals
              </p>
              <p className="text-sm font-medium text-gray-600 mt-1">Total in pipeline</p>
            </div>
            
            {/* Pie Chart Representation */}
            <div className="flex gap-1 mb-5 rounded-full overflow-hidden h-4 shadow-lg">
              {pipelineData.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${item.color} transition-all duration-500 hover:opacity-80`}
                  style={{ 
                    width: `${item.percentage}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              ))}
            </div>

            <div className="space-y-3">
              {pipelineData.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md group-hover:shadow-xl transition-all group-hover:scale-110`}>
                      <span className="text-white font-bold text-sm">{item.count}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{item.stage}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{item.count} deals</p>
                    <p className={`text-xs font-semibold ${item.textColor}`}>{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden group">
          {/* Animated background shapes */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-6 w-6 animate-pulse" />
              <h3 className="font-bold text-lg">Need Help?</h3>
            </div>
            <p className="text-sm text-blue-100 mb-4 leading-relaxed">
              Get AI-powered insights on improving your conversion rate and closing more deals faster.
            </p>
            <button className="w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-xl text-sm hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden group/btn">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2">
                <Award className="h-4 w-4" />
                View Recommendations
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}