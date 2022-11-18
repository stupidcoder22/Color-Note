import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const Card = (prop) => {
  const box = prop.box;
  const boxdelete = prop.boxdelete;
  const editChange = prop.editChange;
  return (
    <>
      {box.map((singlebox) => {
        const color = singlebox.color;
        const id = singlebox.id;
        return (
          <div
            className={`card`}
            key={singlebox.id}
            style={{ backgroundColor: color }}
          >
            <div className="textarea">
              {singlebox.isEdit ? (
                <div className="edit">
                  <FaEdit
                    size={30}
                    cursor="pointer"
                    onClick={() => editChange(id)}
                  />
                </div>
              ) : (
                <textarea
                  type="text"
                  // readOnly={true}
                  style={{ backgroundColor: color }}
                />
              )}
            </div>
            <div className="info">
              <p>{singlebox.time}</p>
              <FaTrash
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => boxdelete(id)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
