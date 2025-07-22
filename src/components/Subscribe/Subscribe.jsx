import React, { useContext } from "react";
import { FaCheckCircle, FaCrown, FaStar, FaGem } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Subscribe.css";
import { MainContext } from "../../Context/MainContext";

const Subscribe = () => {
  
    const { headerData } = useContext(MainContext);
  
    const pageTitle = `${headerData?.title || "IELTS MOCK PREP Pro"} - Subscribe`;
    document.title = pageTitle;
    
  const navigate = useNavigate();

  const handleSubscribe = (planName) => {
    alert(`You selected the ${planName} plan. Redirecting to payment...`);
    navigate("/user/dashboard");
  };

  const plans = [
    {
      name: "Free Plan",
      price: "৳ 0",
      features: [
        "1 test/module",
        "No login required",
        "No score tracking",
      ],
      btn: "Current Plan",
      disabled: true,
      icon: <FaStar />,
      color: "secondary",
    },
    {
      name: "Basic Plan",
      price: "৳ 199 /mo",
      features: [
        "Up to 3 tests/module",
        "Limited score tracking",
        "No speaking evaluation",
      ],
      btn: "Buy Basic",
      icon: <FaGem />,
      color: "info",
    },
    {
      name: "Premium Plan",
      price: "৳ 499 /mo",
      features: [
        "Unlimited tests",
        "Score analysis & history",
        "Speaking evaluation",
        "Priority support",
      ],
      btn: "Buy Premium",
      icon: <FaCrown />,
      color: "danger",
      highlight: true,
    },
    {
      name: "Lifetime Plan",
      price: "৳ 1499 /once",
      features: [
        "Unlimited access forever",
        "All premium features",
        "One-time payment",
      ],
      btn: "Buy Lifetime",
      icon: <FaCrown />,
      color: "dark",
    },
  ];

  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-danger">Choose Your Plan</h1>
          <p className="text-muted">Find the right plan for your IELTS preparation</p>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div
                className={`card shadow h-100 border-2 ${
                  plan.highlight ? "border-danger" : "border-light"
                }`}
              >
                <div className="card-body text-center">
                  <div className={`text-${plan.color} mb-3`}>
                    {plan.icon && React.cloneElement(plan.icon, { size: 40 })}
                  </div>
                  <h5 className="card-title fw-bold text-dark">{plan.name}</h5>
                  <p className="card-text text-muted">{plan.description}</p>
                  <h2 className={`my-3 text-${plan.color}`}>{plan.price}</h2>
                  <ul className="list-unstyled text-start px-3 small mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheckCircle className="text-success me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn btn-${plan.color} fw-bold w-100`}
                    onClick={() => handleSubscribe(plan.name)}
                    disabled={plan.disabled}
                  >
                    {plan.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subscribe;
