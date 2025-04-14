
import { fetchMealById, fetchMeals } from '@/app/api/fetchMeal';
import Image from 'next/image';
import Link from 'next/link';

// Generate Static Paths for Meal Pages
export async function generateStaticParams() {
  const meals = await fetchMeals();
  return meals.map((meal: { idMeal: string }) => ({ id: meal.idMeal }));
}

const MealDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;

  const meal = await fetchMealById(id);

  if (!meal) {
    return <p className="text-center mt-10">Meal not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
    <Link href='/'>&#8592; Back</Link>
    <div className="grid grid-rows-2 gap-4 p-2 rounded-lg shadow-lg text-center">
      <div>
        <h1 className="text-lg font-semibold uppercase">{meal.strMeal}</h1>
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="m-auto p-4"
          width={250}
          height={250}/>      
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
