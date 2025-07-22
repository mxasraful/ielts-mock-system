import React, { useContext } from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { MainContext } from "../../Context/MainContext";

const testimonials = [
  {
    name: "Sarah Ahmed",
    country: "Bangladesh",
    quote:
      "IELTSMOCKPREPPro helped me build confidence. The speaking mock tests were so realistic!",
  },
  {
    name: "James Smith",
    country: "UK",
    quote:
      "The analytics and feedback system really helped me understand where to improve. I scored band 8!",
  },
  {
    name: "Li Wei",
    country: "China",
    quote:
      "The full-length mock tests gave me the real exam feeling. I highly recommend it to serious test-takers.",
  },
  {
    name: "Amina Khan",
    country: "Pakistan",
    quote:
      "Customer support is amazing, and the platform is easy to use. Thank you IELTSMOCKPREPPro!",
  },
];

const Testimonial = () => {

  const { headerData } = useContext(MainContext);

  const pageTitle = `Testimonials - ${headerData?.title || "IELTS MOCK PREP Pro"}`;
  document.title = pageTitle;

  return (
    <>
      {/* Page Content */}
      <div className="testimonial-page py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-danger fw-bold mb-4">What Our Users Say</h2>
          <p className="text-center text-muted mb-5">
            Hear from students who improved their IELTS scores using {headerData?.title || "IELTS MOCK PREP Pro"}.
          </p>

          <div className="row g-4">
            {testimonials.map((t, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 shadow-sm p-3 position-relative testimonial-card">
                  <FaQuoteLeft className="quote-icon text-danger" size={28} />
                  <p className="text-muted fst-italic mt-3 mb-4">"{t.quote}"</p>
                  <h6 className="fw-bold text-dark mb-0">{t.name}</h6>
                  <small className="text-secondary">{t.country}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
