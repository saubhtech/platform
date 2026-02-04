"use client"

import { useState } from "react"
import { Calendar, Clock, Bell, Volume2, Phone, Settings, Sparkles, Plus, CheckCircle } from "lucide-react"
import { Switch } from "../ui/switch"

const alertTypes = [
  { label: "Beep", icon: Bell, gradient: "from-blue-500 to-cyan-500" },
  { label: "Sound Alert", icon: Volume2, gradient: "from-purple-500 to-pink-500" },
  { label: "Call Alert", icon: Phone, gradient: "from-orange-500 to-red-500" },
]

const upcomingReminders = [
  {
    id: 1,
    title: "Follow up with Rohan Mehta",
    time: "4:30 PM",
    type: "call",
    priority: "high",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Send proposal to Priya Sharma",
    time: "5:00 PM",
    type: "email",
    priority: "medium",
    duration: "15 min",
  },
  {
    id: 3,
    title: "Meeting with Amit Patel",
    time: "Tomorrow, 11:00 AM",
    type: "meeting",
    priority: "high",
    duration: "1 hour",
  },
]

export function CalendarReminders() {
  const [aiReminders, setAiReminders] = useState(true)
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>(["Beep"])

  const toggleAlert = (label: string) => {
    setSelectedAlerts((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-gradient-to-r from-red-50 to-pink-50"
      case "medium":
        return "border-l-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50"
      default:
        return "border-l-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30"
      case "medium":
        return "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
      default:
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
    }
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.4s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.2s ease-out;
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

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .reminder-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .reminder-card::before {
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
          transition: left 0.5s;
        }

        .reminder-card:hover::before {
          left: 100%;
        }

        .reminder-card:hover {
          transform: translateX(4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Calendar + Reminders
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">Smart scheduling enabled</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </div>

          {/* AI Reminders Toggle */}
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 animate-shimmer" />
            <div className="relative flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-md opacity-50" />
                  <div className="relative p-2.5 bg-white rounded-lg shadow-md">
                    <Sparkles className="h-5 w-5 text-blue-600 animate-bounce-gentle" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">AI Reminders</p>
                  <p className="text-xs text-gray-600">Smart notifications enabled</p>
                </div>
              </div>
              <Switch
                checked={aiReminders}
                onCheckedChange={setAiReminders}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600"
              />
            </div>
          </div>

          {/* Alert Type Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-gray-700">Alert Types</p>
              <span className="text-xs text-gray-500">{selectedAlerts.length} selected</span>
            </div>
            <div className="flex gap-2">
              {alertTypes.map((alert, index) => {
                const Icon = alert.icon
                const isSelected = selectedAlerts.includes(alert.label)
                // Safely extract gradient colors with fallbacks
                const gradientFrom = alert.gradient?.split(' ')[0]?.replace('from-', '') || 'blue-500'
                const gradientTo = alert.gradient?.split(' ')[2]?.replace('to-', '') || 'blue-600'
                
                return (
                  <button
                    key={index}
                    onClick={() => toggleAlert(alert.label)}
                    className={`flex-1 relative flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border-2 overflow-hidden group ${
                      isSelected
                        ? "bg-gradient-to-r text-white border-transparent shadow-xl scale-105"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-105"
                    }`}
                    style={{
                      backgroundImage: isSelected ? `linear-gradient(to right, var(--tw-gradient-stops))` : undefined,
                      '--tw-gradient-from': isSelected ? gradientFrom : undefined,
                      '--tw-gradient-to': isSelected ? gradientTo : undefined,
                    } as any}
                  >
                    {isSelected && (
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    )}
                    <Icon className={`h-4 w-4 relative z-10 ${isSelected ? '' : 'text-gray-600'}`} />
                    <span className="relative z-10">{alert.label}</span>
                    {isSelected && (
                      <CheckCircle className="h-4 w-4 absolute top-1 right-1 animate-scale-in" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Upcoming Reminders */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-gray-700">Upcoming Reminders</p>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Plus className="h-3 w-3" />
                Add
              </button>
            </div>
            <div className="space-y-3">
              {upcomingReminders.map((reminder, index) => (
                <div
                  key={reminder.id}
                  className={`reminder-card p-4 rounded-xl border-l-4 ${getPriorityColor(
                    reminder.priority
                  )} shadow-md`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">
                        {reminder.title}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{reminder.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-400" />
                          <span>{reminder.duration}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold ${getPriorityBadge(
                        reminder.priority
                      )} uppercase tracking-wide animate-scale-in`}
                    >
                      {reminder.priority}
                    </span>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden shadow-inner">
                      <div 
                        className={`h-full bg-gradient-to-r ${
                          reminder.priority === 'high' ? 'from-red-500 to-pink-500' :
                          reminder.priority === 'medium' ? 'from-orange-500 to-amber-500' :
                          'from-blue-500 to-cyan-500'
                        } rounded-full transition-all duration-1000`}
                        style={{ width: reminder.priority === 'high' ? '75%' : '45%' }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">
                      {reminder.priority === 'high' ? '2h left' : '5h left'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Total reminders today</span>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {upcomingReminders.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}