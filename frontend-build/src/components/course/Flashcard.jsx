import { useState } from "react";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Add this import

import "./Flashcard.css";
import ReportIssue from "./ReportIssue";

function Flashcard({ handleActiveSidebar }) {
  const [showReport, setShowReport] = useState(false);
  const [reportText, setReportText] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(null);

  const handleReportClick = () => {
    setShowReport(true);
  };

  const handleCloseReport = () => {
    setShowReport(false);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  // Add this handler
  // const handleSubmit = () => {
  //   console.log(reportText);
  //   setShowReport(false);
  //   setReportText("");
  // };

  const handleRating = (type) => {
    if (rating === type) {
      setRating(null); // Unselect if clicking the same button
    } else {
      setRating(type);
    }
  };

  return (
    <>
      <div className="flashcard">
        <div className="flashcard__header">
          <h1>Dawraty</h1>

          <span className="icon-wrapper" onClick={handleActiveSidebar}>
            <MenuOpenOutlinedIcon
              style={{ fontSize: "24px", color: "0b4374s", cursor: "pointer" }}
            />
          </span>
        </div>
        <div className="flashcard__content">
          <div className="flashcard__content-menu">
            <div
              className={`flashcard__content-menu-icon ${
                isFavorite ? "active" : ""
              }`}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <FavoriteIcon style={{ fontSize: "24px", color: "#ff0000" }} />
              ) : (
                <FavoriteBorderOutlinedIcon
                  style={{ fontSize: "24px", color: "ffffff" }}
                />
              )}
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
            <div
              className={`flashcard__content-rates-icon ${
                rating === "up" ? "active" : ""
              }`}
              onClick={() => handleRating("up")}
            >
              <ThumbUpAltOutlinedIcon
                style={{
                  fontSize: "20px",
                  color: rating === "up" ? "#0b4374" : "ffffff",
                }}
              />
            </div>
            <div
              className={`flashcard__content-rates-icon ${
                rating === "down" ? "active" : ""
              }`}
              onClick={() => handleRating("down")}
            >
              <ThumbDownAltOutlinedIcon
                style={{
                  fontSize: "20px",
                  color: rating === "down" ? "#0b4374" : "ffffff",
                }}
              />
            </div>
            <div
              className="flashcard__content-rates-icon"
              onClick={handleReportClick}
            >
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
      {showReport && <ReportIssue onClose={handleCloseReport} />}
    </>
  );
}

export default Flashcard;
