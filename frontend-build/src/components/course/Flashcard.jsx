import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import { IconButton } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "./Flashcard.css";
import { useState } from "react";

function Flashcard({ handleActiveSidebar }) {
  // const [activeSidebar, setActiveSidebar] = useState(false);
  // const handleActiveSidebar = () => {
  //   setActiveSidebar(!activeSidebar);
  //   console.log(activeSidebar);
  // };

  return (
    <div
      className="flashcard"
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
    >
      <div className="flashcard__header">
        <h1>Dawraty</h1>
        <MenuOpenOutlinedIcon
          onClick={handleActiveSidebar}
          style={{ fontSize: "24px", color: "0b4374s", cursor: "pointer" }}
        />
        {/* <span className="menu-open-icon">
          <IconButton onClick={handleActiveSidebar}>
            <MenuOpenIcon style={{ fontSize: "32px", color: "white" }} />
          </IconButton>
        </span> */}
      </div>
      <div className="flashcard__content">
        <div className="flashcard__content-menu">
          <div className="flashcard__content-menu-icon">
            <RemoveRedEyeOutlinedIcon
              style={{ fontSize: "24px", color: "ffffff" }}
            />
          </div>
          <div className="flashcard__content-menu-icon">
            <FavoriteBorderOutlinedIcon
              style={{ fontSize: "24px", color: "ffffff" }}
            />
          </div>
        </div>

        <div className="flashcard__content-info">
          <div className="flashcard__content-info-icon">
            <ArrowBackIosNewOutlinedIcon
              style={{ fontSize: "24px", color: "ffffff" }}
            />
          </div>
          <h1 className="flashcard__content-info-content">
            This is the flashcard
          </h1>
          <div className="flashcard__content-info-icon">
            <ArrowForwardIosOutlinedIcon
              style={{ fontSize: "24px", color: "ffffff" }}
            />
          </div>
        </div>

        <div className="flashcard__content-rates">
          <div className="flashcard__content-rates-icon">
            <ThumbUpAltOutlinedIcon
              style={{ fontSize: "20px", color: "ffffff" }}
            />
          </div>
          <div className="flashcard__content-rates-icon">
            <ThumbDownAltOutlinedIcon
              style={{ fontSize: "20px", color: "ffffff" }}
            />
          </div>
          <div className="flashcard__content-rates-icon">
            <GppMaybeOutlinedIcon
              style={{ fontSize: "20px", color: "ffffff" }}
            />
          </div>
        </div>
      </div>

      <div className="flashcard__counter">
        <div className="flashcard__counter-content">
          <h4 className="flashcard__counter-content-numerator">1</h4>
          <span>/</span>
          <h4 className="flashcard__counter-content-denominator">5</h4>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
