import React from "react";
import Card from "./Card";

const Box = ({ box, boxdelete, editChange }) => {
  return (
    <div className="rightbox">
      <Card box={box} boxdelete={boxdelete} editChange={editChange} />
    </div>
  );
};

export default Box;
