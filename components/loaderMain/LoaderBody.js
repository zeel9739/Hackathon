import React from "react";
import "./loaderBody.css";

export default function LoaderBody() {
  return (
    <div>
      <div className="body">
        <h1 className="ok">progress...</h1>
        <div id="cooking">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div id="area">
            <div id="sides">
              <div id="pan"></div>
              <div id="handle"></div>
            </div>
            <div id="pancake">
              <div id="pastry"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
