import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// 🔹 Fetch All Meals (for Static Page Generation)
export const fetchMeals = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/search.php?s=`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
};

// 🔹 Fetch a Single Meal by ID
export const fetchMealById = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    return data.meals?.[0] || null;
  } catch (error) {
    console.error(`Error fetching meal with ID ${id}:`, error);
    return null;
  }
};
