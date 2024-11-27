import "./Sidebar.css";
import React, { useState } from "react";
import { aiTag } from "../../assets/icons/icons";
import Ace from "./Ace";
import Connect from "./Connect";
import CourseContent from "./CourseContent";
import StudyGuide from "./StudyGuide";

import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

function Sidebar({ setActiveComponent, setSidebarTop }) {
  const [selectedItem, setSelectedItem] = useState("studyGuide");
  // const [activeComponent, setActiveComponent] = useState("studyGuide");
  // const [sidebarTop, setSidebarTop] = useState("10px");

  const renderActiveComponent = () => {
    switch (selectedItem) {
      case "studyGuide":
        return <StudyGuide setActiveComponent={setActiveComponent} />;
      case "courseContent":
        return (
          <CourseContent
            setActiveComponent={setActiveComponent}
            setSidebarTop={setSidebarTop}
          />
        );
      case "act":
        return (
          <Ace
            setActiveComponent={setActiveComponent}
            setSidebarTop={setSidebarTop}
          />
        );
      case "connect":
        return <Connect setActiveComponent={setActiveComponent} />;
      default:
        return null;
    }
  };

  const handleItemClick = (componentName) => {
    setSelectedItem(componentName);
    // if (componentName === "act") {
    //   setSidebarTop("48px");
    // } else {
    //   setSidebarTop("10px");
    // }
  };

  // const handleItemClick = (componentName) => {
  //   setSelectedItem(componentName);
  // };

  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <ul>
          <li
            className={`sidebar__item ${
              selectedItem === "studyGuide" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("studyGuide")}
          >
            <div className="sidebar__icon-container">
              {/* <img src={studyGuideIcon} className="sidebar__icon" /> */}
              <AssistantOutlinedIcon
                style={{
                  fontSize: "24px",
                  color: "0e0e0e", // Color for outlined icon
                }}
              />
              <span className="sidebar__text">Study Guide</span>
            </div>
            <img src={aiTag} className="sidebar__icon--aiTag" />
          </li>

          <li
            className={`sidebar__item ${
              selectedItem === "courseContent" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("courseContent")}
          >
            {/* <img src={courseContent} className="sidebar__icon" /> */}
            <PlaylistAddOutlinedIcon
              style={{
                fontSize: "28px",
                color: "0e0e0e", // Color for outlined icon
              }}
            />
            <span className="sidebar__text">Course Content</span>
          </li>

          <li
            className={`sidebar__item ${
              selectedItem === "act" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("act")}
          >
            <div className="sidebar__icon-container">
              <AutoAwesomeOutlinedIcon
                style={{
                  fontSize: "28px",
                  color: "0e0e0e", // Color for outlined icon
                }}
              />
              <span className="sidebar__text">ACE</span>
            </div>
            <img src={aiTag} className="sidebar__icon--aiTag" />
          </li>

          <li
            className={`sidebar__item ${
              selectedItem === "connect" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("connect")}
          >
            <PersonAddAltOutlinedIcon
              style={{
                fontSize: "24px",
                color: "0e0e0e", // Color for outlined icon
              }}
            />
            <span className="sidebar__text">Connects</span>
          </li>
        </ul>
      </div>

      <div className="sidebar__content">{renderActiveComponent()}</div>
    </div>
  );
}

export default Sidebar;
