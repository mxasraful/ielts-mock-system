import { use, useContext, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import DashNav from "../Dashboard/DashNav/DashNav";

function UserWrapper() {
  const { user } = useContext(MainContext);
  const navigate = useNavigate();

  const pathname = useLocation().pathname;

  useEffect(() => {
    () => navigate("/user/dashboard");
  }, []);

  return (
    <div>
      {/* Optional: Dashboard header or layout wrapper */}
      {user && user.email ? (
        <>
          <DashNav />
          <Outlet />
          {pathname === "/user" ? (
            <div className="mt-5" style={{ textAlign: "center" }}>
              <h4>You Are Logged In</h4>
              <Link className="btn btn-outline-primary" to="/user/dashboard">
                Go To Dashboard
              </Link>
            </div>
          ): pathname === "/user/" ? (
            <div className="mt-5" style={{ textAlign: "center" }}>
              <h4>You Are Logged In</h4>
              <Link className="btn btn-outline-primary" to="/user/dashboard">
                Go To Dashboard
              </Link> 
              </div>
          ) : ""}
        </>
      ) : (
        (window.location.href = "/signin")
      )}

      {/* Render the nested routes */}
    </div>
  );
}

export default UserWrapper;
