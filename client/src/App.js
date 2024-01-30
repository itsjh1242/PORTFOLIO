import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
// Portfolio
import Portfolio from "./views/portfolio/Main";
// Weather Picking
import WeatherPicker from "./views/weatherPicker/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/weatherpicker" element={<WeatherPicker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
