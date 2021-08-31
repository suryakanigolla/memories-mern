import React from "react";

const Tag = ({ x, y, number }) => {
  return (
    <div style={{ top: y, left: x }} className="pin">
      <span>{number}</span>
    </div>
  );
};

export default Tag;
