import React from "react";

export default ({ children, className }) => {
  let sectionClass = "section";
  if (className) {
    sectionClass += " " + className;
  }
  return (
    <div className={sectionClass}>
      <div className="content">{children}</div>
    </div>
  );
};
