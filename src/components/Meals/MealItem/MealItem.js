import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = props => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} item={props.item} />
      </div>
    </li>
  );
};

export default MealItem;
