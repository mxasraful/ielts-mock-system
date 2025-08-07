import React, { useContext, useState } from "react";
import "./../Dashboard.css";
import { MainContext } from "../../../Context/MainContext";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
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

export default function () {
  const { user, headerData, logoutUser } = useContext(MainContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notiDropdownOpen, setNotiDropdownOpen] = useState(false);

  // const pathname = useLocation().pathname;

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <MdMenu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MdEmojiEvents className="w-5 h-5 text-white" />
              </div> */}
              <h1 className="text-2xl font-bold text-gray-900">
                {headerData?.title || "IELTSMOCKPREPPro"}
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <MdCalendarToday className="w-4 h-4" />
              <span className="text-sm">Schedule Test</span>
            </button>
            <div className="relative">
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  setNotiDropdownOpen(!notiDropdownOpen);
                }}
                className=" mx-3 p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <MdNotifications className="w-4 h-4" />
              </button>

              {notiDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium h6">Notification</p>
                  </div>
                  <div className="py-3 px-3">
                    <ul class="list-group">
                      <li class="list-group-item active" aria-current="true">
                        An active item
                      </li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                      <li class="list-group-item">A fourth item</li>
                      <li class="list-group-item">And a fifth one</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Drop */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotiDropdownOpen(false);
                  setDropdownOpen(!dropdownOpen);
                }}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <img
                    className="rounded-2xl"
                    src={user?.photoURL}
                    alt=""
                    style={{ width: "30px", height: "30px", marginTop: "2px" }}
                  />
                </div>
                <span className="hidden md:block text-sm">{user?.name}</span>
                <MdExpandMore className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium h6">My Account</p>
                  </div>
                  <div className="py-1">
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      to="/user/profile"
                      className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      <MdPerson className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      to="/user/settings"
                      className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      <MdSettings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      to="/user/dashboard"
                      className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      <MdEmojiEvents className="w-4 h-4 mr-2" />
                      Achievements
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      onClick={logoutUser}
                    >
                      <MdLogout className="w-4 h-4 mr-2" />
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
