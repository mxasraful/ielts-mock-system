import { useContext, useState } from "react"
import { MdSave, MdVisibility, MdVisibilityOff } from "react-icons/md"
import { MainContext } from "../../../../Context/MainContext"

export default function DashSettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    testReminders: true,
    progressUpdates: false,
    communityUpdates: true,
  })
  const [selectedTab, setSelectedTab] = useState("profile")


    const { user, loginUser } = useContext(MainContext);

  const settingsTabs = [
    { id: "profile", label: "Profile" },
    { id: "notifications", label: "Notifications" },
    { id: "privacy", label: "Privacy" },
    { id: "preferences", label: "Preferences" },
    { id: "data", label: "Data" },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account preferences and application settings</p>
      </div>

      <div className="space-y-6">
        <div className="flex bg-gray-100 rounded-lg p-1">
          {settingsTabs.map((tab) => (
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

        {selectedTab === "profile" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
                <p className="text-sm text-gray-600">Update your personal information and profile details</p>
              </div>
              <div className="p-6 space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium">
                      <img className="rounded-full" src={user?.photoURL} alt="" style={{width: "80px", height: "80px"}} />
                    </span>
                  </div>
                  <div className="space-y-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Change Photo
                    </button>
                    <button className="block px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors text-sm">
                      Remove Photo
                    </button>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* IELTS Goals */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">IELTS Goals</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Target Band Score</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                        <option value="6.0">6.0</option>
                        <option value="6.5">6.5</option>
                        <option value="7.0">7.0</option>
                        <option value="7.5">7.5</option>
                        <option value="8.0" selected>
                          8.0
                        </option>
                        <option value="8.5">8.5</option>
                        <option value="9.0">9.0</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Target Test Date</label>
                      <input
                        type="date"
                        defaultValue="2024-06-15"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <MdSave className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
                <p className="text-sm text-gray-600">Update your password to keep your account secure</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter current password"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <MdVisibilityOff className="w-4 h-4" /> : <MdVisibility className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content would continue here... */}
      </div>
    </div>
  )
}
