import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      {/* About Us Section */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="about_section_2">
            <div className="row">
              <div className="col-md-6 order-2 order-md-1">
                <div className="about_taital_box">
                  <h1 className="about_taital">About Our Shop</h1>
                  <h1 className="about_taital_1">Coffee Distribution</h1>
                  <p className="about_text">
                    At Neone Café, we serve the best brews crafted with passion
                    and precision. Whether you need an energizing espresso or a
                    smooth cappuccino, we’ve got your caffeine cravings covered.
                  </p><br/>
                  <div className="readmore_btn">
                    <a href="/blog">Read Our Blogs Too </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="image_iman">
                  <img
                    src={require("../assets/images/about-img.jpg")}
                    className="about_img"
                    alt="About Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mission_section layout_padding">
        <div className="container text-center">
          <h1 className="section_title">Our Mission</h1>
          <p className="section_text">
            At Neone Café, our mission is to create a community where coffee
            lovers gather to share moments of joy, connect, and unwind with the
            finest blends and flavors.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="values_section layout_padding bg-light">
        <div className="container">
          <h1 className="section_title text-center">Our Values</h1>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="value_box">
                <i className="fas fa-leaf values_icon"></i>
                <h4 className="values_title">Sustainability</h4>
                <p className="values_text">
                  We prioritize eco-friendly practices, sourcing responsibly to
                  protect our planet.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="value_box">
                <i className="fas fa-mug-hot values_icon"></i>
                <h4 className="values_title">Quality</h4>
                <p className="values_text">
                  We serve premium coffee crafted with precision, ensuring every
                  sip is unforgettable.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="value_box">
                <i className="fas fa-heart values_icon"></i>
                <h4 className="values_title">Community</h4>
                <p className="values_text">
                  Bringing people together to share love, laughter, and great
                  coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="section_title text-center">Contact Us</h1>
          <p className="section_text text-center">
            We’d love to hear from you! Feel free to reach out via phone or
            email.
          </p>
          <div className="contact_details text-center">
            <p className="contact_item">
              <i className="fas fa-phone-alt contact_icon"></i> Phone: +91 98765
              43210
            </p>
            <p className="contact_item">
              <i className="fas fa-envelope contact_icon"></i> Email:{" "}
              <a href="mailto:info@neonecafe.com">info@neonecafe.com</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
