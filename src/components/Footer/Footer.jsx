import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import { Link } from "react-router-dom";
import "./Footer.css";
import ShortFooter from "./ShortFooter";

export default function Footer() {
  // Accessing headerData from MainContext
  const { contactInfo, headerData } = useContext(MainContext);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4">
              <h3>{headerData?.title}</h3>
              <p>Your ultimate companion for IELTS exam preparation.</p>
            </div>
            <div className="col-md-4">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <p>Email: {contactInfo?.email || "mxasraful@outlook.com"} </p>
              <p>Phone: {contactInfo?.phone || ""} </p>
            </div>
          </div>
        </div>
      </footer>
      <ShortFooter clolorBlack={true} />
    </>
  );
}
