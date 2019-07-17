import React from "react";

export default ({ name, img, url }) => (
  <div className="speaker">
    <div className="speaker-left">
      <img className="speaker-image" src={`/static/speakers/${img}`} />
    </div>
    <div className="speaker-right">
      <a href={url}>
        <div className="speaker-name">{name}</div>
      </a>
    </div>
  </div>
);
