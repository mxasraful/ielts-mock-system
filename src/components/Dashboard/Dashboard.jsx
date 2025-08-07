import { useEffect, useState } from "react";
import {
  MdAssignment,
  MdTrendingUp,
  MdCalendarToday,
  MdEmojiEvents,
  MdBarChart,
  MdPeople,
  MdSettings,
  MdMenu,
  MdExpandMore,
  MdPerson,
  MdLogout,
  MdNotifications,
} from "react-icons/md";
import OverviewPage from "./Components/Overview/Overview";
import ProgressPage from "./Components/ProgressPage/ProgressPage";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import PracticeTestsPage from "./Components/PracticeTestsPage/PracticeTestsPage";
import CommunityPage from "./Components/CommunityPage/CommunityPage";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function IELTSDashboard() {
  const [selectedModule, setSelectedModule] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathnameUser = useLocation().pathname.substring(6, 1111);
  const navigate = useNavigate()

  useEffect(() => {
    pathnameUser === "dashboard"
      ? setSelectedModule("overview")
      : pathnameUser === "tests"
      ? setSelectedModule("tests")
      : pathnameUser === "settings"
      ? setSelectedModule("settings")
      : pathnameUser === "progress"
      ? setSelectedModule("progress")
      : pathnameUser === "community"
      ? setSelectedModule("community")
      : setSelectedModule("overview");
  }, [pathnameUser]);

  // Redirect profile to settings
  useEffect(() => {
    if (pathnameUser) {
      if (pathnameUser === "profile") {        
        navigate("/user/settings")
      }
    }
  }, [pathnameUser])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-26"
          } bg-white border-r border-gray-200 min-h-screen transition-all duration-300`}
        >
          <div className="p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex mb-4 w-full justify-center p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <MdMenu className="w-5 h-5" />
            </button>
            <nav className="space-y-2">
              <Link
                to="/user/dashboard"
                className={`w-full flex items-center ${
                  sidebarOpen ? "justify-start" : "justify-center"
                } p-3 rounded-md transition-colors ${
                  selectedModule === "overview"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={!sidebarOpen ? "Overview" : ""}
              >
                <MdBarChart className="w-4 h-4" />
                {sidebarOpen && <span className="ml-2">Overview</span>}
              </Link>
              <Link
                to="/user/tests"
                className={`w-full flex items-center ${
                  sidebarOpen ? "justify-start" : "justify-center"
                } p-3 rounded-md transition-colors ${
                  selectedModule === "tests"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={!sidebarOpen ? "Practice Tests" : ""}
              >
                <MdAssignment className="w-4 h-4" />
                {sidebarOpen && <span className="ml-2">Practice Tests</span>}
              </Link>
              <Link
                to="/user/progress"
                className={`w-full flex items-center ${
                  sidebarOpen ? "justify-start" : "justify-center"
                } p-3 rounded-md transition-colors ${
                  selectedModule === "progress"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={!sidebarOpen ? "Progress" : ""}
              >
                <MdTrendingUp className="w-4 h-4" />
                {sidebarOpen && <span className="ml-2">Progress</span>}
              </Link>
              <Link
                to="/user/community"
                className={`w-full flex items-center ${
                  sidebarOpen ? "justify-start" : "justify-center"
                } p-3 rounded-md transition-colors ${
                  selectedModule === "community"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={!sidebarOpen ? "Community" : ""}
              >
                <MdPeople className="w-4 h-4" />
                {sidebarOpen && <span className="ml-2">Community</span>}
              </Link>
              <Link
                to="/user/settings"
                className={`w-full flex items-center ${
                  sidebarOpen ? "justify-start" : "justify-center"
                } p-3 rounded-md transition-colors ${
                  selectedModule === "settings"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={!sidebarOpen ? "Settings" : ""}
              >
                <MdSettings className="w-4 h-4" />
                {sidebarOpen && <span className="ml-2">Settings</span>}
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {selectedModule === "overview" && <OverviewPage />}
          {selectedModule === "tests" && <PracticeTestsPage />}
          {selectedModule === "progress" && <ProgressPage />}
          {selectedModule === "community" && <CommunityPage />}
          {selectedModule === "settings" && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}
