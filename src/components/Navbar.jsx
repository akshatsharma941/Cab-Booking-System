import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [activeTab, setActiveTab] = useState("Ride");

  return (
    <nav className="navbar">
      <a className="logo" href="/">Taxi Driver</a>

      <div className="nav-links">
        <button
          className={`nav-link ${activeTab === "Ride" ? "active" : ""}`}
          onClick={() => setActiveTab("Ride")}
        >
          Ride
        </button>
        <button
          className={`nav-link ${activeTab === "Rent" ? "active" : ""}`}
          onClick={() => setActiveTab("Rent")}
        >
          Rent
        </button>
      </div>

      <div className="nav-actions">
        <button
          className="theme-toggle-btn"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            /* Sun Icon */
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            /* Moon Icon */
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
}


