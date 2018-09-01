import React from "react";

const List = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div>
            <li key={index}>{item.name}</li>
            <button onClick={}>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
