import React, { useState, useEffect } from "react";
import "../css/moodtracker.css";
import MoodTrackerIcon from "../assets/mt2.jpg";
import MoodIcon from "../assets/mt.png";
import MoodIcons from "../assets/mood-track3.png"

function MoodTracker() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [moodResult, setMoodResult] = useState("");

  const optionScores = {
    1: { "Very Happy": 5, "Happy": 4, "Neutral": 3, "Sad": 2, "Very Sad": 1 },
    2: { "Yes": 1, "No": 5 },
    3: { "Yes": 1, "No": 5 },
    4: { "Very Good": 5, "Good": 4, "Fair": 3, "Poor": 2, "Very Poor": 1 },
    5: { "Yes": 1, "No": 5 },
    6: { "Yes": 1, "No": 5 },
  };

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const renderOptions = (questionIndex, options) => (
    <ul className="MoodOption">
      {options.map((option) => (
        <li
          key={option}
          className={selectedAnswers[questionIndex] === option ? "selected" : ""}
          onClick={() => handleOptionClick(questionIndex, option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );

  const calculateMood = () => {
    let totalScore = 0;
    for (const [questionIndex, answer] of Object.entries(selectedAnswers)) {
      totalScore += optionScores[questionIndex][answer];
    }

    if (totalScore >= 25) {
      setMoodResult(
        "You're feeling great! How about writing your feelings in the diary to keep a record of your happiness?"
      );
    } else if (totalScore >= 15 && totalScore < 25) {
      setMoodResult(
        "You're feeling okay, but maybe connecting with the community could give you a boost! Try chatting with members for some inspiration."
      );
    } else {
      setMoodResult(
        "It seems like you're feeling low. Consider consulting one of our therapists or try some mindfulness techniques to uplift your mood."
      );
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`MoodTracker ${hasAnimated ? "animated" : ""}`}>
      <div className="moodSecond">
        <div className="mood-bg">
          <h2 className="mood-heading">
            <span>
              Track Your Mood: <br />{" "}
            </span>
            <span>
              Understand Your Emotions, <br />
              at any Time
            </span>
          </h2>
          <img
            src={MoodTrackerIcon}
            alt="Mood Tracker"
            className="moodtracker-svg"
          />
        </div>

        <div className="moodtracker-form">
          <div className="moodtracker-picture">
            <img
              src={MoodIcons}
              alt="Mood Form pic"
              className="mood-form-pic"
            />
            <h3 className="mood-tag-line">Escape to Serenity, Where Every Wave Whispers Peace.</h3>
          </div>
          <div className="moodtracker-ques">
            <div className="moodque1">
              <h3 className="moodquestion1">
                <h2 class="mood-heading">Your Daily Mood Check</h2>
                1. How would you rate your overall mood from the past few days?
              </h3>
              {renderOptions(1, [
                "Very Happy",
                "Happy",
                "Neutral",
                "Sad",
                "Very Sad",
              ])}
            </div>
            <div className="moodque2">
              <h3 className="moodquestion1">
                2. Have you felt unusually sad or down for most of the day?
              </h3>
              {renderOptions(2, ["Yes", "No"])}
            </div>
            <div className="moodque3">
              <h3 className="moodquestion1">
                3. Have you felt excessively worried or anxious today?
              </h3>
              {renderOptions(3, ["Yes", "No"])}
            </div>
            <div className="moodque4">
              <h3 className="moodquestion1">
                4. How would you describe your sleep quality from the past few
                days?
              </h3>
              {renderOptions(4, [
                "Very Good",
                "Good",
                "Fair",
                "Poor",
                "Very Poor",
              ])}
            </div>
            <div className="moodque5">
              <h3 className="moodquestion1">
                5. Have you found it difficult to find enjoyment or interest in
                activities you usually enjoy?
              </h3>
              {renderOptions(5, ["Yes", "No"])}
            </div>
            <div className="moodque6">
              <h3 className="moodquestion1">
                6. Have you had trouble concentrating or making decisions?
              </h3>
              {renderOptions(6, ["Yes", "No"])}
            </div>
          </div>
        </div>
        <button className="calculate-mood-button" onClick={calculateMood}>
          Submit Mood
        </button>
      </div>

      {showPopup && (
        <div className="mood-popup">
          <div className="mood-popup-content">
            <h3>Your Mood Result</h3>
            <p>{moodResult}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoodTracker;
