import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Menubar.css";

const Menubar = ({ onClose }) => {
  const [activeLanguage, setActiveLanguage] = useState("EN");

  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang); // Update active language
  };

  return (
    <div className="menubar">
      <div className="menubar__header">
        <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
      </div>
      <div className="menubar__content">
        <button className="menubar__item">Login</button>
        <button className="menubar__item">Sign Up</button>
        <div className="language-switch">
          <span
            className={`switch-label lan-en ${
              activeLanguage === "EN" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("EN")}
          >
            EN
          </span>
          <span
            className={`switch-label lan-ar ${
              activeLanguage === "AR" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("AR")}
          >
            AR
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
