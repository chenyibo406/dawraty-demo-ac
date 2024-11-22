import React, { useState } from "react";
import logo from "../assets/images/dawraty-logo.png";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  const [language, setLanguage] = useState("EN"); // State to track the selected language

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN")); // Toggle between EN and AR
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" width={"60"} />
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
        <ShoppingCartOutlinedIcon
          style={{ fontSize: "24px", color: "0B4374" }}
        />
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
    </div>
  );
}

export default Header;
