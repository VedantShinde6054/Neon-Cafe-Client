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
                  <h1 className="about_taital">About Our Cafe</h1>
                  <h1 className="about_taital_1">Neone Cafe</h1>
                  <p className="about_text">
                    Welcome to <b>Neone Cafe</b>, a place where flavors come alive! 
                    From delicious Snacks to refreshing Drinks, we offer an extensive menu to satisfy your cravings. 
                  </p>
                  <p className="about_text">
                    For those with a sweet tooth, indulge in our Desserts, perfect for celebrations or just a treat for yourself.
                  </p><br/>
                  <div className="readmore_btn">
                    <a href="/blog">Read Our Blogs Too</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="image_iman">
                  <img
                    src={require("../assets/images/about-img.jpg")}
                    className="about_img"
                    alt="About Neone Café"
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
          <h1 className="section_title">Our Speciality</h1>
          <p className="section_text">
          Each dish is thoughtfully crafted with quality ingredients and authentic flavors that bring out the best in every cuisine we serve. 
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
                <i className="fas fa-pizza-slice values_icon"></i>
                <h4 className="values_title">Authentic Taste</h4>
                <p className="values_text">
                  From freshly made pizzas to delicious desserts, we bring the
                  best flavors to your table.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="value_box">
                <i className="fas fa-glass-martini-alt values_icon"></i>
                <h4 className="values_title">Innovation</h4>
                <p className="values_text">
                  Constantly adding new menu items delight our
                  guests.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="value_box">
                <i className="fas fa-smile values_icon"></i>
                <h4 className="values_title">Customer Joy</h4>
                <p className="values_text">
                  Your happiness is our priority. We strive to make every visit
                  memorable.
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
            Have questions or feedback? We’d love to hear from you!
          </p>
          <div className="contact_details text-center">
            <p className="contact_item">
              <i className="fas fa-phone-alt contact_icon"></i> Phone: +91 8055935593
            </p>
            <p className="contact_item">
              <i className="fas fa-envelope contact_icon"></i> Email:{" "}
              <a href="mailto:info@neonecafe.com">neonecafekopargaon@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
