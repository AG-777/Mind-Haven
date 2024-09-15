import React,{useRef} from "react";
import "../css/appointment.css";
import download_svg from "../assets/download.svg";
import Navbar from './navbar2';
import Footer from './footer';
const MindHaven = () => {
  const home_ap = useRef(null);
  const scrollTo_home_ap = () =>{
    if (home_ap.current) {
      window.scrollTo({
        top: home_ap.current.offsetTop - 150, // Offset the scroll position by 50px
        behavior: "smooth", // Smooth scroll
      });
    }
  }
  const therapist_ap = useRef(null);
   const scrollTotherapist_ap = () => {
     if (therapist_ap.current) {
       window.scrollTo({
         top: therapist_ap.current.offsetTop - 100, // Offset the scroll position by 50px
         behavior: "smooth", // Smooth scroll
       });
     }
   };

  return (
    <div className="body-ap">
      <Navbar scroll1={scrollTotherapist_ap} scroll2={scrollTo_home_ap} customStyles={{ backgroundColor: "rgba(34, 31, 31, 0.104)" }} />
      <section className="hero-section" ref={home_ap}>
        <div className="hero-content">
          <div className="text-content-ap">
            Ready to Find Your Perfect Therapist?
            <p className="sub-heading">
              Browse our awesome list of trusted docs, and set up your
              appointment without breaking a sweat. Easy peasy!
            </p>
            <button className="btn-appointment">Book appointment</button>
          </div>
          <div className="hero-image"></div>
        </div>

        <div className="featured-content">
          <p className="heading-large">Find Your Therapist</p>
          <p className="sub-description">
            Dive into our team of top-notch therapists and book your session in
            a jiffy!
          </p>
        </div>

        <div className="featured-images">
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <img
                src={download_svg}
                alt="Therapist Icon"
                className="featured-icon"
              />
              <p className="therapist-category">General Therapist</p>
            </div>
          ))}
        </div>
      </section>

      <section className="therapists-section" ref={therapist_ap}>
        <div className="therapists-header">
          <p className="heading-large">Top Therapists Ready for You</p>
          <p>
            Explore our handpicked list of amazing therapists and find the right
            match for you!
          </p>
        </div>

        <div className="therapists-list" ref={therapist_ap}>
          {[...Array(8)].map((_, i) => (
            <div className="therapist-card" key={i}>
              <div className="therapist-image"></div>
              <div className="therapist-details">
                <p className="therapist-name">Samiksha Khanna</p>
                <p className="therapist-info">
                  <span className="highlight">2+</span> years of experience
                  <br />
                  Expertise:{" "}
                  <span className="highlight">Personality disorders</span>
                  <br />
                  Speaks: <span className="highlight">English, Hindi</span>
                  <br />
                  Session Mode:{" "}
                  <span className="highlight">Virtual, In-Person (Delhi)</span>
                </p>
                <button className="btn-book">Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="end-section">
        <div className="end-div">
          <div className="content-box-div">
            <div className="content-box">
              Join 100+ Experts and Find Your Perfect Match!
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MindHaven;
