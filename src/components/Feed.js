import React, { useState, useEffect } from "react";

import VideoCard from "./VideoCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Loader from "./Loader";
import Videos from "./Videos";

export const Feed = ({ searchQuery }) => {
  const [videos, setVideos] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(searchQuery);
  }, [searchQuery]);

  if (!videos) return <Loader />;

  return (
    <div className="main">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="feeds-container">
        <div className="feeds-header">
          <h1 style={{ color: "white", marginLeft: "10px" }}>
            {selectedCategory}
          </h1>
          <h1 style={{ color: "Red", marginLeft: "10px" }}>Videos</h1>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
