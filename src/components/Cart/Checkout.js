import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const fiveChart = (value) => value.trim().length === 4;

function Checkout(props) {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const validName = !isEmpty(enteredName);
    const validStreet = !isEmpty(enteredStreet);
    const validPostal = fiveChart(enteredPostal);
    const validCity = !isEmpty(enteredCity);

    const formIsvValid = validName && validStreet && validPostal && validCity;
    if (!formIsvValid) {
      alert("Please input valid information");
      return;
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required={true} ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" required={true} ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" required={true} ref={postalInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" required={true} ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
