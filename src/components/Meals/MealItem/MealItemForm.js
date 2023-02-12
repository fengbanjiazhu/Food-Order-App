import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const [validAmount, setValidAmount] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || amountNumber < 1 || amountNumber > 5) {
      setValidAmount(false);
      return;
    }
    props.onAddToCart(amountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>Add</button>
      {!validAmount && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
