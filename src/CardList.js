import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
            <Card
              id={robots[i].id}
              name={robots[i].name}
              key={i}
              email={robots[i].email}
            />
        );
      })}
    </div>
  );
};

export default CardList