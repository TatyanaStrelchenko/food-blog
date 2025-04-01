import { NextResponse } from "next/server";
import { fetchMeals } from "@/app/api/fetchMeal"; 

export async function GET() {
  try {
    const meals = await fetchMeals();
    return NextResponse.json(meals);
  } catch {
    return NextResponse.json({ error: "Failed to fetch meals" }, { status: 500 });
  }
}
