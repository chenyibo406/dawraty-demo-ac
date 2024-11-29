import React from "react";
import "./CategoryBox.css";

const CategoryBox = () => {
  const categories = [
    "All Courses",
    "Pathology",
    "Bio Chemistry",
    "Allied Health",
    "Medicine",
    "Mathematics",
  ];

  return (
    <div className="category-box">
      <div className="category-wrapper">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBox;
