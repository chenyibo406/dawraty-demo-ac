import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Menubar.css";
import SignBox from "./SignBox";

const Menubar = ({ onClose }) => {
  const [activeLanguage, setActiveLanguage] = useState("EN");
  const [signBoxType, setSignBoxType] = useState(null);

  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang); // Update active language
  };

  const handleSignBoxOpen = (type) => {
    setSignBoxType(type);
  };

  const handleSignBoxClose = () => {
    setSignBoxType(null);
  };

  const handleSignBoxTypeChange = (newType) => {
    setSignBoxType(newType);
  };

  return (
    <>
      <div className="menubar">
        <div className="menubar__header" onClick={onClose}>
          <button className="icon-wrapper">
            <CloseIcon style={{ cursor: "pointer" }} />
          </button>
        </div>
        <div className="menubar__content">
          <button
            className="menubar__item primary-button-outline"
            onClick={() => handleSignBoxOpen("login")}
          >
            Login
          </button>
          <button
            className="menubar__item primary-button-outline"
            onClick={() => handleSignBoxOpen("signup")}
          >
            Sign Up
          </button>
          <button
            className="menubar__item primary-button-outline"
            onClick={() => handleSignBoxOpen("instructor")}
          >
            Become an Instructor
          </button>

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
      {signBoxType && (
        <SignBox
          type={signBoxType}
          onClose={handleSignBoxClose}
          onTypeChange={handleSignBoxTypeChange}
        />
      )}
    </>
  );
};

export default Menubar;
