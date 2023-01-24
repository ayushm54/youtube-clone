import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link
      to={`/video/${video.id.videoId}`}
      className="video-card"
      style={{ textDecoration: "none" }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="card-img"
        height={200}
      />
      <p className="video-card-title">{video.snippet.title.slice(0, 60)}</p>
      <div className="channel-name">
        <p>{video.snippet.channelTitle}</p>
        <MdOutlineVerified />
      </div>
    </Link>
  );
};

export default VideoCard;
