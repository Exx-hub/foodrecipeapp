import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

function CardList({ recipes }) {
  return (
    <div className="cardlist-container">
      {recipes !== [] &&
        recipes.map((item) => <Card item={item} key={uuidv4()} />)}
    </div>
  );
}

export default CardList;
