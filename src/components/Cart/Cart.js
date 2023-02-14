import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartData from "../../store/cartData";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartContext = useContext(cartData);
  const totalAmount = cartContext.totalAmount.toFixed(2);
  const hasItems = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const delCartItemHandler = (id) => {
    cartContext.delItem(id);
  };

  const orderHandler = function () {
    setIsCheckout(true);
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

  const modal = (
    <div className={classes.actions}>
      <button className={classes["cart--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cancelOrderHandler = () => {
    setIsCheckout(false);
  };

  return (
    <Modal onClick={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && <Checkout onClose={cancelOrderHandler} />}
      {!isCheckout && modal}
    </Modal>
  );
}

export default Cart;
