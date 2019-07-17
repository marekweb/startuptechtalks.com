import React from "react";
import Speaker from "./speaker";

export default ({ speakers }) => (
  <div>
    <h2>Past Speakers</h2>
    {speakers.map(speaker => (
      <Speaker {...speaker} />
    ))}
  </div>
);
