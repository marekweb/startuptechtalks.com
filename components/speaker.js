import React from 'react';

export default ({name, img, linkedInUrl}) =>
  <div className="speaker">
    <div className="speaker-left">
    <img className="speaker-image" src={`/static/speakers/${img}`}/>
    </div>
    <div className="speaker-right">
      <div className="speaker-name">{name}</div>
    </div>
  </div>;
