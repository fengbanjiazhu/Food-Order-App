import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Spinner from "../UI/Spinner";
import Card from "../UI/Card";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch("https://react-http-e5150-default-rtdb.firebaseio.com/meals.json");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
      }
      setMeals(loadedData);
      setIsLoading(false);
      setHttpError();
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem key={meal.id} data={meal}>
        {meal.name}
      </MealItem>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <Spinner />}
        {httpError && <p className={classes.mealsError}>{httpError}</p>}
        {!isLoading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
}

export default AvailableMeals;
