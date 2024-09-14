import React, { useState, useRef, useEffect } from "react";
import "../css/about_us.css";
import Navbar from "./navbar_about";
import BackButton from "./back_btn";
const AboutUs = () => {
  const our_team = useRef(null);
  const scrollToTeam = ()=>{
     if (our_team.current) {
       window.scrollTo({
         top: our_team.current.offsetTop - 100, // Offset the scroll position by 50px
         behavior: "smooth", // Smooth scroll
       });
     }
  }
  return (
    <>
      <div className="body-about">
        <Navbar scrollToTeam={scrollToTeam}
          customStyles={{ backgroundColor: "rgba(127, 108, 108, 0.1)" }}
        />
      
        <BackButton />
        <div className="container-about">
          <div className="content-about">
            <div className="image-section-about">
              <img
                alt="Group of people in a therapy session"
                src="../src/assets/mindimage.jpg"
              />
            </div>
            <div className="text-section-about">
              <div className="about-us-about">About Us</div>
              <span className="elementor-heading-title-about">
                About Mind <strong className="ele2sel-about">Haven</strong>
              </span>
              <p>
                Welcome to MindHaven, a safe and supportive digital space
                created specifically for students to prioritize their mental
                well-being. At MindHaven, we understand the unique challenges
                faced by students, both academically and personally, and we are
                here to offer tools and resources that help manage stress,
                anxiety, and other mental health concerns.
              </p>
            </div>
          </div>
        </div>

        <div className="about-container-about">
          <div className="about-content-about">
            <div className="about-text-about">
              <h1>About Us</h1>
              <p>
                MindHaven offers a comprehensive suite of tools designed to
                support student mental health and well-being.
              </p>
              <ul>
                <li>
                  <strong>AI-Powered Bot:</strong> A 24/7 virtual assistant
                  providing emotional support, helpful resources, and guidance.
                </li>
                <li>
                  <strong>Personal Diary:</strong> A private and secure space
                  for students to document their thoughts, track their emotions,
                  and reflect on their mental health journey.
                </li>
                <li>
                  <strong>Community Support:</strong> Join a safe, judgment-free
                  community where students can share experiences and support one
                  another.
                </li>
                <li>
                  <strong>Mood Tracker:</strong> Monitor your emotional patterns
                  over time, helping you gain insights into triggers and mental
                  health trends.
                </li>
                <li>
                  <strong>1-on-1 Doctor Appointments:</strong> Schedule
                  confidential appointments with certified mental health
                  professionals for personalized support.
                </li>
              </ul>
            </div>
            <div className="about-image-about">
              <img
                src="../src/assets/about-graph.jpg"
                alt="A group of people sitting in a circle, holding hands and having a discussion"
              />
            </div>
          </div>
        </div>

        <div className="team-section-about" ref={our_team}>
          <h2>MEET OUR TEAM</h2>
          <div className="elementor-heading-title-about">
            Our <strong className="ele2sel-about">Professional Team</strong>
          </div>
          <div className="team-about">
            <div className="team-member-about">
              <img
                src=".//src/assets/Arnav Anand.jpg"
                alt="Portrait of Mark Hoffman"
              />
              <div className="info-about">
                <h3>Arnav Anand</h3>
              </div>
            </div>
            <div className="team-member-about">
              <img
                src="../src/assets/harshit aggarwal.jpg"
                alt="Portrait of Anne Middleton"
              />
              <div className="info-about">
                <h3>Harshit Aggarwal</h3>
              </div>
            </div>
            <div className="team-member-about">
              <img
                src=".//src/assets/apurav.jpg"
                alt="Portrait of Whitney Pratt"
              />
              <div className="info-about">
                <h3>Apurav Gautam</h3>
              </div>
            </div>
            <div className="team-member-about">
              <img
                src="../src/assets/jiynash.jpg"
                alt="Portrait of Whitney Pratt"
              />
              <div className="info-about">
                <h3>Jiyansh Kalra</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
