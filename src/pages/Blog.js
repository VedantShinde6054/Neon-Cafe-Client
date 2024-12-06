import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { db, collection, getDocs } from "../firebase";

function Blog() {
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const toggleReadMore = (index) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const fetchBlogs = async () => {
    const blogsCollection = collection(db, "blogs");
    const blogSnapshot = await getDocs(blogsCollection);
    const blogList = blogSnapshot.docs.map((doc) => doc.data());
    setBlogs(blogList);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const parseDate = (dateString) => {
    const [day, month] = dateString.split(" ");
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    const monthIndex = monthNames.indexOf(month);
    return new Date(new Date().getFullYear(), monthIndex, parseInt(day));
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.date.toLowerCase().includes(searchDate.toLowerCase())
  );

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <>
      <div className="blog_page layout_padding">
        <div className="blog_header text-center" style={{ paddingTop: "120px" }}>
          <h1 className="blog_main_title">Our Blog</h1>
        </div>

        <div className="search_sort_section text-center">
          <input
            type="text"
            className="search_input"
            placeholder="Search by Date (dd/mm/yyyy)"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />

          <select
            className="sort_select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Sort by Date (Latest)</option>
            <option value="desc">Sort by Date (Earliest)</option>
          </select>
        </div>

        <div className="blog_section">
          <div className="container">
            <div className="row">
              {sortedBlogs.length > 0 ? (
                sortedBlogs.map((blog, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="blog_card">
                      <div className="blog_icon">
                        <i className="fas fa-pen-fancy"></i>
                      </div>
                      <h4 className="blog_date">{blog.date}</h4>
                      <h3 className="blog_title">{blog.title}</h3>
                      <p className="blog_description">
                        {expandedBlogs[index]
                          ? blog.body
                          : blog.body.slice(0, 100) + "..."}
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
                ))
              ) : (
                <p>No blogs found for this date</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
