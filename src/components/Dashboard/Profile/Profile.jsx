import React, { use, useContext, useState } from "react";
import "./profile.css";
import { MainContext } from "../../../Context/MainContext";

const UserProfile = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const { user, logoutUser } = useContext(MainContext);

  const userMain = {
    name: user?.name,
    email: user?.email,
    membership: "Premium",
    photoURL: user?.photoURL,
    attempts: 12,
    averageScore: 7.5,
    progress: 85,
    badges: ["High Scorer", "Consistent Learner", "Speaking Master"],
    testHistory: [
      { date: "2025-06-01", module: "Full Test", score: 7.0 },
      { date: "2025-06-15", module: "Reading", score: 8.0 },
      { date: "2025-06-25", module: "Writing", score: 7.5 },
    ],
  };

  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <img
          src={userMain?.photoURL || "https://play-lh.googleusercontent.com/DAjoLy_iFvFDWypZiQa8WALBpARu-0nui8VjiWzo5rm85A15pF9iHwNFIXC7pFqgbaE"}
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>{userMain?.name}</h2>
          <p>{userMain?.email}</p>
          <span className="membership">{userMain?.membership} Member</span>
          <button className="edit-btn" onClick={() => setShowEditModal(true)}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="profile-stats">
        <div className="stat">
          <h3>{userMain?.attempts}</h3>
          <p>Tests Taken</p>
        </div>
        <div className="stat">
          <h3>{userMain?.averageScore}</h3>
          <p>Avg. Band</p>
        </div>
        <div className="stat">
          <h3>{userMain?.progress}%</h3>
          <p>Progress</p>
        </div>
      </div>

      {/* Chart (Placeholder) */}
      <div className="progress-chart">
        <h4>Your Progress Over Time</h4>
        <div className="chart-placeholder">📊 Progress Chart Placeholder</div>
      </div>

      {/* Badges */}
      <div className="badge-section">
        <h4>Achievements</h4>
        <div className="badges">
          {userMain?.badges?.map((badge, index) => (
            <span key={index} className="badge">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Test History */}
      <div className="history-section">
        <h4>Recent Test History</h4>
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Module</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {userMain?.testHistory?.map((test, idx) => (
              <tr key={idx}>
                <td>{test.date}</td>
                <td>{test.module}</td>
                <td>{test.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Account Settings */}
      <div className="profile-actions">
        <button>Change Password</button>
        <button>Delete Account</button>
        <button className="logout" onClick={() => logoutUser()}>Logout</button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Profile</h3>
            <input
              type="text"
              placeholder="Full Name"
              defaultValue={userMain?.name}
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue={userMain?.email}
            />
            <div className="modal-actions">
              <button onClick={() => setShowEditModal(false)}>Save</button>
              <button
                className="cancel"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
