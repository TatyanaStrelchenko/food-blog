
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// 🔹 Function to fetch a list of meals
export const fetchMeals = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/search.php?s=`, {
      next: { revalidate: 3600 }, // ✅ ISR (revalidate data every hour)
    });

    if (!res.ok) throw new Error("Error fetching data");

    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals list:", error);
    return [];
  }
};

// 🔹 Function to fetch meal details by ID
export const fetchMealById = async (id: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`, {
      next: { revalidate: 3600 }, // ✅ ISR (auto-refresh data)
    });

    if (!res.ok) throw new Error(`Error fetching meal ${id}`);

    const data = await res.json();
    return data.meals?.[0] || null;
  } catch (error) {
    console.error(`Error fetching meal ${id}:`, error);
    return null;
  }
};


