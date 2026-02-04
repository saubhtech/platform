"use client"

import { useState, useEffect } from "react"
import { Bell, Search, User, TrendingUp, Menu, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const navItems = ["Dashboard", "Sales", "Analytics", "Settings"]

export function DashboardHeader() {
  const [activeTab, setActiveTab] = useState("Dashboard")
  const [scrolled, setScrolled] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slide-in {
          animation: slideInTop 0.3s ease-out;
        }

        .animate-ping {
          animation: pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .group:hover .group-hover-scale {
          transform: scale(1.1);
        }

        .group:hover .group-hover-rotate {
          transform: rotate(90deg);
        }

        .transition-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="flex h-16 items-center px-6 gap-4 relative">
          {/* Logo with animation */}
          <div className="flex items-center gap-2 font-bold text-xl group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg transition-smooth group-hover-scale">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              CRM
            </span>
          </div>

          {/* Navigation with slide indicator */}
          <nav className="flex items-center gap-1 ml-8 relative">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`
                  relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    activeTab === item
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }
                  group/nav
                `}
              >
                {/* Active background */}
                {activeTab === item && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg animate-fade-in" />
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200" />
                
                {/* Text */}
                <span className="relative z-10">{item}</span>
                
                {/* Active indicator dot */}
                {activeTab === item && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-fade-in" />
                )}
              </button>
            ))}
            
            {/* Animated underline */}
            <div
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 rounded-full"
              style={{
                left: `${navItems.indexOf(activeTab) * 25}%`,
                width: "20%",
              }}
            />
          </nav>

          {/* Right Section */}
          <div className="ml-auto flex items-center gap-3">
            {/* Search with animation */}
            <div className="relative group/search">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-md opacity-0 group-hover/search:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 group-hover/search:text-blue-600 transition-colors duration-300" />
                <Input
                  type="search"
                  placeholder="Search leads, deals..."
                  className="pl-10 pr-4 w-64 h-10 bg-gray-50 border-gray-200 rounded-lg
                    focus:w-80 focus:bg-white focus:border-blue-600 focus:shadow-lg focus:shadow-blue-600/20
                    transition-all duration-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Notifications with pulse */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative h-10 w-10 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group/bell"
              >
                <Bell className="h-5 w-5 text-gray-600 group-hover/bell:text-blue-600 transition-colors duration-300" />
                
                {notificationCount > 0 && (
                  <>
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-[10px] font-bold text-white shadow-lg animate-fade-in">
                      {notificationCount}
                    </span>
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 animate-ping opacity-75" />
                  </>
                )}
              </Button>

              {/* Notifications dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-in">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
                    <h3 className="text-white font-semibold">Notifications</h3>
                    <p className="text-blue-100 text-sm">{notificationCount} new updates</p>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="p-4 border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold">
                            {i}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">New lead assigned</p>
                            <p className="text-xs text-gray-500">2 minutes ago</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile with dropdown */}
            <div className="relative group/profile">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg transition-smooth group-hover-scale">
                  <User className="h-4 w-4" />
                </div>
              </Button>

              {/* Profile tooltip */}
              <div className="absolute right-0 top-12 bg-gray-900 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Profile
                <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-shimmer"
          />
        </div>
      </header>
    </>
  )
}