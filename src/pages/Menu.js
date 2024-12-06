import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase"; // Import your Firebase setup
import Footer from "../components/Footer";
import "../App.css";

function Menu() {
  // State variables
  const [menuItems, setMenuItems] = useState({
    snacks: [],
    drinks: [],
    desserts: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort by ascending

  // Fetch menu items from Firebase
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Group items by category
        const groupedItems = items.reduce(
          (acc, item) => {
            const category = item.category.toLowerCase(); // Ensure consistency in category names
            if (acc[category]) acc[category].push(item);
            return acc;
          },
          { snacks: [], drinks: [], desserts: [] }
        );

        setMenuItems(groupedItems);
      } catch (error) {
        console.error("Error fetching menu items from Firestore:", error);
      }
    };

    fetchMenuItems();
  }, []);

  // Filtered menu items based on search
  const filteredMenuItems = Object.keys(menuItems).reduce((acc, category) => {
    const filteredItems = menuItems[category].filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = filteredItems;
    }
    return acc;
  }, {});

  // Sort items by price
  const handleSort = (category) => {
    return [...(filteredMenuItems[category] || [])].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
  };

  // Check if there are no items to display
  const isEmpty = Object.keys(filteredMenuItems).length === 0;

  // Category icons
  const categoryIcons = {
    snacks: "fa-solid fa-burger", // Example icon for snacks
    drinks: "fa-solid fa-coffee", // Example icon for drinks
    desserts: "fa-solid fa-ice-cream", // Example icon for desserts
  };

  return (
    <>
      <div className="menu_page layout_padding">
        {/* Menu Header */}
        <div className="menu_header text-center">
          <h1 className="menu_main_title">Our Menu</h1>
          <p className="menu_sub_title">Delicious food and drinks for every taste!</p>
        </div>

        {/* Search and Sort Section */}
        <div className="search_sort_section text-center">
          <input
            type="text"
            className="search_input"
            placeholder="Search for items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="sort_select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Sort by Price (Low to High)</option>
            <option value="desc">Sort by Price (High to Low)</option>
          </select>
        </div>

        {/* Menu Categories */}
        <div className="menu_section">
          <div className="container">
            {isEmpty ? (
              <div className="no_items text-center">
                <h2>No items available</h2>
              </div>
            ) : (
              Object.keys(filteredMenuItems).map((category) => (
                <div className="category_section" key={category}>
                  <h2 className="category_title">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                  <div className="row">
                    {handleSort(category).map((item) => (
                      <div className="col-md-4 mb-4" key={item.id}>
                        <div className="menu_item">
                          <i className={`item_icon ${categoryIcons[category]}`}></i>
                          <h3 className="item_name">{item.name}</h3>
                          <p className="item_description">{item.description}</p>
                          <p className="item_price">{`₹${item.price}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Menu;
