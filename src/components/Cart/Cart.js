import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartData from "../../store/cartData";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [submitResult, setSubmitResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const cartContext = useContext(cartData);
  const totalAmount = cartContext.totalAmount.toFixed(2);
  const hasItems = cartContext.items.length > 0;

  const orderHandler = function () {
    setIsCheckout(true);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const delCartItemHandler = (id) => {
    cartContext.delItem(id);
  };
  const cancelOrderHandler = () => {
    setIsCheckout(false);
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

  const submitOrder = async (userData) => {
    try {
      const res = await fetch("https://react-http-e5150-default-rtdb.firebaseio.com/orders.json", {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartContext.items,
        }),
      });
      if (res.ok !== true) throw new Error("Failed to submit order");
      const status = await res.json();
      cartContext.clearCart();
      setSubmitResult(true);
      setResultMessage(`your order has been successful submitted! Order ID:${status.name}`);
    } catch (error) {
      setResultMessage(`something wen wrong! error:${error}`);
      console.log(error);
    }
  };

  const cartSubmitResult = <React.Fragment>{resultMessage}</React.Fragment>;

  const cartModal = (
    <React.Fragment>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && <Checkout onSubmit={submitOrder} onClose={cancelOrderHandler} />}
      {!isCheckout && modal}
    </React.Fragment>
  );
  return (
    <Modal onClick={props.onCloseCart}>
      {submitResult && cartSubmitResult}
      {!submitResult && cartModal}
    </Modal>
  );
}

export default Cart;
