import React, { useContext } from "react";
import "./../Dashboard.css";
import { MainContext } from "../../../Context/MainContext";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function () {

  const { user, headerData, logoutUser } = useContext(MainContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/user/dashboard">
            {headerData?.title || "IELTSMOCKPREPPro"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/user/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/tests">
                  Tests
                </Link>
              </li>
            </ul>

            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle d-flex align-items-center gap-2"
                id="userMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUserCircle size={20} />
                <span>{user?.name || user?.email}</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userMenu"
              >
                <li>
                  <Link className="dropdown-item" to="/user/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    className="dropdown-item text-danger"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
