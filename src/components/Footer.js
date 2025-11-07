import React from "react";
import "../styles/comp-style/footer.css";

function Footer({ onOpenSubscribe, onOpenAbout }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">GS</div>
          <button className="subscribe-btn" onClick={() => {console.log("Subscribe button clicked"); onOpenSubscribe();}}>Subscribe</button>

         {/*} <button className="subscribe-btn" onClick={onOpenSubscribe}> Subscribe </button>{*/}
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <div className="social-icons">
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://www.instagram.com/greenspaghetti.me" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://github.com/greenspaghetti/green-spaghetti" target="_blank" rel="noreferrer">GitHub</a></div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-links">
            <button onClick={() => {console.log("About button clicked"); onOpenAbout();}}>About</button>
            <a href="mailto:youremail@example.com">Contact</a>
            <a href="https://artfulbytes.wordpress.com/" target="_blank" rel="noreferrer"> Blog</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom"> © 2025 Green Spaghetti. All rights reserved. </div>
    </footer>
  );
}

export default Footer;
