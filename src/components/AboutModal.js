import React from "react";
import "../styles/comp-style/modal.css";

import bookTexture from "../assets/book-texture.jpg";
import authorPhoto from "../assets/author-photo.png";
import signature from "../assets/signature.png";

function AboutModal({ onClose }) {
  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal-box about-modal"
        style={{ backgroundImage: `url(${bookTexture})` }}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="vertical-text">ABOUT</div>

        <div className="modal-content">
          <img
            className="author-photo"
            src={authorPhoto}
            alt="Christy in the kitchen"
          />

          <h2>Hi there, thanks for stopping in!</h2>
          <p>
            Welcome to Green Spaghetti — a cozy corner for creative bites and
            fresh ideas. I’m Christy, your friendly neighborhood code cook, art
            enthusiast, and flavor experimenter.
          </p>
          <p>
            This page is my recipe journal — mixing design, development, and a
            little dash of humor. Everything here was hand-coded and
            home-seasoned.
          </p>

          <div className="signature-section">
            <img
              className="signature"
              src={signature}
              alt="Christy signature"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
