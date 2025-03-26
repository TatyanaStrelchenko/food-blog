"use client";

import Image from "next/image";
import Link from "next/link";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

interface MealsListProps {
  meals: Meal[];
}

const MealsList = ({ meals }: MealsListProps) => {
  
  return (
    <div className="main">
      <h2 className="text-2xl font-bold text-center">Meal List</h2>

      {meals.length === 0  ? (
      <p className="text-center mt-4">Loading...</p>
      ) : ( 
          <div className="grid grid-cols-4 gap-10 mt-4">
              {meals?.map((meal) => (
                  <Link href={`/catalog/${meal.idMeal}`} key={meal.idMeal}>
                    <div className="relative pt-40">
                        <Image
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="rounded-full absolute top-0 left-0 p-4"
                            width={250}
                            height={250}
                        />
                        <div className="border p-4 rounded-lg shadow-lg pt-20">
                          <h3 className="text-lg font-semibold uppercase">{meal.strMeal}</h3>
                          <p className="mt-2 text-sm">{meal.strInstructions.substring(0, 200)}...</p>
                        </div>
                    </div>
                  </Link>
              ))}
              </div>
            )}
          </div>
        );
      };
  
  export default MealsList;
  