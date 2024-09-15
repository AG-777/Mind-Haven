import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import bookAppointmentImg from "../assets/bookanappointment.png";
import oneToOneTalkImg from "../assets/chat.png";
import diaryImg from "../assets/diary.png";
import communityImg from "../assets/community.png";
import MoodTrackerImg from "../assets/dial.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboard,
  faBook,
  faChartSimple,
  faUser,
  faComments,
  faSearch,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import MyDiary from "./myDiary";
import CommunityPage from "./community";
import MoodTracker from "./moodtracker";
import Dropdown from "./Dropdown";
import Appointment from "./appointment";
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const [heading, setHeading] = useState("About Therapies");
  const [section, setSection] = useState("about-therapy");
    const navigate = useNavigate();
  console.log("Loaded Dashboard");

  useEffect(() => {
    console.log("Loaded Dashboard");
  }, []);

  const handleFunctionClick = (newHeading, newSection) => {
    setHeading(newHeading);
    setSection(newSection);
  };
  const backToHome = ()=>{
    navigate("/");
  }
const handleClick = () => {
  navigate("/appointment"); // This will navigate to the About component
};
  return (
    <div className="dashboard">
      {section !== "bookAnAppointment" && (
        <div className="dcol1">
          <h3 className="sitename">MindHaven.</h3>
          <p className="sitetagline">Serenity Awaits: Your Wellness Space</p>
          <div className="funcList">
            <button
              className="func"
              onClick={() =>
                handleFunctionClick("About Therapies", "about-therapy")
              }
            >
              <FontAwesomeIcon icon={faBars} className="icon" />
              <p>About Therapies</p>
            </button>
          
            <button
              className="func"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faClipboard} className="icon" />
              <p>Consult a Therapist</p>
            </button>

            <button
              className="func"
              onClick={() => handleFunctionClick("My Diary", "myDiary")}
            >
              <FontAwesomeIcon icon={faBook} className="icon" />
              <p>My Diary</p>
            </button>
            <button
              className="func"
              onClick={() => handleFunctionClick("Mood Tracker", "moodTracker")}
            >
              <FontAwesomeIcon icon={faChartSimple} className="icon" />
              <p>Mood Tracker</p>
            </button>
            <button
              className="func"
              onClick={() => handleFunctionClick("Community", "community")}
            >
              <FontAwesomeIcon icon={faUser} className="icon" />
              <p>Community</p>
            </button>
            <button
              className="func"
              onClick={() => handleFunctionClick("Chat With Us", "chatWithUs")}
            >
              <FontAwesomeIcon icon={faComments} className="icon" />
              <p>Chat With Us</p>
            </button>
          </div>
        </div>
      )}

      <div className={section === "bookAnAppointment" ? "" : "dcol2"}>
        {section !== "bookAnAppointment" && (
          <div className="header">
            <button className="back-button" onClick={backToHome}>
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            </button>
            <div className="search-bar">
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <input type="text" placeholder="Search..." />
            </div>
            <Dropdown />
          </div>
        )}

        <div className="heading">
          <p className="col2-head">{heading}</p>
          {section !== "bookAnAppointment" && (
            <p className="col2-subtitle">
              Hi, Welcome to MindHaven {heading}
            </p>
          )}

          {section === "about-therapy" && (
            <div className="func-section about-therapy">
              <section className="home">
                <h2 className="heading animated-text">
                  <span>Discover the </span>
                  <span>Therapies </span>
                  <span>We offer for your well-being.</span>
                </h2>
              </section>
              <div className="below-sections">
                <section className="bookApp">
                  <div className="text-content">
                    <h2>Book an Appointment</h2>
                    <p>Your journey to healing starts <br /> here.</p>
                  </div>
                  <img src={bookAppointmentImg} alt="Book an Appointment" />
                </section>
                <section className="third-section">
                  <div className="text-content">
                    <h2>1 to 1 Talk</h2>
                    <p>Personalized support for your <br /> needs.</p>
                  </div>
                  <img src={oneToOneTalkImg} alt="1 to 1 Talk" />
                </section>
                <section className="myDiary">
                  <div className="text-content">
                    <h2>My Diary</h2>
                    <p>Your thoughts, safely captured.</p>
                  </div>
                  <img src={diaryImg} alt="My Diary" />
                </section>
              </div>
              <div className="second-row">
                <section className="moodTracker">
                  <div className="text-content">
                    <h2>Mood Tracker</h2>
                    <p>Understand and manage your emotions.</p>
                  </div>
                  <img src={MoodTrackerImg} alt="Mood Tracker" />
                </section>
                <section className="community">
                  <div className="text-content">
                    <h2>Community</h2>
                    <p>Connect, share, and heal together.</p>
                  </div>
                  <img src={communityImg} alt="Community" />
                </section>
              </div>
            </div>
          )}

          {section === "bookAnAppointment" && (
            <div className="func-section full-screen-section">
              <Appointment />
            </div>
          )}

          {section === "myDiary" && (
            <div className="func-section myDiaryPage">
              <MyDiary />
            </div>
          )}
          {section === "moodTracker" && (
            <div className="func-section moodTrackerPage">
              <MoodTracker />
            </div>
          )}
          {section === "community" && (
            <div className="func-section CommSec">
              <CommunityPage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
