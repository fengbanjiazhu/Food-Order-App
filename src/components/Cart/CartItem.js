import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const data = props.data;
  const price = `$${data.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{data.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {data.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onDel}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
