import React from "react";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sidebar">
      {categories.map((category) => (
        <button
          type="button"
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className={`sidebar-item ${
            selectedCategory === category.name ? "sidebar-item-selected" : ""
          }`}
        >
          <span
            className={`side-bar-item-icon ${
              selectedCategory === category.name
                ? "sidebar-item-selected-icon"
                : ""
            }}`}
          >
            {category.icon}
          </span>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default SideBar;
