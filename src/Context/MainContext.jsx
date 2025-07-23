// src/context/MainContext.js
import React, { createContext, useState } from "react";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Default header data
  const [headerData, setHeaderData] = useState({
    title: "IELTS Mock Prep Pro",
    description: "Your ultimate IELTS preparation companion",
  });

  // Default landing header links
  const [landingHeaderLinks, setLandingHeaderLinks] = useState([
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Pricing",
      path: "/subscribe",
    },
    {
      title: "Testimonials",
      path: "/testimonials",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ]);



  // Default hero data
  const [heroData, setHeroData] = useState({
    title: "Master Your IELTS with Comprehensive Mock Tests",
    subtitle: "Experience real exam conditions, get detailed feedback, and track your progress to achieve your dream IELTS score.",
    ctaPrimary: "Start Your Free Mock Test",
    ctaSecondary: "Learn More",
  });

  // Default contact information
  const [contactInfo, setContactInfo] = useState({
    email: "mxasraful@outlook.com",
    phone: "+1 (123) 456-7890",
    address: "123 IELTS Prep St, Test City, TC 12345",
    ghLink: "https//github.com/mxasraful",
  });

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <MainContext.Provider value={{ user, loginUser, logoutUser, headerData, landingHeaderLinks, heroData, contactInfo }}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
