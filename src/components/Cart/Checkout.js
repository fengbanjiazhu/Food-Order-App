import React from "react";
import classes from "./Checkout.module.css";

function Checkout(props) {
  const confirmHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Post Code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>
      <button type="button" onClick={props.onClose}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
}

export default Checkout;
