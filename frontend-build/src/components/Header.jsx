import React, { useState } from "react";
import logo from "../assets/images/dawraty-logo.png";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menubar from "./Menubar";

function Header() {
  const [language, setLanguage] = useState("EN"); // State to track the selected language
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(true);
  const [isMenubarVisible, setIsMenubarVisible] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN")); // Toggle between EN and AR
  };
  const handleSearchClick = () => {
    // console.log("Seach icon clicked");
    setIsIconsVisible(false);
    setIsSearchVisible(true);
  };
  const handleCloseClick = () => {
    // console.log("Close icon clicked");
    setIsSearchVisible(false);
    setIsIconsVisible(true);
  };
  const handleMenuClick = () => {
    setIsMenubarVisible(true);
  };

  const handleMenubarClose = () => {
    setIsMenubarVisible(false);
  };

  return (
    <div className="header">
      <div className="header__burger-icon">
        {isIconsVisible && ( // Only show the burger icon if icons are visible
          <MenuIcon
            onClick={handleMenuClick}
            style={{ fontSize: "24px", color: "0B4374", cursor: "pointer" }}
          />
        )}
      </div>

      <div className="header__left">
        {isIconsVisible && <img src={logo} alt="logo" width={"60"} />}
        <h1 className="header__left-category">Category</h1>
      </div>

      <div className="header__searchbox">
        <SearchOutlinedIcon
          style={{ fontSize: "24px", color: "rgba(14, 14, 14, 0.4)" }}
          className="header__searchbox-icon"
        />
        <input
          type="text"
          placeholder="Search..."
          className="header__searchbox-input"
        />
      </div>

      <div className="header__right">
        <button className="header__right-login">Login</button>
        <button className="header__right-signup">Sign Up</button>
        {isIconsVisible && (
          <ShoppingCartOutlinedIcon
            style={{ fontSize: "24px", color: "0B4374" }}
          />
        )}

        {isSearchVisible ? (
          <div className="header__searchbox-full">
            <SearchOutlinedIcon
              className="header__searchbox-full-searchIcon"
              style={{ fontSize: "24px", color: "rgba(14, 14, 14, 0.4)" }}
            />
            <input
              type="text"
              placeholder="Search everything..."
              className="header__searchbox-input"
            />
            <CloseIcon
              onClick={handleCloseClick}
              className="header__searchbox-full-closeIcon"
              style={{ cursor: "pointer", marginLeft: "10px" }}
            />
          </div>
        ) : (
          <div className="header__right-searchIcon">
            <SearchOutlinedIcon
              onClick={handleSearchClick}
              style={{ fontSize: "24px", color: "0B4374" }}
            />
          </div>
        )}

        <div className="header__right-instructor">
          <h1>become an instructor</h1>
        </div>
        <div className="header__right-lan">
          <div className="language-switch" onClick={toggleLanguage}>
            <span
              className={`switch-label ${language === "EN" ? "active" : ""}`}
            >
              EN
            </span>
            <span
              className={`switch-label ${language === "AR" ? "active" : ""}`}
            >
              AR
            </span>
          </div>
        </div>
      </div>
      {isMenubarVisible && <Menubar onClose={handleMenubarClose} />}
      {isMenubarVisible && (
        <div className="overlay" onClick={handleMenubarClose} />
      )}
    </div>
  );
}

export default Header;
