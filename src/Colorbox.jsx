import React from "react";

const colordata = [
  "#2BAE66FF",
  "#FCF951FF",
  "#E15D44",
  "#b284be",
  "#078282FF",
  "#404ac4",
  "#A13941FF",
];
const Colorbox = ({ addCard }) => {
  return colordata.map((btn, index) => {
    return (
      <button
        style={{ backgroundColor: `${btn}` }}
        key={index}
        className="colorbtn"
        onClick={() => addCard(btn)}
      ></button>
    );
  });
};

export default Colorbox;
