import { arrowDown, pageView, listView } from "../../assets/icons/icons";
import { useState } from "react";
import "./Ace.css";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function ace({ setActiveComponent, setSidebarTop }) {
  const [selectedChapter, setSelectedChapter] = useState("Select a chapter");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Flashcard");
  const [selectedViewMode, setSelectedViewMode] = useState("page");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = () => {
    setIsFavorite((prev) => !prev);
  };

  // const handleTaskClick = () => {
  //   setActiveComponent("ace");
  // };

  const chapters = [
    "Chapter 1: Hello World",
    "Chapter 2: Learning React",
    "Chapter 3: Advanced Topics",
    // Add more chapters as needed
  ];
  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setIsDropdownOpen(false);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleTaskClick = () => {
    setSidebarTop("56px");
    if (selectedOption === "Flashcard") {
      setActiveComponent("flashcard");
    } else if (selectedOption === "Quiz") {
      setActiveComponent("quiz");
    }
  };

  const handleViewMode = (option) => {
    setSelectedViewMode(option);
  };

  return (
    <div className="ace">
      <div className="ace__chapter">
        <button
          className="ace__chapter-btn"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span
            className={selectedChapter !== "Select a chapter" ? "selected" : ""}
          >
            {selectedChapter}
          </span>
          <img
            src={arrowDown}
            alt="arrow down"
            style={{
              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>

        {isDropdownOpen && (
          <div className="ace__chapter-dropdown">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className={`ace__chapter-dropdown-item ${
                  selectedChapter === chapter ? "selected" : ""
                }`}
                onClick={() => handleChapterSelect(chapter)}
              >
                {chapter}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="ace__switch-menu">
        <button
          className={`ace__switch-btn ${
            selectedOption === "Flashcard" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("Flashcard")}
        >
          Flashcard
        </button>
        <button
          className={`ace__switch-btn ${
            selectedOption === "Quiz" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("Quiz")}
        >
          Quiz
        </button>
      </div>

      {selectedOption !== "Quiz" && (
        <div className="ace__viewMode">
          <h1>View Mode</h1>
          <div className="ace__viewMode-switch">
            <button
              className={`ace_viewMode-btn ${
                selectedViewMode === "page" ? "active" : ""
              }`}
              onClick={() => handleViewMode("page")}
            >
              <ArticleOutlinedIcon
                // fontSize="large"
                style={{
                  fontSize: "24px",
                  color:
                    selectedViewMode === "page"
                      ? "white"
                      : "rgba(21, 128, 220, 0.4)",
                }}
              />
            </button>

            <button
              className={`ace_viewMode-btn ${
                selectedViewMode === "list" ? "active" : ""
              }`}
              onClick={() => handleViewMode("list")}
            >
              {/* <img src={listView} alt="list view" /> */}
              <ViewStreamOutlinedIcon
                style={{
                  fontSize: "24px",
                  color:
                    selectedViewMode === "list"
                      ? "white"
                      : "rgba(21, 128, 220, 0.4)",
                }}
              />
            </button>
          </div>
        </div>
      )}

      <button className="ace__AiGenerate-btn" onClick={handleTaskClick}>
        AI Generate
      </button>

      {selectedOption !== "Quiz" && (
        <div className="ace__save-flashcards">
          <h1 className="ace__save-flashcards-title">Save</h1>
          <button className="ace__save-flashcards-button">
            Title
            <span onClick={handleIconClick} style={{ cursor: "pointer" }}>
              {isFavorite ? (
                <FavoriteRoundedIcon
                  style={{
                    fontSize: "24px",
                    color: "red", // Color for filled icon
                  }}
                />
              ) : (
                <FavoriteBorderRoundedIcon
                  style={{
                    fontSize: "24px",
                    color: "rgba(21, 128, 220, 0.4)", // Color for outlined icon
                  }}
                />
              )}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ace;
