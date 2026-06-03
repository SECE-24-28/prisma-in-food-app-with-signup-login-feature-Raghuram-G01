"use client";

import { useFoodFilter, FoodItem } from "./useFoodFilter";
import SearchFoodItems from "./SearchFoodItems";
import FilterFoodItems from "./FilterFoodItems";
import SortFoodItems from "./SortFoodItems";
import FoodList from "./FoodList";

export default function FoodPage({ items }: { items: FoodItem[] }) {
  const { sorted, search, setSearch, category, setCategory, order, setOrder } = useFoodFilter(items);

  return (
    <>
      <SearchFoodItems search={search} setSearch={setSearch} />
      <FilterFoodItems category={category} setCategory={setCategory} />
      <SortFoodItems order={order} setOrder={setOrder} />
      <FoodList items={sorted} />
    </>
  );
}
