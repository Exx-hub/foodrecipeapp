import React, { useState } from "react";
import IngredientList from "../components/IngredientList";

function Card({ item }) {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredientLines } = item.recipe;
  return (
    <div className="card">
      <h3>{label}</h3>
      <img src={image} alt="" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Full Recipe and Procedure
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <IngredientList ingredients={ingredientLines} />}
    </div>
  );
}

export default Card;
