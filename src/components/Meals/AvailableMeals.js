import React, { useEffect,useState } from "react";
import classes from './AvailableMeals.module.css';

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



const AvailableMeals=()=>{
const [meals,setMeals]=useState([]); //using because fetching is an async task therefore component ko data show krne ke liye usko re render krna padega
const [isLoading,setIsLoading]=useState(true)
const [httpError,setHttpError]=useState()

    useEffect(()=>{
        const fetchMeals=async()=>{
          const response = await fetch('https://tomato-food-order-app-default-rtdb.firebaseio.com/meals.json');
          const responseData= await response.json();

          if(!response.ok){
            throw new Error('Something went wrong!')
          }

          const loadedMeals=[];
          for(const key in responseData){
            loadedMeals.push({
              id:key,
              name:responseData[key].name,
              description:responseData[key].description,
              price:responseData[key].price
            })
          }

              setMeals(loadedMeals);
              setIsLoading(false);

        }
        fetchMeals().catch((error)=>{
          setHttpError(error.message);
          setIsLoading(false);
        });   //try catch isiliye use nhi kiya kyunki vo async fxn ka panga tha kyunki async fxn directly caal nhi hota useeffect me

    },[])

    if(isLoading){
      return <div className={classes.mealsIsLoading}>
        <p>Loading Meals...</p>
      </div>
    }

    if (httpError){
      return <div className={classes.mealsError}>
        <p>{httpError}</p>
      </div>
    }

  const mealsList= meals.map(meal=> <MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price} />)

  return <section className={classes.meals}>
    <Card>
    <ul>
      {mealsList}
    </ul>
    </Card>
  </section>
}

export default AvailableMeals;
