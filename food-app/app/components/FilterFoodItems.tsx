"use client";

type Props = {
  category: string;
  setCategory: (val: string) => void;
};

export default function FilterFoodItems({ category, setCategory }: Props) {
  return (
    <>
      <h1>Filter Food Items</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>
      </select>
    </>
  );
}
