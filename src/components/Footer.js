import React from "react";

function Footer(){
    return(
        <>
        {/* Footer Section */}
      <div className="footer_section">
        <div className="container">
          {/* Social Media Links */}
          <div className="footer_social_icon">
          <h2>Follow Us On</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map Embed */}
          <div className="google_map">
            <h2>Find Us On Google Maps</h2>
            <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.4794295154957!2d74.47353693749949!3d19.883257624002983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc452ff057856f%3A0x45e7bb0a4fa49ed5!2zQ2FmZSBOZW9uZSDgpJXgpYXgpKvgpYcg4KSo4KWA4KST4KSo!5e0!3m2!1sen!2sin!4v1733143160688!5m2!1sen!2sin"
                width="100%"
                height="300"  // Adjust the height to your preference
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Footer Text and Copyright */}
          <div className="footer_text">
            <p>&copy; 2024 Neone Cafe. All rights reserved.</p>
          </div>
        </div>
      </div>
        </>
    );
}

export default Footer;