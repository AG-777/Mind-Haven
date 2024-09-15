import React,{useRef} from "react";
import "../css/appointment.css";
import svg1 from "../assets/trauma.png";
import svg2 from "../assets/no-smoke.png";
import svg3 from "../assets/couple-counseling.png";
import svg4 from "../assets/psychiatry.png";
import svg5 from "../assets/mental-health.png";
import Navbar from './navbar2';
import Footer from './footer';
import imgg1 from "../assets/img1.jpg";
import imgg2 from '../assets/img2.png';
import imgg3 from '../assets/img3.png';
import imgg4 from '../assets/img4.png';
const featuredItems = [
  { image: svg1, alt: "Therapist Icon 1", category: "Cognitive Behavioral Therapist" },
  { image: svg2, alt: "Therapist Icon 2", category: "Addiction Therapist" },
  { image: svg3, alt: "Therapist Icon 3", category: "Couple Therapist" },
  { image: svg4, alt: "Therapist Icon 4", category: "Psychiatrist" }, 
  { image: svg5, alt: "Therapist Icon 5", category: "Clinical Psychologist" },
];
const therapistsData = [
  {
    image: imgg1,
    name: 'Samiksha Khanna',
    experience: '2+ years',
    expertise: 'Personality disorders',
    languages: 'English, Hindi',
    sessionMode: 'Virtual, In-Person (Delhi)',
  },
  {
    image: imgg2,
    name: 'Ravi Sharma',
    experience: '5 years',
    expertise: 'Anxiety, Depression',
    languages: 'English, Tamil',
    sessionMode: 'Virtual, In-Person (Chennai)',
  },
  {
    image: imgg3,
    name: 'Aisha Khan',
    experience: '3 years',
    expertise: 'Couples Therapy',
    languages: 'English, Urdu',
    sessionMode: 'Virtual, In-Person (Mumbai)',
  },
  {
    image: imgg4,
    name: 'Rohit Patel',
    experience: '7 years',
    expertise: 'Stress Management',
    languages: 'Hindi, Gujarati',
    sessionMode: 'Virtual, In-Person (Ahmedabad)',
  }
];
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
      <Navbar
        scroll1={scrollTotherapist_ap}
        scroll2={scrollTo_home_ap}
        customStyles={{ backgroundColor: "rgba(34, 31, 31, 0.104)" }}
      />
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
          {featuredItems.map((item, i) => (
            <div key={i}>
              <img src={item.image} alt={item.alt} className="featured-icon" />
              <p className="therapist-category">{item.category}</p>
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
          {therapistsData.map((therapist, i) => (
            <div className="therapist-card" key={i}>
              <div className="therapist-image">
                <img src={therapist.image} alt={therapist.name} />
              </div>
              <div className="therapist-details">
                <p className="therapist-name">{therapist.name}</p>
                <p className="therapist-info">
                  <span className="highlight">{therapist.experience}</span>{" "}
                  years of experience
                  <br />
                  Expertise:{" "}
                  <span className="highlight">{therapist.expertise}</span>
                  <br />
                  Speaks:{" "}
                  <span className="highlight">{therapist.languages}</span>
                  <br />
                  Session Mode:{" "}
                  <span className="highlight">{therapist.sessionMode}</span>
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
      <Footer />
    </div>
  );
};

export default MindHaven;
