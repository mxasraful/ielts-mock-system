import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { user, logoutUser, headerData, landingHeaderLinks } = useContext(MainContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-danger" href="/">
            {headerData?.title || "IELTSMOCKPREPPro"}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {
                landingHeaderLinks ? landingHeaderLinks.map((llItem) => (
                  <li className="nav-item" key={llItem.title}>
                    <Link className="nav-link" to={llItem.path}>
                      {llItem.title}
                    </Link>
                  </li>
                )) :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li> 
                </>        
              }
            </ul>
            <div className="d-flex ms-lg-3">
              {user && user.email ? (
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="rounded-circle me-2"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </Link>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/user/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => {logoutUser()}} >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link to="/signin" className="btn btn-outline-danger px-4 rounded-pill me-2">
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn btn-danger px-4 rounded-pill">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
