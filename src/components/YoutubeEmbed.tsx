import React from "react";

const YouTubeEmbed = () => {
  return (
    <div
      className="video-responsive"
      style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: 0,
      }}
    >
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/Tn_eLB36Mv8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      />
    </div>
  );
};

export default YouTubeEmbed;
