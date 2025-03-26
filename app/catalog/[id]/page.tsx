
import { fetchMealById, fetchMeals } from '@/app/api/fetchMeal';
import Link from 'next/link';

// Generate Static Paths for Meal Pages
export async function generateStaticParams() {
  const meals = await fetchMeals();
  return meals.map((meal: { idMeal: string }) => ({ id: meal.idMeal }));
}

const MealDetailPage = async ({ params }: { params: { id: string } }) => {
  const meal = await fetchMealById(params.id);

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
