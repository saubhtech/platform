"use client"

import { useState } from "react"
import { Search, Plus, MoreVertical, Clock, ChevronLeft, ChevronRight, Star, TrendingUp, Filter, Download, Mail, Phone } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const leadsData = [
  {
    id: 1,
    name: "Rohan Mehta",
    company: "AB Enterprises",
    deal: "Website Redesign",
    amount: "₹16,500",
    source: "Email",
    stage: "Proposal",
    funnel: "Negotiation",
    followUp: "29.01.2025",
    time: "10:30 AM",
    delay: "2 Hours",
    timeline: 8,
    status: "hot",
    avatar: "RM",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Tech Solutions",
    deal: "Mobile App Dev",
    amount: "₹45,000",
    source: "Website",
    stage: "Quotation",
    funnel: "Prospect",
    followUp: "30.01.2025",
    time: "2:00 PM",
    delay: "1 Day",
    timeline: 5,
    status: "warm",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Digital Hub",
    deal: "SEO Services",
    amount: "₹8,500",
    source: "Referral",
    stage: "Discussion",
    funnel: "Prospect",
    followUp: "31.01.2025",
    time: "11:00 AM",
    delay: "3 Days",
    timeline: 3,
    status: "cold",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    company: "Smart Retail",
    deal: "E-commerce Platform",
    amount: "₹65,000",
    source: "LinkedIn",
    stage: "Contract",
    funnel: "Negotiation",
    followUp: "29.01.2025",
    time: "4:30 PM",
    delay: "Today",
    timeline: 12,
    status: "hot",
    avatar: "SG",
  },
  {
    id: 5,
    name: "Rahul Verma",
    company: "Cloud Systems",
    deal: "Cloud Migration",
    amount: "₹95,000",
    source: "Email",
    stage: "Proposal",
    funnel: "Negotiation",
    followUp: "01.02.2025",
    time: "9:00 AM",
    delay: "4 Days",
    timeline: 15,
    status: "hot",
    avatar: "RV",
  },
]

