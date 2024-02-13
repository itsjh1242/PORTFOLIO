import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
// Portfolio
import Portfolio from "./views/portfolio/Main";
import WorkAll from "./views/portfolio/WorkAll";
// Weather Picking
import WeatherPicker from "./views/weatherPicker/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/workall/:category" element={<WorkAll />} />
          <Route path="/weatherpicker" element={<WeatherPicker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
