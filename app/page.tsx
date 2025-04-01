
import { Header } from "@/app/components/header";
import MealsList from "@/app/components/mealsList";


export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/meals"); 
  const meals = await response.json();
  return meals.map((meal: { idMeal: string }) => ({ id: meal.idMeal }));
}

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/meals");
  const meals = await response.json();

  return (
    <main className="bg-grey-500">
      <Header />
      <main className="flex p-20 flex-col gap-8 row-start-2 items-center sm:items-start">
        <MealsList meals={meals} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Food blog 2025
      </footer>
    </main>
  );
}
