// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import CoursePage from "../src/pages/CoursePage";

function App() {
  return (
    <div>
      <div className="app-main">
        <Header />
        <CoursePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
