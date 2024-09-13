import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar"; // Importing Navbar component
import ArrowIcon from "../landingpage/arrow.svg";
import "../css/style.css";
import Video1 from "../landingpage/video1.mp4";
import Video2 from "../landingpage/video2.mp4";
import Video3 from "../landingpage/video3.mp4";
import Review1 from "../community/pro1.webp";
import Review2 from "../community/pro2.webp";
import Review3 from "../community/pro3.webp";
import FAQIcon from "../landingpage/faq.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function LandingPage() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/c1a9c8a4-1b9b-482b-8349-d1566a8d5e88/webchat/v2.1/config.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const videoRefs = useRef([]);
  const faqRef = useRef(null);
  const reviewRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const scrollToFAQ = () => {
    if (faqRef.current) {
      window.scrollTo({
        top: faqRef.current.offsetTop - 50, // Offset the scroll position by 50px
        behavior: "smooth", // Smooth scroll
      });
    }
  };

 const scrollToREV = () => {
   if (reviewRef.current) {
     window.scrollTo({
       top: reviewRef.current.offsetTop - 100, // Offset the scroll position by 50px
       behavior: "smooth", // Smooth scroll
     });
   }
 };


  return (
    <div className="landing-page landing">
      <Navbar
        scrollToFAQ={scrollToFAQ}
        scrollToREV={scrollToREV}
        customStyles={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      />

      <div className="frontpage">
        <div className="front-page">
          <h3 className="front-heading">You deserve to be Happy</h3>
          <p className="front-subheading">
            " You deserve to be happy, and we're here to help you find your way.
            Discover a space dedicated to your well-being, where you can express
            yourself and grow. Join a community that supports your journey to
            mental wellness, because your happiness matters."
          </p>
          <div className="about-us-btn-container">
            <Link to="/about">
              <button className="about-us-btn">About Us</button>
            </Link>
          </div>
        </div>
        <img
          height="100px"
          width="100px"
          src={ArrowIcon}
          alt="Arrow Icon"
          className="arrow-index"
        />
      </div>
      <div className="healsteps">
        <h3 className="head-heading">
          Your Journey to Mental Wellness: A Simple 3-Step Process
        </h3>

        <div className="step1">
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            src={Video1}
            className="ai-video visible animate-in"
            loop
            autoPlay
            muted
          ></video>
          <div className="chat-bubble">
            <p className="step-heading">Chat with Our AI </p>
            <p className="step-subheading">
              We know it can be difficult to take that first step, which is why
              our AI bot is here to listen. When you’re ready, start a
              conversation with the AI.
            </p>
          </div>
        </div>
        <div className="step2">
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            src={Video2}
            className="ai-video visible animate-in"
            loop
            autoPlay
            muted
          ></video>
          <div className="chat-bubble">
            <p className="step-heading">Connect with the Community</p>
            <p className="step-subheading">
              Our community page will connect you with others who have
              experienced similar challenges. Read their stories, gain insights,
              and find support from people who understand.
            </p>
          </div>
        </div>
        <div className="step3">
          <video
            ref={(el) => (videoRefs.current[2] = el)}
            src={Video3}
            className="ai-video visible animate-in"
            loop
            autoPlay
            muted
          ></video>
          <div className="chat-bubble">
            <p className="step-heading">Seek Professional Therapy</p>
            <p className="step-subheading">
              When you’re ready, we recommend taking the next step by seeking
              professional therapy. We can help guide you to resources and
              therapists who can provide personalized support.
            </p>
          </div>
        </div>
      </div>

      <div className="reviews" ref={reviewRef}>
        <div className="review-content">
          <h3>We have helped many feel better</h3>
          <p>Now it's your turn to get benefit from MindHaven Community</p>
        </div>
        <div className="review-cards">
          <div className="expert-box">
            <div className="profile">
              <img src={Review1} alt="Review 1" />
              <h6>Ema Irnik</h6>
              <p>
                MindHaven has truly been a life-changing experience for me. The
                support I received from the community and the professional
                guidance helped me navigate my mental health challenges in a way
                I never thought possible.
              </p>
            </div>
            <div className="profile">
              <img src={Review2} alt="Review 2" />
              <h6>Jason</h6>
              <p>
                The AI was a great first step for me when I was feeling lost. It
                made me comfortable enough to reach out to the community, and
                the connection I felt there was amazing. I felt understood for
                the first time in a long while.
              </p>
            </div>
            <div className="profile">
              <img src={Review3} alt="Review 3" />
              <h6>Maalik</h6>
              <p>
                Finding MindHaven was like finding a safe space. From the AI
                support to the encouraging community, everything has made a
                positive impact on my mental health journey. I highly recommend
                this platform to anyone seeking help.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq" ref={faqRef}>
        <div className="faq-pic">
          <img src={FAQIcon} alt="" className="faqicon bounce" />
        </div>
        <div className="faq-que">
          <div className="question" onClick={() => toggleAnswer(1)}>
            <h5>What services does MindHaven offer?</h5>
            <p className={`answer ${activeQuestion === 1 ? "show" : ""}`}>
              MindHaven offers AI chat support, community connections, access to
              therapy and many more.
            </p>
          </div>
          <div className="question" onClick={() => toggleAnswer(2)}>
            <h5>How does the AI chat work?</h5>
            <p className={`answer ${activeQuestion === 2 ? "show" : ""}`}>
              Our AI chat listens and provides support based on your input.
            </p>
          </div>
          <div className="question" onClick={() => toggleAnswer(3)}>
            <h5>Can I trust the community reviews?</h5>
            <p className={`answer ${activeQuestion === 3 ? "show" : ""}`}>
              Yes, all reviews come from real users of MindHaven.
            </p>
          </div>
          <div className="question" onClick={() => toggleAnswer(4)}>
            <h5>Is professional therapy available?</h5>
            <p className={`answer ${activeQuestion === 4 ? "show" : ""}`}>
              Yes, we provide resources for connecting with professional
              therapists.
            </p>
          </div>
          <div className="question" onClick={() => toggleAnswer(5)}>
            <h5>Is MindHaven free?</h5>
            <p className={`answer ${activeQuestion === 5 ? "show" : ""}`}>
              Some services are free, but therapy sessions may require payment.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-col">
          <h3>Top Products</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div className="footer-col">
          <h3>Experts</h3>
          <li>Therapist</li>
          <li>Psychiatrist</li>
          <li>Counsellors</li>
          <li>Team</li>
          <li></li>
        </div>
        <div className="footer-col">
          <h3>Features</h3>
          <li>Book an Appointment</li>
          <li>1 to 1 talk</li>
          <li>Digital Diary</li>
          <li>Community</li>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <li>Guides</li>
          <li>Research</li>
          <li>Experts</li>
          <li>Therapists</li>
        </div>

        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>You can trust us, we only send your progress and achievements</p>
          <div className="subscribe">
            <input type="text" placeholder="Your Email address" />
            <a href="#" className="yellow">
              ENTER
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright <i className="fas fa-copyright"></i> 2024 All rights
            reserved by MindHaven
          </p>
          <div className="pro-links">
            <a href="https://www.facebook.com/thequizopedia/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/quizopedia.agk/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/quizopedia-quiz-game-935703296/">
              {" "}
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
