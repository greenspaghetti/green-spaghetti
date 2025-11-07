import React, { useState } from "react";
import "../styles/comp-style/modal.css";

function SubscribeModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Password validation checks
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8;

  function handleSubmit(e) {
    e.preventDefault();
    if (hasUpper && hasLower && hasNumber && hasLength && agree) {
      setShowConfetti(true);
      setTimeout(() => {
        alert("🎉 Welcome to the family!");
        setShowConfetti(false);
        onClose();
      }, 2500);
    } else {
      alert("Please complete all fields and agree to the terms.");
    }
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="vertical-text">SUBSCRIBE</div>

        <div className="modal-content">
          <h2>Join the Green Spaghetti family!</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="password-rules">
              <p>Password must include:</p>
              <ul>
                <li className={hasUpper ? "valid" : ""}>✓ Uppercase letter</li>
                <li className={hasLower ? "valid" : ""}>✓ Lowercase letter</li>
                <li className={hasNumber ? "valid" : ""}>✓ Number</li>
                <li className={hasLength ? "valid" : ""}>✓ At least 8 characters</li>
              </ul>
            </div>

            <div className="subscribe-blurb">
              <p>
                By subscribing, you agree to keep our kitchen kind, fun, and creative. 
                Share your recipes, send your culinary masterpieces, and celebrate your burnt noodles — we love it all.  
                Stay safe, be respectful, and keep cooking like no one’s watching!
              </p>
              <p>
                You can view, upload, and submit your own recipes. Share videos to TikTok, tag us on Instagram, 
                and spread your food joy responsibly. Anyone being rude or disrespectful will be kindly escorted out of the kitchen 🍝✨.
              </p>
            </div>

            <div className="terms-box">
              <label>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                I’ve read and agree to the community terms.
              </label>
            </div>

            <button type="submit" className="subscribe-submit">
              Subscribe
            </button>
          </form>
        </div>

        {showConfetti && (
          <div className="confetti">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="confetti-piece"></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SubscribeModal;
