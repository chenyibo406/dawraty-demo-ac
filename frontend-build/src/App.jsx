// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./App.css";
import CoursePage from "../src/pages/CoursePage";

function App() {
  return (
    <div>
      <div className="app-main">
        <Header />
        {/* <CoursePage /> */}
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
