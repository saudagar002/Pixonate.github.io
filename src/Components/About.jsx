import React from "react";
import { useLocation } from "react-router-dom";
import "../Style/About.css";
import Expert1 from "./Expert1";
import Support from "./Support";

const AboutUs = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/About";

  return (
    <>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-left">
            <p>About Us</p>
            <h1>
              Building greater futures through innovation and collective
              knowledge
            </h1>
            <p>
              Pixonate Lab Private Limited is an IT services, consulting, and
              business solutions organization that has been partnering with
              businesses for the last 02 years. We believe innovation and
              collective knowledge can transform all our futures with greater
              purpose.
            </p>
            <p>
              We make a difference beyond our own business and those of our
              clients, ensuring our actions and what we do together, empower
              people and communities to achieve more and live better lives.
            </p>

            <div className="clock-logo">
              <i className="fa-solid fa-clock-rotate-left"></i> ....
              <h3>Expert skills</h3>
            </div>

            <div className="one">
              <p>
                <i class="fa-solid fa-check"></i>"AI and Machine Learning"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Cloud Computing"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Cybersecurity"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Data and Analytics"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Full-Stack Development"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Custom Software Development"
              </p>
            </div>
          </div>

          <div className="about-right">
            <img src="/About-1.jpg" alt="About Us Image" />
          </div>
        </div>
      </div>
      <>
        <Expert1 />
        <Support />
      </>
    </>
  );
};

export default AboutUs;
