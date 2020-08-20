import React from "react";
import { v4 as uuidv4 } from "uuid";

function IngredientList({ ingredients }) {
  return (
    <ul className="ingredient-list">
      {ingredients.map((item) => (
        <li key={uuidv4()} className="ingredient-list-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
export default IngredientList;
