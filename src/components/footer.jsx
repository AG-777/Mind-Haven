import React from 'react';
import '../css/footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = ()=>{

    return (
      <footer>
        <div className="footer-col">
          <h3>Top Products</h3>
          <li key="1">Manage Reputation</li>
          <li key="2">Power Tools</li>
          <li key="3">Managed Website</li>
          <li key="4">Marketing Service</li>
        </div>
        <div className="footer-col">
          <h3>Experts</h3>
          <li key="1">Therapist</li>
          <li key="2">Psychiatrist</li>
          <li key="3">Counsellors</li>
          <li key="4">Team</li>
        </div>
        <div className="footer-col">
          <h3>Features</h3>
          <li key="1">Book an Appointment</li>
          <li key="2">1 to 1 talk</li>
          <li key="3">Digital Diary</li>
          <li key="4">Community</li>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <li key="1">Guides</li>
          <li key="2">Research</li>
          <li key="3">Experts</li>
          <li key="4">Therapists</li>
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
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
