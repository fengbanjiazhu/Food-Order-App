import classes from "./Spinner.module.css";
import img from "../../assets/spinner.png";

function Spinner() {
  return (
    <div className={classes.spinner}>
      <img src={img} alt="spinner" />
    </div>
  );
}

export default Spinner;
