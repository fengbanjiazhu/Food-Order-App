import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
}

export default HeaderCartButton;