export function LeadsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLeads, setSelectedLeads] = useState<number[]>([])
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const toggleSelectAll = () => {
    if (selectedLeads.length === leadsData.length) {
      setSelectedLeads([])
    } else {
      setSelectedLeads(leadsData.map(lead => lead.id))
    }
  }

  const toggleSelectLead = (id: number) => {
    setSelectedLeads(prev =>
      prev.includes(id) ? prev.filter(leadId => leadId !== id) : [...prev, id]
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hot":
        return "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30"
      case "warm":
        return "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
      case "cold":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Proposal":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "Quotation":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Discussion":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "Contract":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getAvatarGradient = (index: number) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-pink-500 to-rose-600",
      "from-green-500 to-emerald-600",
      "from-orange-500 to-red-600",
      "from-cyan-500 to-blue-600",
    ]
    return gradients[index % gradients.length]
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
            transform: scale(0.95);
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

        @keyframes bounce-subtle {
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
          animation: shimmer 2s infinite;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .group:hover .group-hover-scale {
          transform: scale(1.05);
        }

        .group:hover .group-hover-rotate {
          transform: rotate(5deg);
        }

        .transition-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .table-row-hover {
          position: relative;
          transition: all 0.3s ease;
        }

        .table-row-hover::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .table-row-hover:hover::before {
          opacity: 1;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .gradient-border {
          position: relative;
          border: 2px solid transparent;
          background-clip: padding-box;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden animate-slide-in-up">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-b border-gray-200 relative overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50" />
                  <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Leads
                  </h2>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-600">
                      New Leads: <span className="font-bold text-green-600 text-lg">45</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full animate-scale-in">
                      <TrendingUp className="h-3 w-3" />
                      15%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <Filter className="h-4 w-4 mr-2 group-hover:text-blue-600 transition-colors" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-purple-600 hover:bg-purple-50 transition-all duration-300 group"
                >
                  <Download className="h-4 w-4 mr-2 group-hover:text-purple-600 transition-colors" />
                  Export
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-0 animate-shimmer" />
                  <Plus className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">Add Lead</span>
                </Button>
              </div>
            </div>

            {/* Search and Stats */}
            <div className="flex items-center gap-4">
              <div className="flex-1 relative group/search">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-md opacity-0 group-hover/search:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-hover/search:text-blue-600 transition-colors duration-300" />
                  <Input
                    type="search"
                    placeholder="Search by name, company, deal..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 h-12 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:shadow-lg focus:shadow-blue-600/20 transition-all duration-300 text-base"
                  />
                </div>
              </div>

              {selectedLeads.length > 0 && (
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 border-2 border-blue-200 rounded-xl animate-scale-in">
                  <span className="text-sm font-semibold text-blue-700">
                    {selectedLeads.length} selected
                  </span>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-8 px-2 hover:bg-blue-200">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 px-2 hover:bg-blue-200">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <TableHead className="w-[50px]">
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedLeads.length === leadsData.length}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-600 cursor-pointer transition-all"
                    />
                  </div>
                </TableHead>
                <TableHead className="font-bold text-gray-700">Name</TableHead>
                <TableHead className="font-bold text-gray-700">Deal</TableHead>
                <TableHead className="font-bold text-gray-700">Amount</TableHead>
                <TableHead className="font-bold text-gray-700">Source</TableHead>
                <TableHead className="font-bold text-gray-700">Stage</TableHead>
                <TableHead className="font-bold text-gray-700">Funnel</TableHead>
                <TableHead className="font-bold text-gray-700">Follow Up</TableHead>
                <TableHead className="font-bold text-gray-700">Delay</TableHead>
                <TableHead className="font-bold text-gray-700">Timeline</TableHead>
                <TableHead className="w-[80px] text-center font-bold text-gray-700">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leadsData.map((lead, index) => (
                <TableRow
                  key={lead.id}
                  onMouseEnter={() => setHoveredRow(lead.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`table-row-hover cursor-pointer ${
                    selectedLeads.includes(lead.id) ? "bg-blue-50" : "hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50"
                  } transition-all duration-300`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell>
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={() => toggleSelectLead(lead.id)}
                        className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-600 cursor-pointer transition-all"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${getAvatarGradient(index)} flex items-center justify-center text-white font-bold text-sm shadow-lg transition-smooth ${
                        hoveredRow === lead.id ? "scale-110 shadow-xl" : ""
                      }`}>
                        {lead.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{lead.name}</div>
                        <div className="text-sm text-gray-500">{lead.company}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-gray-700">{lead.deal}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {lead.amount}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(lead.status)} transition-smooth ${
                      hoveredRow === lead.id ? "scale-110" : ""
                    }`}>
                      {lead.source}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStageColor(lead.stage)} transition-smooth ${
                      hoveredRow === lead.id ? "scale-105" : ""
                    }`}>
                      {lead.stage}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-gray-700">{lead.funnel}</span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{lead.followUp}</div>
                      <div className="text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {lead.time}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg ${
                      lead.delay === "Today" || lead.delay.includes("Hours")
                        ? "bg-red-50"
                        : "bg-orange-50"
                    }`}>
                      <Clock className={`h-4 w-4 ${
                        lead.delay === "Today" || lead.delay.includes("Hours")
                          ? "text-red-500 animate-bounce-subtle"
                          : "text-orange-500"
                      }`} />
                      <span className={`text-sm font-bold ${
                        lead.delay === "Today" || lead.delay.includes("Hours")
                          ? "text-red-600"
                          : "text-orange-600"
                      }`}>
                        {lead.delay}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${(lead.timeline / 20) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-600">({lead.timeline})</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ${
                            hoveredRow === lead.id ? "bg-gray-100" : ""
                          }`}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 animate-scale-in">
                        <DropdownMenuItem className="cursor-pointer hover:bg-blue-50">
                          <Star className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-purple-50">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-green-50">
                          Add Remark
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-red-50 text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="text-sm text-gray-600">
            Showing <span className="font-bold text-gray-900">1-10</span> of{" "}
            <span className="font-bold text-gray-900">45</span> results
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled
              className="rounded-lg border-2 hover:shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg px-4"
            >
              1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg border-2 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg border-2 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              3
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-lg border-2 hover:shadow-lg hover:border-blue-600 transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}