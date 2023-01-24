import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Feed, VideoDetail, ChannelDetail, NavBar } from "./components";

function App() {
  const [searchQuery, setSearchQuery] = useState("New");

  const handleSearchInput = (input) => {
    setSearchQuery(input);
  };

  return (
    <Router>
      <NavBar handleSearchInput={handleSearchInput} />
      <Routes>
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route exact path="*" element={<Feed searchQuery={searchQuery} />} />
      </Routes>
    </Router>
  );
}

export default App;
