"use client"

import { useState } from "react"
import { ChevronDown, Filter, X, Check, Search } from "lucide-react"
import { Button } from "../ui/button"

const filterCategories = [
  {
    title: "Country",
    icon: "🌍",
    options: ["India", "USA", "UK", "Australia"],
  },
  {
    title: "State",
    icon: "🏛️",
    options: ["Maharashtra", "Delhi", "Karnataka", "Gujarat"],
  },
  {
    title: "District",
    icon: "🏙️",
    options: ["Mumbai", "Pune", "Bangalore", "Ahmedabad"],
  },
  {
    title: "Pin-code",
    icon: "📍",
    options: ["400001", "411001", "560001", "380001"],
  },
  {
    title: "Place",
    icon: "📌",
    options: ["Andheri", "Koregaon Park", "Indiranagar", "Satellite"],
  },
]

const filterTypes = [
  { name: "List", color: "from-blue-500 to-blue-600", count: 45 },
  { name: "Task", color: "from-purple-500 to-purple-600", count: 12 },
  { name: "Funnel", color: "from-pink-500 to-pink-600", count: 8 },
  { name: "Status", color: "from-orange-500 to-orange-600", count: 23 },
  { name: "Score", color: "from-green-500 to-green-600", count: 67 },
]

export function FilterSidebar() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [activeFilterType, setActiveFilterType] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFilter = (category: string, option: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || []
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
      return { ...prev, [category]: updated }
    })
  }

  const getTotalSelectedFilters = () => {
    return Object.values(selectedFilters).reduce((sum, arr) => sum + arr.length, 0)
  }

  const clearAllFilters = () => {
    setSelectedFilters({})
  }

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
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
            opacity: 0.7;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-zoom-in {
          animation: zoomIn 0.2s ease-out;
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
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

      <aside className="w-72 border-r border-gray-200/80 bg-gradient-to-b from-white to-gray-50/50 h-[calc(100vh-4rem)] overflow-hidden flex flex-col shadow-xl">
        {/* Header with gradient */}
        <div className="p-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse-custom" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse-custom" style={{ animationDelay: "0.75s" }} />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Filter className="h-5 w-5 text-white" />
                </div>
                <h2 className="font-bold text-xl text-white tracking-tight">Filters</h2>
              </div>
              
              {getTotalSelectedFilters() > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium hover:bg-white/30 transition-all duration-300 group"
                >
                  <X className="h-3 w-3 transition-smooth group-hover-rotate" />
                  Clear
                </button>
              )}
            </div>

            {/* Selected count */}
            {getTotalSelectedFilters() > 0 && (
              <div className="flex items-center gap-2 text-white/90 text-sm animate-slide-in">
                <div className="h-6 w-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold">
                  {getTotalSelectedFilters()}
                </div>
                <span className="font-medium">filters active</span>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="p-4 space-y-3">
            {/* Search */}
            <div className="relative group/search mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover/search:text-blue-600 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search filters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Location Filters */}
            <div className="space-y-2">
              {filterCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="group/card animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <button
                      onClick={() =>
                        setExpandedSection(
                          expandedSection === category.title ? null : category.title
                        )
                      }
                      className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50/50 hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl transition-smooth group-hover/card:scale-110">
                          {category.icon}
                        </span>
                        <span className="text-sm font-semibold text-gray-700 group-hover/card:text-gray-900">
                          {category.title}
                        </span>
                        {selectedFilters[category.title]?.length > 0 && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full animate-zoom-in">
                            {selectedFilters[category.title].length}
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-500 transition-all duration-300 ${
                          expandedSection === category.title
                            ? "rotate-180 text-blue-600"
                            : "group-hover/card:text-gray-700"
                        }`}
                      />
                    </button>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedSection === category.title
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-3 space-y-1 bg-gradient-to-b from-gray-50/50 to-white">
                        {category.options.map((option, optionIndex) => {
                          const isSelected = selectedFilters[category.title]?.includes(option)
                          return (
                            <label
                              key={option}
                              className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group/option"
                              style={{ animationDelay: `${optionIndex * 30}ms` }}
                            >
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => toggleFilter(category.title, option)}
                                  className="sr-only"
                                />
                                <div
                                  className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                                    isSelected
                                      ? "border-blue-600 bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-600/30"
                                      : "border-gray-300 bg-white group-hover/option:border-blue-400"
                                  }`}
                                >
                                  {isSelected && (
                                    <Check className="h-3 w-3 text-white animate-zoom-in" />
                                  )}
                                </div>
                              </div>
                              <span
                                className={`text-sm transition-all duration-300 ${
                                  isSelected
                                    ? "text-gray-900 font-medium"
                                    : "text-gray-600 group-hover/option:text-gray-900"
                                }`}
                              >
                                {option}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter Types */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                Filter By Type
              </h3>
              <div className="space-y-2">
                {filterTypes.map((type, index) => (
                  <button
                    key={type.name}
                    onClick={() => setActiveFilterType(activeFilterType === type.name ? null : type.name)}
                    className={`w-full group/type relative overflow-hidden rounded-xl transition-all duration-300 animate-slide-in ${
                      activeFilterType === type.name
                        ? "shadow-lg scale-105"
                        : "hover:scale-102 shadow-sm"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${type.color} opacity-0 group-hover/type:opacity-10 transition-opacity duration-300`}
                    />
                    
                    {/* Active state background */}
                    {activeFilterType === type.name && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${type.color} opacity-10 animate-fade-in`} />
                    )}

                    <div className="relative flex items-center justify-between p-3 bg-white border-2 border-gray-200 rounded-xl group-hover/type:border-gray-300 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-8 w-8 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center text-white font-bold text-xs shadow-lg transition-smooth group-hover/type:scale-110`}
                        >
                          {type.name[0]}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 group-hover/type:text-gray-900 transition-colors duration-300">
                          {type.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 bg-gradient-to-r ${type.color} text-white text-xs font-bold rounded-full shadow`}>
                          {type.count}
                        </span>
                        {activeFilterType === type.name && (
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse-custom" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom action */}
        <div className="p-4 bg-gradient-to-t from-gray-100/80 to-transparent border-t border-gray-200">
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/apply">
            <div className="absolute inset-0 bg-white opacity-0 group-hover/apply:opacity-20 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/apply:opacity-30 animate-shimmer" />
            <span className="relative">Apply Filters</span>
          </button>
        </div>
      </aside>
    </>
  )
}