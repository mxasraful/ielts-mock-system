import React, { useContext } from "react";
import { MainContext } from "../../../Context/MainContext";

export default function Banner() {

  const {heroData} = useContext(MainContext);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="fw-bold mb-4">
            {
              heroData?.title || "Ace Your IELTS with Our Free Mock Tests"
            }
          </h1>
          <p className="lead mb-4">
            {
              heroData?.subtitle || "Experience real exam conditions, get detailed feedback, and track your progress to achieve your dream IELTS score."
            }
          </p>
          <div>
            <button className="btn btn-light text-danger fw-bold me-2">
              {
                heroData?.ctaPrimary || "Start Your Free Mock Test"
              }
            </button>
            <button className="btn btn-outline-light">
              {
                heroData?.ctaSecondary || "Learn More"
              }
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
