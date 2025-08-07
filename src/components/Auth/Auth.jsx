import React, { useContext, useEffect, useState } from "react";
import "./Auth.css";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebaseConfig"; // adjust path as needed
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { MainContext } from "../../Context/MainContext";
import { Button, Form, Input } from "@heroui/react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    name: null,
  });
  const { user, loginUser } = useContext(MainContext);
  const navigate = useNavigate();

  // Set the page title dynamically based on headerData
  const { headerData } = useContext(MainContext);

  const pageTitle = `${
    headerData?.title || "IELTS MOCK PREP Pro"
  } - Signin / Sign Up`;
  document.title = pageTitle;

  // Get the current path to determine if it's sign up or sign in
  // This is a workaround since the component is used for both sign up and sign in
  const authPath = useLocation().pathname;

  // Set the initial state based on the path
  // If the path is "/signup", set isSignUp to true, otherwise false
  useEffect(() => {
    if (authPath === "/signup") {
      setIsSignUp(true);
    } else if (authPath === "/signin") {
      setIsSignUp(false);
    }
  }, [authPath]);

  useEffect(() => {
    if (user?.email) {
      navigate("/user/dashboard"); // Redirect to dashboard if user is logged in
    }
  }, [user]);

  const toggleForm = () => {
    navigate(isSignUp ? "/signin" : "/signup");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      if (isSignUp) {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User signed up:", userCred.user);
      } else {
        const userCred = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User signed in:", userCred.user);
      }
    } catch (error) {
      console.error("Auth error:", error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleUserData = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      loginUser(googleUserData);
    } catch (error) {
      console.error("Google sign in error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      {user && user.email ? (
        <div className="text-center mt-5">
          <h2 className="text-success h2">
            Welcome, {user.name || user.email}!
          </h2>
          <p className="text-muted">You are already logged in.</p>
        </div>
      ) : (
        <div
          className="form-container bg-white p-4 rounded shadow-sm mt-5 mx-auto"
          style={{ maxWidth: "450px" }}
        >
          <h2 className="text-center text-danger mb-4 h2">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formname"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="formemail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="formpassword"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <br />
          <div className="text-center mt-3">
            <p className="text-muted">Or sign in with</p>
            <button
              className="btn btn-outline-danger me-2 w-100"
              onClick={handleGoogleSignIn}
            >
              <div className="gLoginBtnIconAndInfo" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaGoogle className="mb-1 me-3" style={{marginTop: "4px"}} />
                &nbsp;
                <span>Google</span>
              </div>
            </button>
          </div>
          <p className="mt-3 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            &nbsp;
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={toggleForm}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      )}
      <br />
      <br />
      {user && user.email ? (
        <div className="text-center text-muted">
          <a href="/user/dashboard" className="btn btn-outline-info px-5">
            Dashboard
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AuthPage;
