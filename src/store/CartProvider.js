import React, { useReducer } from "react";
import cartData from "./cartData";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newItem = state.items.concat(action.item);
      const newAmount = state.totalAmount + action.item.price * action.item.amount;
      return { items: newItem, totalAmount: newAmount };

    case "DEL":
      return;

    default:
      return state;
  }
};

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const delFromCart = (id) => {
    dispatchCart({ type: "DEL", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCart,
    delItem: delFromCart,
  };

  return <cartData.Provider value={cartContext}>{props.children}</cartData.Provider>;
}

export default CartProvider;
