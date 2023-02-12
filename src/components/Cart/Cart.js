import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartData from "../../store/cartData";
import CartItem from "./CartItem";

function Cart(props) {
  const cartContext = useContext(cartData);
  const totalAmount = cartContext.totalAmount.toFixed(2);
  const hasItems = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const delCartItemHandler = (id) => {
    cartContext.delItem(id);
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            data={item}
            onDel={delCartItemHandler.bind(null, item.id)}
            onAdd={addCartItemHandler.bind(null, item)}
          ></CartItem>
        );
      })}
    </ul>
  );
  return (
    <Modal onClick={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["cart--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
