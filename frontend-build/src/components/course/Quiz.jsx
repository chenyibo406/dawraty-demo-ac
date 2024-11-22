import React, { useState } from "react"; // Import useState
import "./Quiz.css";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

function Quiz() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (index) => {
    setSelectedItem(index); // Set the selected item index
  };
  return (
    <div className="quiz">
      {/* <h1>This is Quiz</h1> */}
      <div className="quiz__content">
        <div className="quiz__content-title">
          What does the term 'controlled experiment' refer to in scientific
          research?
        </div>
        {[
          "An experiment where only one variable is changed at a time.",
          "To define the scope of the experiment.",
          "To summarize previous research findings.",
          "To provide a testable prediction based on observations.",
        ].map(
          (
            text,
            index // Array of options
          ) => (
            <div
              key={index}
              className="quiz__content-item"
              onClick={() => handleItemClick(index)} // Handle click
            >
              {selectedItem === index ? ( // Conditional rendering based on selected item
                <CheckBoxOutlinedIcon
                  style={{ fontSize: "18px", color: "rgba(11, 68, 117, 0.7)" }}
                />
              ) : (
                <CheckBoxOutlineBlankOutlinedIcon
                  style={{ fontSize: "18px", color: "rgba(11, 68, 117, 0.7)" }}
                />
              )}
              <p>{text}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Quiz;
