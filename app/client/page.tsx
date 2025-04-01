"use client"

import { fetchMealById } from '@/app/api/fetchMeal';
import type { Meal } from '@/app/types/type';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const MealDetailPage =  () => {
    const { id } = useParams();
    const [meal, setMeal] = useState<Meal | null>(null);
    
    useEffect(() => {
        const fetchMeal = async () => {
          const res = await fetchMealById(Array.isArray(id) ? id[0] : id || "");
          const data = await res.json();
          setMeal(data.meals[0]);
        };
    
        fetchMeal();
      }, [id]);

  if (!meal) {
    return <p className="text-center mt-10">Meal not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
    <Link href='/'>Back</Link>
    <div className="grid grid-cols-2 gap-4 p-2 rounded-lg shadow-lg">
      <div>
        <h1 className="text-lg font-semibold uppercase">{meal.strMeal}</h1>
        <img className="h-25" src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div>
      <h2>Instructions</h2>
      <p className="mt-2 text-sm">{meal.strInstructions}</p>
      </div>
    </div>
    </div>
  );
};

export default MealDetailPage;
