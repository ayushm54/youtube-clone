import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="feeds">
      {videos &&
        videos.map((video, idx) => <VideoCard key={idx} video={video} />)}
    </div>
  );
};

export default Videos;
