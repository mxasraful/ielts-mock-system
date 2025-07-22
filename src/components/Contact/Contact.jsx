import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MainContext } from "../../Context/MainContext";

const Contact = () => {

  
  const {contactInfo} = React.useContext(MainContext);

  return (
    <div className="contact-page bg-light">
      <div className="container py-5">
        <h2 className="text-center mb-4 text-danger fw-bold">Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          Have questions or need support? We're here to help.
        </p>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5">
            <div className="bg-white shadow-sm p-4 rounded h-100">
              <h5 className="mb-4 text-dark">Contact Information</h5>
              <p className="mb-3">
                <FaEnvelope className="me-2 text-danger" />
                <strong>Email:</strong> {contactInfo?.email || ""}
              </p>
              <p className="mb-3">
                <FaPhoneAlt className="me-2 text-danger" />
                <strong>Phone:</strong> {contactInfo?.phone || ""}
              </p>
              <p className="mb-3">
                <FaMapMarkerAlt className="me-2 text-danger" />
                <strong>Address:</strong> {contactInfo?.address || "123 IELTS Prep St, Test City, TC 12345"}
              </p>
              <p className="small text-muted">
                Our team typically replies within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="bg-white shadow-sm p-4 rounded">
              <h5 className="mb-4 text-dark">Send Us a Message</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-danger w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;