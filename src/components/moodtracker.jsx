import React, { useState, useEffect } from "react";
import "../css/moodtracker.css";
import MoodTrackerIcon from "../assets/mt2.jpg";
// import MTIcon from "../assets/mt.png";

function MoodTracker() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <div className={`MoodTracker ${hasAnimated ? "animated" : ""}`}>
      <div className="moodSecond">
        <div className="mood-bg">
          <h2 className="mood-heading">
            <span>Track Your Mood: <br /> </span>
            <span>Understand Your Emotions, <br />at any Time</span>
          </h2>
          <img
            src={MoodTrackerIcon}
            alt="Mood Tracker"
            className="moodtracker-svg"
          />
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;
