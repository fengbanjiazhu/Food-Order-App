import React, { useReducer } from "react";
import cartData from "./cartData";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const index = state.items.findIndex((el) => el.id === action.item.id);
      const currentItem = state.items[index];
      const newAmount = state.totalAmount + action.item.price * action.item.amount;
      let newItems;

      if (!currentItem) {
        newItems = state.items.concat(action.item);
      } else {
        newItems = [...state.items];
        const newItem = { ...currentItem, amount: currentItem.amount + action.item.amount };
        newItems[index] = newItem;
      }

      return { items: newItems, totalAmount: newAmount };
    case "DEL":
      const currentIndex = state.items.findIndex((el) => el.id === action.id);
      const existingItem = state.items[currentIndex];
      const updatedAmount = state.totalAmount - existingItem.price;
      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[currentIndex] = updatedItem;
      }

      return { items: updatedItems, totalAmount: updatedAmount };
    default:
      return state;
  }
};

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addToCart = (item) => {
    dispatchCart({ type: "ADD", item });
  };

  const delFromCart = (id) => {
    dispatchCart({ type: "DEL", id });
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
