import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ReactPlayer from "react-player";
import Flashcard from "../components/course/Flashcard";
import Lock from "../components/course/Lock";
import Performance from "../components/course/Performance";
import Quiz from "../components/course/Quiz";
import CourseContent from "../components/sidebar/CourseContent";
import "./CoursePage.css";

function CoursePage() {
  // const [showContent, setShowContent] = useState(false);
  const [activeComponent, setActiveComponent] = useState("lock");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "lock":
        return <Lock />;
      case "performance":
        return <Performance />;
      case "quiz":
        return <Quiz />;
      case "flashcard":
        return <Flashcard />;
      case "reactPlayer":
        return (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            height="100%"
            width="100%"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="course-page">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="course-page__content">{renderActiveComponent()}</div>
    </div>
  );
}

export default CoursePage;
