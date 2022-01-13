import React from "react";

const Loading = () => {
  const listGif = [
    "4m3s",
    "bf0",
    "FPcs",
    "2iiJ",
    "Ws1q",
    "VgI"
  ]
  const gif = listGif[Math.floor(Math.random() * listGif.length)];

  return (
    <>
      <div className="loading_container">
        <div className="loading_text">
          Loading
        </div>
        <div className="gif">
          <img src={`https://i.gifer.com/${gif}.gif`} className="loading_gif noselect" alt="loading-gif"></img>
        </div>
      </div>
    </>
  );
}

export default Loading;