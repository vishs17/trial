import React, { useState } from "react";
import "../styles/styles.css";

const ContributorDashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const points = 123;

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  return (
    <div className="container">
      {/* Contributor Heading */}
      <h1 className="header">Contributor</h1>
      
      {/* Reward System Button */}
      <button className="reward-button" onClick={() => setShowPopup(true)}>
        Reward System
      </button>

      {showPopup && (
        <div className="popup">
          <p>You have {points} points</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid-container">
        <button className="action-box">Contribute Food</button>
        <button className="action-box" onClick={openGoogleMaps}>Map a Homeless</button>
        <button className="action-box">Redeem Points</button>
        <button className="action-box">Check Availability</button>
      </div>

      {/* Submit Button */}
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default ContributorDashboard;
