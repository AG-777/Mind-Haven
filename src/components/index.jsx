import React, { useState, useRef, useEffect } from "react";
import ArrowIcon from "../landingpage/arrow.svg";
import "../css/style.css";
import Video1 from "../landingpage/video1.mp4";
import Video2 from "../landingpage/video2.mp4";
import Video3 from "../landingpage/video3.mp4";
import Review1 from "../community/pro1.webp";
import Review2 from "../community/pro2.webp";
import Review3 from "../community/pro3.webp";
import FAQIcon from "../landingpage/faq.png";
import Navbar from "./navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./footer";
function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track chatbot visibility

  const toggleChat = () => {
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen); // Toggle chatbot visibility
  };

  const videoRefs = useRef([]);
  const faqRef = useRef(null); // Ref for FAQ section
  const reviewRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // Scroll to FAQ section
  const scrollToFAQ = () => {
    if (faqRef.current) {
       window.scrollTo({
         top: faqRef.current.offsetTop - 100, // Offset the scroll position by 50px
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

  useEffect(() => {
    // Handler to close the chatbot on scroll
    const handleScroll = () => {
      if (isChatOpen) {
        setIsChatOpen(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isChatOpen]);

  return (
    <div className="landing-page landing">
      <Navbar scrollToFAQ={scrollToFAQ} scrollToREV={scrollToREV} />
      <div className="frontpage">
        <div className="front-page">
          <h3 className="front-heading">You deserve to be Happy</h3>
          <p className="front-subheading">
            " You deserve to be happy, and we're here to help you find your way.
            Discover a space dedicated to your well-being, where you can express
            yourself and grow. Join a community that supports your journey to
            mental wellness, because your happiness matters."
          </p>
        </div>
        <img
          height="100px"
          width="100px"
          src={ArrowIcon}
          alt="Arrow Icon"
          className="arrow-index"
        />
      </div>

      {/* Video Steps */}
      <div className="healsteps">
        <h3 className="head-heading">
          Your Journey to Mental Wellness: A Simple 3-Step Process
        </h3>
        <div className="step1">
          <div className="vid-cnt">
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              src={Video1}
              className="ai-video"
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div className="chat-bubble">
            <h2 className="h2lp">Chat with Our AI</h2>
            <p className="step-subheading">
              We know it can be difficult to take that first step, which is why
              our AI bot is here to listen. When you’re ready, start a
              conversation with the AI.
            </p>
          </div>
        </div>
        <div className="step2">
          <div className="vid-cnt">
            <video
              ref={(el) => (videoRefs.current[1] = el)}
              src={Video2}
              className="ai-video"
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div className="chat-bubble">
            <h2 className="h2lp">Connect with the Community</h2>
            <p className="step-subheading">
              Our community page will connect you with others who have
              experienced similar challenges. Read their stories, gain insights,
              and find support from people who understand.
            </p>
          </div>
        </div>
        <div className="step3">
          <div className="vid-cnt">
            <video
              ref={(el) => (videoRefs.current[2] = el)}
              src={Video3}
              className="ai-video"
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div className="chat-bubble">
            <h2 className="h2lp">Seek Professional Therapy</h2>
            <p className="step-subheading">
              When you’re ready, we recommend taking the next step by seeking
              professional therapy. We can help guide you to resources and
              therapists who can provide personalized support.
            </p>
          </div>
        </div>

        {/* Button 74 */}
        <div className="button-container">
          <button className="button-74" role="button" onClick={toggleChat}>
            Chat with our AI
          </button>
        </div>
      </div>

      {/* Reviews */}
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

      {/* FAQ */}
      <div className="faq" ref={faqRef}>
        <div className="faq-pic">
          <img src={FAQIcon} alt="FAQ icon" className="faqicon" />
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

      <Footer/>
      

      {isChatOpen && (
        <iframe
          src="https://app.gpt-trainer.com/widget/8604f23ef96040eda432f7bd80d49440"
          width="650px"
          height="420px"
          frameBorder="0"
          allow="clipboard-read; clipboard-write"
          style={{
            position: "fixed",
            bottom: "280px", // Adjusted to place above the button
            right: "20px",
            zIndex: "1000",
            marginRight: "26rem",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        ></iframe>
      )}
    </div>
  );
}

export default LandingPage;
