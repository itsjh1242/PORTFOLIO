import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
// Weather Picking
import Main from "./views/weatherPicker/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/weatherpicker" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
