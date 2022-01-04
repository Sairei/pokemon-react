import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading_container">
        <div className="loading_text">
          Loading
        </div>
        <div className="gif">
          <img src="https://i.gifer.com/VgI.gif" className="loading_gif noselect" alt="loading-gif"></img>
        </div>
      </div>
    </>
  );
}

export default Loading;