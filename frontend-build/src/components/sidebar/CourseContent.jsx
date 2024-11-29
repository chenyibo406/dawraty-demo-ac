import {
  arrowRight,
  checkBox,
  checkIcon,
  playXS,
} from "../../assets/icons/icons";
import "./CourseContent.css";
import React, { useState } from "react";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function CourseContent({ setActiveComponent, setSidebarTop }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowDown, setIsArrowDown] = useState(false);

  const handleTaskClick = () => {
    setActiveComponent("reactPlayer");
    setSidebarTop("10px");
  };

  const topics = [
    { title: "Introduction to Dentistry", duration: "3 min" },
    { title: "Dental Anatomy", duration: "5 min" },
    { title: "Oral Hygiene", duration: "4 min" },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsArrowDown(!isArrowDown);
  };

  return (
    <div className="courseContent">
      <div className="courseContent__item" onClick={handleToggle}>
        <div className="courseContent__item--left">
          {/* <img
            src={arrowRight}
            alt="arrow down"
            className={isArrowDown ? "arrow-down" : ""}
          /> */}
          {/* <ExpandCircleDownOutlinedIcon
            style={{ fontSize: "24px", marginRight: "6px" }}
          /> */}
          <NavigateNextOutlinedIcon
            className={isArrowDown ? "arrow-down" : ""}
            style={{ fontSize: "24px", marginRight: "6px" }}
          />
          <h1>Introduction to Dentistry</h1>
        </div>
        <div className="courseContent__item--right">
          <h2>1/3</h2>
          {/* <span className="dot">•</span> */}
          <FiberManualRecordIcon style={{ fontSize: "4px" }} />

          <h2>9 min</h2>
        </div>
      </div>

      {isOpen && (
        <div className="courseContent__task">
          <div className="courseContent__task--content">
            <nav>
              <ul>
                {topics.map((topic, index) => (
                  <li key={index} onClick={handleTaskClick}>
                    <div className="courseContent__task--topic">
                      <div className="courseContent__task--check">
                        <CheckBoxOutlineBlankOutlinedIcon
                          style={{ fontSize: "20px" }}
                        />
                      </div>
                      <h1 className="courseContent__task-title">
                        <span className="task-number">{index + 1}.</span>
                        {topic.title}
                      </h1>
                    </div>

                    <div
                      className="courseContent__task-time"
                      // onClick={handleTaskClick}
                    >
                      {/* <img src={playXS} alt="play sm icon" /> */}
                      <PlayArrowIcon />
                      <p>{topic.duration}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseContent;
