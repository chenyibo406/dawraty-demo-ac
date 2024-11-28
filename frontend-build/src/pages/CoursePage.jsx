import React, { useState, useRef } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ReactPlayer from "react-player";
import Flashcard from "../components/course/Flashcard";
import Lock from "../components/course/Lock";
import Performance from "../components/course/Performance";
import Quiz from "../components/course/Quiz";
// import CourseContent from "../components/sidebar/CourseContent";

import { IconButton, Slider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import VolumeDown from "@mui/icons-material/VolumeDown";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import "./CoursePage.css";

function CoursePage() {
  // const [showContent, setShowContent] = useState(false);
  const [activeComponent, setActiveComponent] = useState("lock");
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(false);
  // const [isHoveringFlashcard, setIsHoveringFlashcard] = useState(false);
  const [sidebarTop, setSidebarTop] = useState("10px");

  const playerRef = useRef(null); // Reference to the ReactPlayer

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
    setDuration(progress.loadedSeconds);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    playerRef.current.seekTo(seekTime);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleFullscreen = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().requestFullscreen();
    }
  };

  const handleActiveSidebar = () => {
    setActiveSidebar(!activeSidebar);
    console.log(activeSidebar);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(
        secs
      ).padStart(2, "0")}`;
    } else if (minutes > 0) {
      return `${minutes}:${String(secs).padStart(2, "0")}`;
    } else {
      return `00:${String(secs).padStart(2, "0")}`;
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "lock":
        return <Lock />;
      case "performance":
        return <Performance />;
      case "quiz":
        return (
          <Quiz
            activeSidebar={activeSidebar}
            handleActiveSidebar={handleActiveSidebar}
          />
        );
      case "flashcard":
        return (
          <Flashcard
            handleActiveSidebar={handleActiveSidebar} // Pass the function
            activeSidebar={activeSidebar} // Pass the state
            // setActiveComponent={setActiveComponent}
            // onMouseEnter={() => setIsHoveringFlashcard(true)}
            // onMouseLeave={() => setIsHoveringFlashcard(false)}
          />
        );
      case "reactPlayer":
        return (
          <div className="video__container">
            <ReactPlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              height="100%"
              width="100%"
              playing={playing}
              volume={volume}
              onProgress={handleProgress}
              onDuration={handleDuration}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <div className="video__container-menu">
              <div className="video__container-menu-bottom">
                <Slider
                  value={currentTime}
                  size="small"
                  onChange={handleSeek}
                  aria-labelledby="progress-slider"
                  min={0}
                  max={duration}
                  step={0.1}
                  style={{
                    width: 100,
                    position: "absolute",
                    top: "0",
                    borderRadius: "0",
                    padding: "0",
                    height: 4,
                    color: "white",
                  }}
                />
                <div className="video__container-menu-bottom-left">
                  <IconButton onClick={handlePlayPause}>
                    {playing ? (
                      <PauseIcon
                        style={{
                          fontSize: "32px",
                          color: "white", // Color for outlined icon
                        }}
                      />
                    ) : (
                      <PlayArrowIcon
                        style={{
                          fontSize: "32px",
                          color: "white", // Color for outlined icon
                        }}
                      />
                    )}
                  </IconButton>
                  <VolumeUpIcon
                    style={{
                      fontSize: "28px",
                      color: "white",
                    }}
                  />
                  <Slider
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-labelledby="volume-slider"
                    size="small"
                    min={0}
                    max={1}
                    step={0.01}
                    style={{
                      fontSize: "32px",
                      width: 100,
                      borderRadius: 0,
                      height: 4,
                      color: "white",
                    }}
                  />
                  <span>
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="video__container-menu-bottom-right">
                  <IconButton onClick={handleFullscreen}>
                    <FullscreenIcon
                      style={{ fontSize: "32px", color: "white" }}
                    />
                  </IconButton>
                  <span className="menu-open-icon">
                    <IconButton onClick={handleActiveSidebar}>
                      <MenuOpenIcon
                        style={{ fontSize: "32px", color: "white" }}
                      />
                    </IconButton>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="course-page">
      <div
        className="sidebar-menu-container"
        // style={{ top: isHoveringFlashcard ? "48px" : "10px" }}
        style={{ top: sidebarTop }}
      >
        {activeSidebar && (
          <Sidebar
            setActiveComponent={setActiveComponent}
            setSidebarTop={setSidebarTop}
          />
        )}
      </div>

      <div className="sidebar-default-container">
        <Sidebar
          setActiveComponent={setActiveComponent}
          setSidebarTop={setSidebarTop}
        />
      </div>

      <div className="course-page__content">{renderActiveComponent()}</div>
    </div>
  );
}

export default CoursePage;
