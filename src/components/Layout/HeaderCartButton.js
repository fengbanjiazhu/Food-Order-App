import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartData from "../../store/cartData";

function HeaderCartButton(props) {
  const cart = useContext(cartData);

  const numberOfCartItems = cart.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
