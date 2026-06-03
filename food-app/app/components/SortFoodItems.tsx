"use client";

type Props = {
  order: string;
  setOrder: (val: string) => void;
};

export default function SortFoodItems({ order, setOrder }: Props) {
  return (
    <>
      <h1>Sort Food Items</h1>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="default">Default</option>
        <option value="low-to-high">Low–High</option>
        <option value="high-to-low">High–Low</option>
      </select>
    </>
  );
}
