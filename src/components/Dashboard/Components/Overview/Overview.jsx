

import {
  MdMenuBook,
  MdAccessTime,
  MdAssignment,
  MdHeadset,
  MdMic,
  MdTrendingUp,
  MdEmojiEvents,
  MdGpsFixed,
} from "react-icons/md"

export default function DashOverview() {
  const testModules = [
    {
      id: "listening",
      name: "Listening",
      icon: MdHeadset,
      color: "bg-blue-500",
      progress: 75,
      lastScore: 7.5,
      testsCompleted: 12,
    },
    {
      id: "reading",
      name: "Reading",
      icon: MdMenuBook,
      color: "bg-green-500",
      progress: 60,
      lastScore: 6.5,
      testsCompleted: 8,
    },
    {
      id: "writing",
      name: "Writing",
      icon: MdAssignment,
      color: "bg-orange-500",
      progress: 45,
      lastScore: 6.0,
      testsCompleted: 5,
    },
    {
      id: "speaking",
      name: "Speaking",
      icon: MdMic,
      color: "bg-purple-500",
      progress: 80,
      lastScore: 7.0,
      testsCompleted: 10,
    },
  ]

  const recentTests = [
    {
      id: 1,
      type: "Full Practice Test",
      date: "2024-01-20",
      overallScore: 7.0,
      listening: 7.5,
      reading: 6.5,
      writing: 6.5,
      speaking: 7.5,
    },
    {
      id: 2,
      type: "Listening Practice",
      date: "2024-01-18",
      overallScore: 7.5,
      listening: 7.5,
      reading: null,
      writing: null,
      speaking: null,
    },
    {
      id: 3,
      type: "Reading Practice",
      date: "2024-01-15",
      overallScore: 6.5,
      listening: null,
      reading: 6.5,
      writing: null,
      speaking: null,
    },
  ]

  const studyGoals = [
    { title: "Complete 20 Listening Tests", progress: 60, target: 20, current: 12 },
    { title: "Achieve Band 7 in Writing", progress: 75, target: 7.0, current: 6.0 },
    { title: "Practice Speaking Daily", progress: 85, target: 30, current: 25 },
  ]

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
        <p className="text-gray-600">{"Let's continue your IELTS preparation journey"}</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Overall Band Score</h3>
            <MdEmojiEvents className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">7.0</div>
          <p className="text-xs text-gray-500">+0.5 from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Tests Completed</h3>
            <MdAssignment className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">35</div>
          <p className="text-xs text-gray-500">+12 this week</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Study Streak</h3>
            <MdAccessTime className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">15</div>
          <p className="text-xs text-gray-500">days in a row</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Target Score</h3>
            <MdGpsFixed className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">8.0</div>
          <p className="text-xs text-gray-500">1.0 points to go</p>
        </div>
      </div>

      {/* Test Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">IELTS Modules</h3>
            <p className="text-sm text-gray-600">Practice each section of the IELTS test</p>
          </div>
          <div className="p-6 space-y-4">
            {testModules.map((module) => {
              const Icon = module.icon
              return (
                <div
                  key={module.id}
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{module.name}</h4>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        Band {module.lastScore}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{module.testsCompleted} tests</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Test Results</h3>
            <p className="text-sm text-gray-600">Your latest practice test scores</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{test.type}</h4>
                    <p className="text-sm text-gray-500">{test.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">Band {test.overallScore}</div>
                    <div className="flex space-x-1 text-xs text-gray-500">
                      {test.listening && <span>L:{test.listening}</span>}
                      {test.reading && <span>R:{test.reading}</span>}
                      {test.writing && <span>W:{test.writing}</span>}
                      {test.speaking && <span>S:{test.speaking}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Study Goals */}
      <div className="bg-white rounded-lg border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Study Goals</h3>
          <p className="text-sm text-gray-600">Track your progress towards your IELTS goals</p>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {studyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{goal.title}</h4>
                  <span className="text-sm text-gray-500">
                    {goal.current}/{goal.target}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <MdAssignment className="w-5 h-5 mr-2" />
          Start Full Practice Test
        </button>
        <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <MdMenuBook className="w-5 h-5 mr-2" />
          Study Materials
        </button>
        <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <MdTrendingUp className="w-5 h-5 mr-2" />
          View Detailed Progress
        </button>
      </div>
    </>
  )
}
