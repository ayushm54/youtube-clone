import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import Videos from "./Videos";

export const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="video-detail">
      <div className="player-video">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
        />
        <h2
          className="video-card-title"
          style={{ fontWeight: "800", fontSize: "1.5rem", marginTop: "10px" }}
        >
          {title}
        </h2>
        <div className="video-footer">
          <div className="channel-name" style={{ color: "white" }}>
            <p>{channelTitle}</p>
            <MdOutlineVerified />
          </div>
          <div className="video-stats">
            <p>{parseInt(viewCount).toLocaleString()} views</p>
            <p>{parseInt(likeCount).toLocaleString()} likes</p>
          </div>
        </div>
      </div>
      <div className="related-videos">
        <div className="feeds-header">
          <h1 style={{ color: "white", marginLeft: "10px" }}>Related</h1>
          <h1 style={{ color: "Red", marginLeft: "10px" }}>Videos</h1>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default VideoDetail;
