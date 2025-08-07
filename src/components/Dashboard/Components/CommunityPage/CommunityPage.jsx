import { useState } from "react"
import { MdAccessTime, MdAdd, MdChat, MdEmojiEvents, MdFilterList, MdMenuBook, MdPeople, MdSearch, MdShare, MdThumbUp } from "react-icons/md"

export default function DashCommunityPage() {
  const [selectedTab, setSelectedTab] = useState("discussions")

  const discussions = [
    {
      id: 1,
      title: "Tips for improving Writing Task 2 coherence",
      author: "Sarah Chen",
      avatar: "SC",
      replies: 23,
      likes: 45,
      time: "2 hours ago",
      category: "Writing",
      excerpt:
        "I've been struggling with organizing my ideas in Task 2. Here are some strategies that helped me improve from 6.0 to 7.5...",
    },
    {
      id: 2,
      title: "Speaking Part 2: How to extend your answers naturally",
      author: "Mike Johnson",
      avatar: "MJ",
      replies: 18,
      likes: 32,
      time: "4 hours ago",
      category: "Speaking",
      excerpt: "Many students struggle with the 2-minute speaking task. Here's a framework that works...",
    },
    {
      id: 3,
      title: "Listening Section 4: Academic lecture strategies",
      author: "Dr. Emma Wilson",
      avatar: "EW",
      replies: 15,
      likes: 28,
      time: "6 hours ago",
      category: "Listening",
      excerpt: "Section 4 can be challenging due to its academic nature. Let me share some techniques...",
    },
  ]

  const studyGroups = [
    {
      id: 1,
      name: "IELTS Academic Writing Circle",
      members: 156,
      description: "Weekly writing practice and peer review sessions",
      nextSession: "Tomorrow 7:00 PM",
      level: "Intermediate",
    },
    {
      id: 2,
      name: "Speaking Practice Partners",
      members: 89,
      description: "Daily speaking practice with native speakers",
      nextSession: "Today 3:00 PM",
      level: "All Levels",
    },
    {
      id: 3,
      name: "Reading Comprehension Masters",
      members: 203,
      description: "Advanced reading strategies and practice",
      nextSession: "Friday 6:00 PM",
      level: "Advanced",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Alex Thompson", score: 8.5, tests: 45, avatar: "AT" },
    { rank: 2, name: "Maria Garcia", score: 8.0, tests: 38, avatar: "MG" },
    { rank: 3, name: "John Smith", score: 7.5, tests: 42, avatar: "JS" },
    { rank: 4, name: "Lisa Wang", score: 7.5, tests: 35, avatar: "LW" },
    { rank: 5, name: "You", score: 7.0, tests: 35, avatar: "JD", isCurrentUser: true },
  ]

  const communityTabs = [
    { id: "discussions", label: "Discussions" },
    { id: "groups", label: "Study Groups" },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Community</h2>
        <p className="text-gray-600">Connect with fellow IELTS learners, share tips, and learn together</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdPeople className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">12.5K</p>
              <p className="text-sm text-gray-600">Active Members</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdChat className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">1.2K</p>
              <p className="text-sm text-gray-600">Discussions</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdMenuBook className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">45</p>
              <p className="text-sm text-gray-600">Study Groups</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <MdEmojiEvents className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">8.5</p>
              <p className="text-sm text-gray-600">Top Score</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {communityTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedTab === tab.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MdAdd className="w-4 h-4 mr-2" />
                New Post
              </button>
            </div>

            {selectedTab === "discussions" && (
              <div className="p-6">
                {/* Search and Filter */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search discussions..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <MdFilterList className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                </div>

                {/* Discussions List */}
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <div
                      key={discussion.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">{discussion.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600 cursor-pointer">
                              {discussion.title}
                            </h3>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full ml-4">
                              {discussion.category}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{discussion.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>by {discussion.author}</span>
                              <span>{discussion.time}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                                <MdThumbUp className="w-4 h-4 mr-1" />
                                {discussion.likes}
                              </button>
                              <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                                <MdChat className="w-4 h-4 mr-1" />
                                {discussion.replies}
                              </button>
                              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                                <MdShare className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "groups" && (
              <div className="p-6">
                <div className="space-y-4">
                  {studyGroups.map((group) => (
                    <div key={group.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{group.name}</h3>
                          <p className="text-gray-600 mb-2">{group.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <MdPeople className="w-4 h-4 mr-1" />
                              {group.members} members
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                              {group.level}
                            </span>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Join Group
                        </button>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-600">
                          <MdAccessTime className="w-4 h-4 mr-1" />
                          Next session: {group.nextSession}
                        </div>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Leaderboard */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
              <p className="text-sm text-gray-600">This month's highest scorers</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      user.isCurrentUser ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-medium">
                      {user.rank}
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">{user.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.tests} tests</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-gray-900">Band {user.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full flex items-center justify-start px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MdChat className="w-4 h-4 mr-2" />
                Start Discussion
              </button>
              <button className="w-full flex items-center justify-start px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MdPeople className="w-4 h-4 mr-2" />
                Find Study Partner
              </button>
              <button className="w-full flex items-center justify-start px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MdMenuBook className="w-4 h-4 mr-2" />
                Join Study Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
