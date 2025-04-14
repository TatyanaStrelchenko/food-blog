import { Header } from "@/app/components/header";
import { Footer } from '@/app/components/footer';
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
    <div className="bg-grey-500">
      <Header />
      <main className="flex p-20 flex-col gap-8 row-start-2 items-center sm:items-start">
        <MealsList meals={meals} />
      </main>
    <Footer />
    </div>
  );
}