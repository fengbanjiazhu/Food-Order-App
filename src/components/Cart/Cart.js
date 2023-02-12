import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["cart--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
