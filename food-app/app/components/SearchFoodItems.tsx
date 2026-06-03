"use client";

type Props = {
  search: string;
  setSearch: (val: string) => void;
};

export default function SearchFoodItems({ search, setSearch }: Props) {
  return (
    <>
      <h1>Search Food Items</h1>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
