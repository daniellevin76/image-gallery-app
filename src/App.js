import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Favourites } from "./components/Favourites";
import { Home } from "./components/Home";
import "./App.css";

/**
 * This object only functions as routing to the different components
 */
function App() {
  console.log("app render");
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
