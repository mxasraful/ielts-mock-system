import React, { use, useContext, useState } from "react";
import "./profile.css";
import { MainContext } from "../../../Context/MainContext";

const UserProfile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);
  const [showPassChangeeModal, setPassChangeModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
          src={
            userMain?.photoURL ||
            "https://play-lh.googleusercontent.com/DAjoLy_iFvFDWypZiQa8WALBpARu-0nui8VjiWzo5rm85A15pF9iHwNFIXC7pFqgbaE"
          }
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2 className=" h2">{userMain?.name}</h2>
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
        <button onClick={() => setPassChangeModal(true)}>
          Change Password
        </button>
        <button onClick={() => setShowDeleteProfileModal(true)}>
          Delete Account
        </button>
        <button className="logout" onClick={() => setShowLogoutModal(true)}>
          Logout
        </button>
      </div>
      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="">
            <div className="bg-white shadow-sm p-4 rounded modal-content">
              <h3>Edit Profile</h3>
              <p className="text-muted">
                Update your profile information below.
              </p>
              <br />
              <br />
              <h4>Profile Info</h4>
              <br />
              <div>
                <div>
                  <img
                    src={userMain?.photoURL}
                    alt="Profile"
                    className="profile-picture mb-3"
                  />
                  <button
                    className="btn btn-outline-secondary mb-3"
                    // onClick={() => setShowEditModal()}
                  >
                    Change Photo
                  </button>
                </div>
                <div className="d-flex">
                  <div className="me-3">
                    <label htmlFor="proEditFormName">Name</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="proEditFormName "
                      placeholder="Full Name"
                      defaultValue={userMain?.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="proEditFormName">Name</label>
                    <input
                      type="email"
                      className="form-control mb-2"
                      id="proEditFormEmail"
                      placeholder="Email"
                      defaultValue={userMain?.email}
                    />
                  </div>
                </div>
              </div>
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
        </div>
      )}
      {/* Change Password Modal */}
      {showPassChangeeModal && (
        <div className="modal-overlay">
          <div className="">
            <div className="bg-white shadow-sm p-4 rounded modal-content">
              <h3>Change Password</h3>
              <p className="text-muted">Update your password below.</p>
              <br />
              <div>
                <label htmlFor="changePassForm">
                  Current Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control mb-2"
                  id="changePassForm"
                  placeholder="Current Password"
                />
              </div>
              <div className="mt-3 d-flex">
                <div className="me-3">
                  <label htmlFor="changePassForm">
                    New Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    id="changePassForm"
                    placeholder="New Password"
                  />
                </div>
                <div className="">
                  <label htmlFor="changePassFormConfirm">
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    id="changePassFormConfirm"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="modal-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    // Handle password change logic here
                    setPassChangeModal(false);
                  }}
                >
                  Change Password
                </button>
                <button
                  className="cancel"
                  onClick={() => setPassChangeModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Delete Profile Modal */}
      {showDeleteProfileModal && (
        <div className="modal-overlay">
          <div className="">
            <div className="bg-white shadow-sm p-4 rounded modal-content">
              <h3>Delete Profile</h3>
              <p className="text-muted">
                Are you sure you want to delete your profile? This action cannot
                be undone.
              </p>
              <div className="modal-actions">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    // Handle profile deletion logic here
                    setShowDeleteProfileModal(false);
                  }}
                >
                  Delete Profile
                </button>
                <button
                  className="cancel"
                  onClick={() => setShowDeleteProfileModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="">
            <div className="bg-white shadow-sm p-4 rounded modal-content">
              <h3>Logout</h3>
              <p className="text-muted">
                Are you sure you want to logout? You will need to log in again.
                <br />
                <span className="text-warning">
                  Disclaimer: Logging out will end your current session and any
                  unsaved progress may be lost.
                </span>
              </p>
              <div className="modal-actions">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    logoutUser();
                    setShowLogoutModal(false);
                  }}
                >
                  Logout
                </button>
                <button
                  className="cancel"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;




