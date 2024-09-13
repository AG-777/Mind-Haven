import React from "react";
import "../css/contact_us.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <>
      {/* About Home Section */}
      <section id="about-home">
        <h2>Contact Us</h2>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="getin">
          <h2>Get in Touch</h2>
          <p>
            Reach out to us for mental health support, suggestions, or any
            queries about MindHaven.
          </p>

          <div className="getin-details">
            {/* Address Section */}
            <h3>Address</h3>
            <div className="contact-content">
              <i className="fas fa-home get"></i>
              <p>
                Chitkara University, Rajpura
                <br /> Punjab, 140401
              </p>
            </div>
<br />
            {/* Phone Section */}
            <h3>Phone</h3>
            <div className="contact-phone-number">
              <div className="contact1-con">
                <i className="fas fa-phone-alt get"></i>
                <p>+91 80592 41824</p>
              </div>
              <div className="other-contacts">
                <p>+91 86991 20248</p>
              </div>
              <div className="other-contacts">
                <p>+91 78149 61169</p>
              </div>
              <div className="other-contacts">
                <p>+91 98142 20340</p>
              </div>
            </div>
<br />
            {/* Support Section */}
            <h3>Support</h3>
            <div className="contact-emails">
              <div className="email1-con">
                <i className="fas fa-envelope-open-text get"></i>
                <p>support@mindhaven.com</p>
              </div>
              <div className="other-emails">
                <p>harshit0766.be23@chitkara.edu.in</p>
              </div>
              <div className="other-emails">
                <p>arnav0198.be23@chitkara.edu.in</p>
              </div>
              <div className="other-emails">
                <p>apurav0208.be23@chitkara.edu.in</p>
              </div>
              <div className="other-emails">
                <p>jiyansh0786.be23@chitkara.edu.in</p>
              </div>
            </div>
<br />
            {/* Social Media Links */}
            <h3>Social</h3>
            <div className="pro-links">
              <a href="https://www.facebook.com/mindhaven">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/mindhaven">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/mindhaven">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/11234567890">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="form">
          <h4>Let's Connect</h4>
          <p>
            Looking for mental health support or help with MindHaven? Fill out
            the form below.
          </p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="form-row">
              <input
                type="hidden"
                name="access_key"
                value="63e6cdb1-4edc-4b20-b1db-43f416a49a52"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="host"
                name="Name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="host-email"
                name="Email"
                required
              />
              <textarea
                className="form-col"
                cols="30"
                rows="8"
                placeholder="How can we help?"
                name="Message"
                required
              ></textarea>
              <button type="submit" className="form-col">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section id="map">
        <iframe
          title="Chitkara University Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751352098286!2d76.6572028761951!3d30.516086474689516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1726185439998!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
