import React from "react";

export default function Colors({ handleSetColor }) {
  return (
    <div className="colors">
      <div
        className="color card-winter"
        id="card-winter"
        onClick={(e) => handleSetColor(e.currentTarget.id)}
      ></div>
      <div
        className="color card-autumn"
        id="card-autumn"
        onClick={(e) => handleSetColor(e.currentTarget.id)}
      ></div>
      <div
        className=" color card-sprint"
        id="card-sprint"
        onClick={(e) => handleSetColor(e.currentTarget.id)}
      ></div>
      <div
        className="color card-summer"
        id="card-summer"
        onClick={(e) => handleSetColor(e.currentTarget.id)}
      ></div>
    </div>
  );
}
