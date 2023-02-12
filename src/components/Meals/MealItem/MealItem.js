import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import cartData from "../../../store/cartData";

function MealItem(props) {
  const cartContext = useContext(cartData);
  const meal = props.data;
  const price = `$${meal.price.toFixed(2)}`;

  const addTocCartHandler = (amount) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <h3 className={classes.price}>{price}</h3>
      </div>
      <div>
        <MealItemForm onAddToCart={addTocCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
