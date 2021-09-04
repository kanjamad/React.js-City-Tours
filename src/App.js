import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";
import "./App.scss";
import { tourData } from "./components/tourData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TourList tourData={tourData} />
    </div>
  );
}

export default App;
