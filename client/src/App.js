import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
// Portfolio
import Portfolio from "./views/portfolio/Main";

// Lazy Loading
// Work Detail Page
const WorkAll = React.lazy(() => import("./views/portfolio/WorkAll"));
// Weather Picking Page
const WeatherPicker = React.lazy(() => import("./views/weatherPicker/Main"));

function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/workall/:category" element={<WorkAll />} />
            <Route path="/weatherpicker" element={<WeatherPicker />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
