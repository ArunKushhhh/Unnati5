import React from "react";
import "./Days.css";
import { Link } from "react-router-dom";

function Days() {
  return (
    <div>
      <div className="container">
        <div className="main-text">
          <span className="no-wrap-line">
            Stuck in the cycle of theory
            <span className="icon-wrapper">
              <img
                src="https://whimsical.com/_next/static/media/calendar@2x.5dfa0412.png"
                alt="Calendar"
              />
            </span>
            , notes
          </span>
          <br />
          <span className="no-wrap-line">
            and exams
            <span className="icon-wrapper">
              <img
                src="https://whimsical.com/_next/static/media/slack@2x.4c34c27f.png"
                alt="Slack"
              />
            </span>
            ?
          </span>
          <br />
          <span className="no-wrap-line">
            UNNATI challenges
            <span className="icon-wrapper">
              <img
                src="https://whimsical.com/_next/static/media/clock@2x.83a6a7d4.png"
                alt="Clock"
              />
            </span>{" "}
            you with the real problems, 
          </span>
          <span className="no-wrap-line">
            {" "}bold decisions, and the startup style energy -
          </span>
          <br />
          <span className="no-wrap-line">
            so you grow beyond the classroom.
          </span>
          <br />
        </div>
        <Link to={"/form"} className="cta-link">
          Rise above with UNNATI . Register Now!
          <span className="icon-wrapper last-wrapper">
            <img
              className="last-icon"
              src="https://whimsical.com/_next/static/media/macos-icon@2x.2fd60649.webp"
              alt="Whimsical"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Days;
