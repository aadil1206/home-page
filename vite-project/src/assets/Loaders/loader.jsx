import React from "react";
import "./Loader.css";

const loader = () => {
  return (
    <div className="bars">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="bar"></div>
      ))}
    </div>
  );
};

export default loader;
