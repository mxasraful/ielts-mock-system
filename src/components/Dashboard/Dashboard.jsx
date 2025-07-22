import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHeadphones,
  FaBookOpen,
  FaPenNib,
  FaMicrophone,
  FaCrown,
  FaUserCircle,
  FaClock,
  FaChartBar,
  FaBullhorn,
  FaLightbulb,
} from "react-icons/fa";
import "./Dashboard.css";
import { MainContext } from "../../Context/MainContext";
import DashNav from "./DashNav/DashNav";

const Dashboard = () => {
  const navigate = useNavigate();
  const isSubscribed = false; // Replace with actual subscription logic
  const { user, logoutUser, headerData } = useContext(MainContext);

  const modules = [
    { title: "Listening", icon: <FaHeadphones />, color: "primary", path: "/user/tests/listening" },
    { title: "Reading", icon: <FaBookOpen />, color: "success", path: "/user/tests/reading" },
    { title: "Writing", icon: <FaPenNib />, color: "warning", path: "/user/tests/writing" },
    { title: "Speaking", icon: <FaMicrophone />, color: "danger", path: "/user/tests/speaking" },
  ];

  return (
    <div className="dashboard">
      {user && user.email ? (
        <>
          {/* Dashboard Content */}
          <div className="container my-5">
            {/* Test Modules */}
            <div className="row g-4 mb-5">
              {modules.map((mod, index) => (
                <div key={index} className="col-sm-6 col-lg-3">
                  <div
                    className="card border-0 shadow h-100 hover-card bg-light"
                    onClick={() => navigate(mod.path)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-center">
                      <div className={`icon-circle text-white bg-${mod.color} mb-3 mx-auto`}>
                        {mod.icon}
                      </div>
                      <h5 className="card-title">{mod.title} Test</h5>
                      <p className="card-text text-muted small">Click to start</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscription Card */}
            <div className="card border-0 shadow p-4 mb-4">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5 className="fw-bold">Subscription Status</h5>
                  <p className={isSubscribed ? "text-success" : "text-danger"}>
                    {isSubscribed
                      ? "✅ You are subscribed to the Premium plan."
                      : "❌ You are using the Free plan."}
                  </p>
                </div>
                {!isSubscribed && (
                  <div className="col-md-4 text-md-end">
                    <button
                      className="btn btn-outline-danger d-flex align-items-center gap-2"
                      onClick={() => navigate("/subscribe")}
                    >
                      <FaCrown />
                      <span>Buy Subscription</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Progress and Schedule */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="card border-0 shadow p-3 h-100">
                  <h5 className="fw-bold text-dark mb-3">
                    <FaChartBar className="me-2 text-primary" />
                    Your Progress
                  </h5>
                  <ul className="list-group list-group-flush small">
                    <li className="list-group-item">✅ Listening: 3 tests completed</li>
                    <li className="list-group-item">✅ Reading: 2 tests completed</li>
                    <li className="list-group-item">✍️ Writing: 1 test submitted</li>
                    <li className="list-group-item">🎤 Speaking: 1 test scheduled</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow p-3 h-100">
                  <h5 className="fw-bold text-dark mb-3">
                    <FaClock className="me-2 text-warning" />
                    Next Scheduled Test
                  </h5>
                  <p className="mb-2">🗓️ <strong>Speaking Test</strong></p>
                  <p className="text-muted">📍 Date: 15th July 2025<br />⏰ Time: 3:00 PM</p>
                  <button className="btn btn-sm btn-outline-dark mt-2">View Schedule</button>
                </div>
              </div>
            </div>

            {/* Tips & Announcements */}
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow p-3 h-100 bg-light">
                  <h5 className="fw-bold text-dark mb-3">
                    <FaLightbulb className="me-2 text-info" />
                    Tip of the Day
                  </h5>
                  <p className="text-muted small">
                    ✨ Practice listening with different accents to improve performance.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow p-3 h-100 bg-light">
                  <h5 className="fw-bold text-dark mb-3">
                    <FaBullhorn className="me-2 text-danger" />
                    Announcements
                  </h5>
                  <ul className="small mb-0">
                    <li>🎉 New full-length mock test added!</li>
                    <li>🔔 Writing test evaluation upgraded</li>
                    <li>📢 Join Speaking Webinar – July 20</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Not logged in
        <div className="container text-center my-5">
          <h2 className="text-danger">Access Denied</h2>
          <p className="text-muted">Please sign in to access the dashboard.</p>
          <button className="btn btn-primary" onClick={() => navigate("/signin")}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
