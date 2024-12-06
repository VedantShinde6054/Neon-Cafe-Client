import { React, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { db, collection, getDocs } from "../firebase";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import "../App.css";

function Home() {
  const [menuItems, setMenuItems] = useState([]); // State to store menu items
  const [blogs, setBlogs] = useState([]); // State to store blog items
  const [expandedBlogs, setExpandedBlogs] = useState({}); // State for expanded blogs

  // Fetch menu items from Firestore
  const fetchMenuItems = async () => {
    const menuCollection = collection(db, "menu");
    const menuSnapshot = await getDocs(menuCollection);
    const menuList = menuSnapshot.docs.map((doc) => doc.data());
    setMenuItems(menuList); // Set the fetched menu items
  };

  // Fetch blog items from Firestore
  const fetchBlogs = async () => {
    const blogCollection = collection(db, "blogs");
    const blogSnapshot = await getDocs(blogCollection);
    const blogList = blogSnapshot.docs.map((doc) => doc.data());
    setBlogs(blogList); // Set the fetched blog items
  };

  // Toggle the Read More / Read Less for each blog
  const toggleReadMore = (index) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in ms)
      offset: 120, // Offset from the top before animation starts
      easing: "ease-in-out", // Easing effect
      once: true, // Animation only occurs once
    });

    fetchMenuItems(); // Fetch menu items on component mount
    fetchBlogs(); // Fetch blog items on component mount

    // Dynamically load the Elfsight script for reviews
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="header_section">
        <div className="banner_section layout_padding">
          <div className="container" data-aos="fade-up">
            <div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">
                          Welcome To <br />
                          Cafe
                          <span className="neone-text"> Neone</span>
                        </h1>
                        <p className="banner_text">
                          Welcome to Cafe Neone, where passion meets flavor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about_section layout_padding" data-aos="fade-right">
        <div className="container">
          <div className="about_section_2">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="about_taital_box">
                  <h1 className="about_taital">About Our Cafe</h1>
                  <h1 className="about_taital_1">Neone Cafe</h1>
                  <p className="about_text">
                    A Welcome to <b>Neone Cafe</b>, a place where flavors come alive! 
                    From delicious Snacks to refreshing Drinks, we offer an extensive menu to satisfy your cravings. 
                  </p>
                  <p className="about_text">
                    For those with a sweet tooth, indulge in our Desserts, perfect for celebrations or just a treat for yourself.
                  </p><br/>
                  <div className="readmore_btn">
                    <a href="/about">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="image_iman" data-aos="fade-left">
                  <img
                    src={require("../assets/images/about-img.jpg")}
                    className="about_img img-fluid"
                    alt="About Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Section */}
      <div className="coffee_section layout_padding" data-aos="fade-up">
        <div className="container">
          <h1 className="coffee_taital">Our Menu</h1>
          <div className="coffee_section_2">
            <div className="row">
              {/* Loop over menuItems to display 8 boxes */}
              {menuItems.slice(0, 8).map((item, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                  key={index}
                  data-aos="zoom-in"
                >
                  <div className="coffee_box">
                    <img
                      src={require("../assets/images/food.gif")}
                      alt="menu icon"
                      className="coffee_icon"
                      style={{ borderRadius: "50%" }}
                    />{" "}
                    <h3 className="types_text">{item.name}</h3>
                    <p className="looking_text">{item.description}</p>
                    <strong className="coffee_price">₹{item.price}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="read_bt mt-4">
            <center>
              <a href="/menu">View More</a>
            </center>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog_section layout_padding" data-aos="fade-right">
        <div className="container">
          <h1 className="about_taital">Our Blog</h1>
          <div className="blog_section_2">
            <div className="row">
              {/* Loop over blogs to display 3 boxes */}
              {blogs.slice(0, 3).map((blog, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  key={index}
                  data-aos="fade-up"
                >
                  <div className="blog_box">
                    <h4 className="date_text">{blog.date}</h4>
                    <h4 className="prep_text">{blog.title}</h4>
                    <p className="lorem_text">
                      {expandedBlogs[index] ? blog.body : blog.body.slice(0, 100) + "..."}
                    </p>

                    <button
                      className="blog_read_more"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expandedBlogs[index] ? "Read Less" : "Read More"}{" "}
                      <i
                        className={`fas fa-arrow-${
                          expandedBlogs[index] ? "up" : "right"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="read_btn mt-4">
            <center>
              <a href="/blog">Read More</a>
            </center>
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="reviews_section layout_padding" data-aos="zoom-in">
        <div className="container">
          <h1 className="about_taital">What Our Customers Say</h1>
          <div className="reviews_content">
            <div
              className="elfsight-app-16f62e4f-5b75-436d-a890-e1f038439814"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
