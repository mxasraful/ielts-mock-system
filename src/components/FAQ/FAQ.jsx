import React, { useContext } from 'react';
import './faq.css';
import { MainContext } from '../../Context/MainContext';

const FaqPage = () => {

    const { contactInfo, headerData } = useContext(MainContext);

    console.log(headerData);

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div>
        <div className="faq-item">
          <h2 className=" h2">1. What is IELTS Mock Prep Pro?</h2>
          <p>IELTS Mock Prep Pro is an online platform offering full-length mock tests, analytics, and expert feedback to help you prepare for the IELTS exam.</p>
        </div>
        <div className="faq-item">
          <h2 className=" h2">2. Is it free to start?</h2>
          <p>Yes! You can sign up and take your first mock test for free.</p>
        </div>
        {/* Repeat other FAQ items the same way... */}
        <div className="faq-item">
          <h2 className=" h2">10. How do I contact support?</h2>
          <p>Email us at {contactInfo?.email || "info@ieltspreppro.com"} or call {contactInfo?.phone || "0000"}.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
