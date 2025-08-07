

import { useState } from "react"
import {
  MdMenuBook,
  MdAccessTime,
  MdAssignment,
  MdHeadset,
  MdMic,
  MdPlayArrow,
  MdSearch,
  MdStar,
  MdPeople,
} from "react-icons/md"

export default function DashPracticeTestsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const practiceTests = [
    {
      id: 1,
      title: "IELTS Academic Practice Test 1",
      type: "Full Test",
      duration: "2h 45m",
      difficulty: "Intermediate",
      modules: ["listening", "reading", "writing", "speaking"],
      rating: 4.8,
      attempts: 1250,
      description: "Complete IELTS Academic test with all four modules",
    },
    {
      id: 2,
      title: "Cambridge IELTS 11 Test - 1",
      type: "Listening",
      duration: "30m",
      difficulty: "Advanced",
      modules: ["listening"],
      rating: 4.6,
      attempts: 890,
      description: "Focus on academic lecture comprehension",
    },
    {
      id: 3,
      title: "Reading Comprehension - Science Topics",
      type: "Reading",
      duration: "60m",
      difficulty: "Intermediate",
      modules: ["reading"],
      rating: 4.7,
      attempts: 1100,
      description: "Scientific articles and research papers",
    },
    {
      id: 4,
      title: "Writing Task 1 & 2 Practice",
      type: "Writing",
      duration: "60m",
      difficulty: "Advanced",
      modules: ["writing"],
      rating: 4.5,
      attempts: 650,
      description: "Academic writing tasks with detailed feedback",
    },
    {
      id: 5,
      title: "Speaking Mock Interview",
      type: "Speaking",
      duration: "15m",
      difficulty: "Beginner",
      modules: ["speaking"],
      rating: 4.9,
      attempts: 2100,
      description: "AI-powered speaking practice with instant feedback",
    },
    {
      id: 6,
      title: "Cambridge IELTS 12 Test - 2",
      type: "Listening",
      duration: "30m",
      difficulty: "Advanced",
      modules: ["listening"],
      rating: 4.6,
      attempts: 890,
      description: "Focus on academic lecture comprehension",
    },
  ]

  const moduleIcons = {
    listening: MdHeadset,
    reading: MdMenuBook,
    writing: MdAssignment,
    speaking: MdMic,
  }

  const moduleColors = {
    listening: "bg-blue-500",
    reading: "bg-green-500",
    writing: "bg-orange-500",
    speaking: "bg-purple-500",
  }

  const filteredTests = practiceTests.filter((test) => {
    if (selectedFilter === "all") return true
    return test.modules.includes(selectedFilter)
  })

  const filterTabs = [
    { id: "all", label: "All" },
    { id: "listening", label: "Listening" },
    { id: "reading", label: "Reading" },
    { id: "writing", label: "Writing" },
    { id: "speaking", label: "Speaking" },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Practice Tests</h2>
        <p className="text-gray-600">Choose from our comprehensive collection of IELTS practice tests</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdAssignment className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">35</p>
              <p className="text-sm text-gray-600">Tests Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdAccessTime className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">42h</p>
              <p className="text-sm text-gray-600">Study Time</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdStar className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">7.0</p>
              <p className="text-sm text-gray-600">Avg Score</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdPeople className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">85%</p>
              <p className="text-sm text-gray-600">Improvement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search practice tests..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedFilter === tab.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Practice Tests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {filteredTests.map((test) => (
          <div key={test.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.title}</h3>
                  <p className="text-gray-600 text-sm">{test.description}</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full ml-4">{test.type}</span>
              </div>

              {/* Test Modules */}
              <div className="flex space-x-2 mb-4">
                {test.modules.map((module) => {
                  const Icon = moduleIcons[module]
                  const color = moduleColors[module]
                  return (
                    <div
                      key={module}
                      className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center`}
                      title={module.charAt(0).toUpperCase() + module.slice(1)}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  )
                })}
              </div>

              {/* Test Info */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <MdAccessTime className="w-4 h-4 mr-1" />
                    {test.duration}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{test.difficulty}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdStar className="w-4 h-4 text-yellow-500" />
                  <span>{test.rating}</span>
                  <span className="text-gray-400">({test.attempts})</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MdPlayArrow className="w-4 h-4 mr-2" />
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Start Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Quick Start</h3>
          <p className="text-sm text-gray-600">Jump into practice with these popular options</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center h-20 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <MdAssignment className="w-6 h-6 mb-2 text-gray-600" />
              <span className="text-sm text-gray-700">Full Practice Test</span>
            </button>
            <button className="flex flex-col items-center justify-center h-20 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <MdHeadset className="w-6 h-6 mb-2 text-gray-600" />
              <span className="text-sm text-gray-700">Listening Only</span>
            </button>
            <button className="flex flex-col items-center justify-center h-20 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <MdMenuBook className="w-6 h-6 mb-2 text-gray-600" />
              <span className="text-sm text-gray-700">Reading Only</span>
            </button>
            <button className="flex flex-col items-center justify-center h-20 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <MdMic className="w-6 h-6 mb-2 text-gray-600" />
              <span className="text-sm text-gray-700">Speaking Practice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
