import { useState } from "react";

export type FoodItem = { id: number; name: string; price: number; category: string; description?: string };

export function useFoodFilter(food: FoodItem[]) {
  const items = food || [];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [order, setOrder] = useState("default");

  let result = items.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    result = result.filter((food) => food.category === category);
  }

  const sorted = [...result];
  if (order === "low-to-high") sorted.sort((a, b) => a.price - b.price);
  else if (order === "high-to-low") sorted.sort((a, b) => b.price - a.price);

  return { sorted, search, setSearch, category, setCategory, order, setOrder };
}
