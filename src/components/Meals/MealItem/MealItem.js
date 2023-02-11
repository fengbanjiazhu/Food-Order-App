import React from "react";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const meal = props.data;
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <h3 className={classes.price}>{price}</h3>
      </div>
      <div></div>
    </li>
  );
}

export default MealItem;
