import React, { useState } from "react";
import "../styles/comp-style/modal.css";

function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // password validation checks
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8;

  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-overlay")) onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (hasUpper && hasLower && hasNumber && hasLength) {
      console.log("Logged in with:", email);
      onClose();
    } else {
      alert("Please meet all password requirements before logging in.");
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="vertical-text">LOGIN</div>

        <div className="modal-content">
          <h2>Welcome back, Chef!</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* password hints */}
            <div className="password-rules">
              <p>Password must include:</p>
              <ul>
                <li className={hasUpper ? "valid" : ""}>
                  {hasUpper ? "✔" : "○"} One uppercase letter
                </li>
                <li className={hasLower ? "valid" : ""}>
                  {hasLower ? "✔" : "○"} One lowercase letter
                </li>
                <li className={hasNumber ? "valid" : ""}>
                  {hasNumber ? "✔" : "○"} One number
                </li>
                <li className={hasLength ? "valid" : ""}>
                  {hasLength ? "✔" : "○"} At least 8 characters
                </li>
              </ul>
            </div>

            <button type="submit" className="subscribe-submit">
              Enter the Kitchen
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
