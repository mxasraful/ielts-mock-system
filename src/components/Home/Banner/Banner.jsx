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
            <button className="btn btn-light text-danger fw-bold me-2 mb-2">
              {
                heroData?.ctaPrimary || "Start Your Free Mock Test"
              }
            </button>
            <button className="btn btn-outline-light mb-2">
              {
                heroData?.ctaSecondary || "Learn More"
              }
            </button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
          </div>
        </div>
      </section>
    </>
  );
}
