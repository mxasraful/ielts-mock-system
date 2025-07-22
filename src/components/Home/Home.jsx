import React, { useContext, useState } from "react";
import {
  FaBookOpen,
  FaChartLine,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";
import Header from "../Header/Header";
import Banner from "./Banner/Banner";
import Footer from "../Footer/Footer";
import { MainContext } from "../../Context/MainContext";

// const [page, setPage] = useState("home");

export default function Home () {
  
    const { headerData } = useContext(MainContext);
  
    const pageTitle = `${headerData?.title || "IELTS MOCK PREP Pro"} - Home`;
    document.title = pageTitle;
    
    return (
    // Main Home Component
    <div>
      <Header />
      <Banner />

      <section id="features" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Why Choose IELTSMOCKPREPPro?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <div className="icon mb-3">📘</div>
                <h4>Full-Length Mock Tests</h4>
                <p>
                  Practice with tests designed to mirror the actual IELTS exam,
                  covering all four modules.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <div className="icon mb-3">📊</div>
                <h4>Detailed Analytics</h4>
                <p>
                  Track your progress with insightful graphs and scores for each
                  section.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <div className="icon mb-3">✅</div>
                <h4>Expert Feedback</h4>
                <p>
                  Receive constructive criticism on your writing and speaking
                  from certified examiners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-danger text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Ace Your IELTS Exam?</h2>
          <p className="mb-4">
            Join thousands of successful students worldwide. Start your journey
            today!
          </p>
          <button className="btn btn-light text-danger fw-bold">
            Sign Up for Free
          </button>
        </div>
      </section>

      <Footer />

      <script>
        document.getElementById('year').textContent = new Date().getFullYear();
      </script>
    </div>
  );
};

