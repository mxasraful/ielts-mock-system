// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AuthPage from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Subscribe from "./components/Subscribe/Subscribe";
import Header from "./components/Header/Header";
import Testimonial from "./components/Tesimonials/Testimonials";
import ShortFooter from "./components/Footer/ShortFooter";
import FaqPage from "./components/FAQ/FAQ";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import UserProfile from "./components/Dashboard/Profile/Profile";
import DashNav from "./components/Dashboard/DashNav/DashNav";
import UserWrapper from "./components/UserWrapper/UserWrapper";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/contact",
    element: (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Contact />
        <ShortFooter />
      </div>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Header />
        <AuthPage />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Header />
        <AuthPage />
      </>
    ),
  },
  {
    path: "/subscribe",
    element: (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Subscribe />
        <ShortFooter colorBlack={false} />
      </div>
    ),
  },
  {
    path: "/testimonials",
    element: (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Testimonial />
        <ShortFooter colorBlack={false} />
      </div>
    ),
  },
  {
    path: "/faq",
    element: (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <FaqPage />
        <ShortFooter colorBlack={false} />
      </div>
    ),
  },
  {
    path: "/privacy",
    element: (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <PrivacyPolicy />
        <ShortFooter colorBlack={false} />
      </div>
    ),
  },
  {
    path: "/user",
    element: <UserWrapper />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "settings", element: <div>User Settings</div> },
      {
        path: "profile",
        element: (
          <div className="d-flex flex-column min-vh-100">
            <UserProfile />
          </div>
        ),
      },
      { path: "settings", element: <div>User Settings</div> },
    ],
  },

  {
    path: "*",
    element: (
      <h1 style={{ textAlign: "center", padding: "2rem" }}>
        404 - Page Not Found
      </h1>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
