import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
      </Routes>
    </div>
  );
}

export default App;
