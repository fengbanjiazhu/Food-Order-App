import React, { useState, useContext, useEffect } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartData from "../../store/cartData";

function HeaderCartButton(props) {
  const [buttonBump, setButtonBump] = useState(false);
  const cart = useContext(cartData);
  const { items } = cart;

  const numberOfCartItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonBump && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) return;
    setButtonBump(true);

    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
