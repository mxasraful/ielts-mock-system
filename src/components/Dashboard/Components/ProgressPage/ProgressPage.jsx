
import { useState } from "react"
import { MdTrendingUp, MdCalendarToday, MdEmojiEvents, MdBarChart } from "react-icons/md"

export default function DashProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const progressData = {
    overall: {
      current: 7.0,
      previous: 6.5,
      change: 0.5,
      trend: "up",
    },
    modules: {
      listening: { current: 7.5, previous: 7.0, progress: 85 },
      reading: { current: 6.5, previous: 6.0, progress: 70 },
      writing: { current: 6.0, previous: 5.5, progress: 60 },
      speaking: { current: 7.0, previous: 6.5, progress: 80 },
    },
  }

  const achievements = [
    {
      id: 1,
      title: "First Perfect Score",
      description: "Achieved band 9 in Listening",
      date: "2024-01-15",
      icon: MdEmojiEvents,
      color: "text-yellow-600",
    },
    {
      id: 2,
      title: "Consistency Master",
      description: "Completed tests for 7 days straight",
      date: "2024-01-10",
      icon: MdCalendarToday,
      color: "text-blue-600",
    },
    {
      id: 3,
      title: "Writing Warrior",
      description: "Improved writing score by 1.5 bands",
      date: "2024-01-05",
      icon: MdTrendingUp,
      color: "text-green-600",
    },
  ]

  const studyStats = [
    { label: "Total Study Time", value: "127h 30m", change: "+15h", trend: "up" },
    { label: "Tests Completed", value: "35", change: "+8", trend: "up" },
    { label: "Average Session", value: "45m", change: "+5m", trend: "up" },
    { label: "Streak Days", value: "15", change: "+3", trend: "up" },
  ]

  const periodTabs = [
    { id: "week", label: "This Week" },
    { id: "month", label: "This Month" },
    { id: "quarter", label: "This Quarter" },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Progress Tracking</h2>
        <p className="text-gray-600">Monitor your IELTS preparation journey and achievements</p>
      </div>

      {/* Overall Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Overall Band Score Progress</h3>
            <p className="text-sm text-gray-600">Your improvement over time</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">{progressData.overall.current}</p>
                  <p className="text-sm text-gray-600">Current Band Score</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdTrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">+{progressData.overall.change} from last month</span>
                </div>
              </div>

              {/* Weekly Progress Chart Placeholder */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MdBarChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Progress Chart</p>
                  <p className="text-sm text-gray-400">Visual representation of your weekly scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Study Statistics</h3>
            <p className="text-sm text-gray-600">This month's activity</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {studyStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MdTrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Module Progress */}
      <div className="bg-white rounded-lg border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Module Performance</h3>
          <p className="text-sm text-gray-600">Track your progress in each IELTS section</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(progressData.modules).map(([module, data]) => (
              <div key={module} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900 capitalize">{module}</h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Band {data.current}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${data.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{data.progress}% to target</span>
                  <span className="text-green-600">+{data.current - data.previous}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements and Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Achievements</h3>
            <p className="text-sm text-gray-600">Milestones you've unlocked</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={achievement.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-400">{achievement.date}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Study Goals</h3>
            <p className="text-sm text-gray-600">Your current objectives</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Reach Band 8.0</h4>
                  <span className="text-sm text-gray-500">7.0/8.0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[87.5%]"></div>
                </div>
                <p className="text-sm text-gray-600">87% complete - 1.0 band to go</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Complete 50 Practice Tests</h4>
                  <span className="text-sm text-gray-500">35/50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
                </div>
                <p className="text-sm text-gray-600">70% complete - 15 tests remaining</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">30-Day Study Streak</h4>
                  <span className="text-sm text-gray-500">15/30</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[50%]"></div>
                </div>
                <p className="text-sm text-gray-600">50% complete - 15 days to go</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Detailed Analytics</h3>
          <p className="text-sm text-gray-600">In-depth analysis of your performance</p>
        </div>
        <div className="p-6">
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            {periodTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedPeriod(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPeriod === tab.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {selectedPeriod === "month" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Best Performance</h4>
                <p className="text-2xl font-bold text-green-600">Band 8.5</p>
                <p className="text-sm text-gray-600">Listening - Jan 20</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Most Improved</h4>
                <p className="text-2xl font-bold text-blue-600">Writing</p>
                <p className="text-sm text-gray-600">+1.0 band improvement</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Focus Area</h4>
                <p className="text-2xl font-bold text-orange-600">Reading</p>
                <p className="text-sm text-gray-600">Needs more practice</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
