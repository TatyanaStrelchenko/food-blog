import { Header } from "@/app/components/header";
import { Footer } from '@/app/components/footer';
import MealsList from "@/app/components/mealsList";
import SignInPage from "@/app/[locale]/auth/signin/page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { fetchMeals } from "@/app/api/fetchMeal";

export async function generateStaticParams() {
   const meals = await fetchMeals();

  return meals?.map((meal: { idMeal: string }) => ({ id: meal.idMeal }));
}

export default async function Home() {

  // const response = await fetch("http://localhost:3000/api/meals");
  const meals = await fetchMeals();

  const session = await getServerSession(authOptions);

  return (
    session ? <div className="bg-grey-500">
      <Header />
      <main className="flex p-20 flex-col gap-8 row-start-2 items-center sm:items-start">
      <MealsList meals={meals} /> 
      </main>
      <Footer />
      </div> : <SignInPage />
  )
}