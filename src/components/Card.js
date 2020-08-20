import React, { useState } from "react";
import IngredientList from "../components/IngredientList";

function Card({ item }) {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredientLines } = item.recipe;
  return (
    <div className="card">
      <h3 className="food-label">{label}</h3>
      <img className="food-image" src={image} alt="" />
      <a
        className="recipe-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Full Recipe and Procedure
      </a>
      <button className="ingredient-button" onClick={() => setShow(!show)}>
        Ingredients
      </button>
      {show && <IngredientList ingredients={ingredientLines} />}
    </div>
  );
}

export default Card;
