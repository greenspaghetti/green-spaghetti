import React from "react";
import "../styles/comp-style/modal.css";

function AboutModal({ onClose }) {
  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="vertical-text">ABOUT</div>

        <div className="modal-content">
          <h2>Hi there, thanks for stopping in!</h2>
          <p>
            Welcome to Green Spaghetti — a cozy corner for creative bites and
            fresh ideas. I’m Christy, your friendly neighborhood code cook, art
            enthusiast, and flavor experimenter.
          </p>
          <p>
            This page is my recipe journal — mixing design, development, and a
            little dash of humor. Everything here was hand-coded and home-seasoned.
          </p>
          <p className="signoff">
            See you in the kitchen,
            <br />
            <span className="signature">Christy 🍝</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
