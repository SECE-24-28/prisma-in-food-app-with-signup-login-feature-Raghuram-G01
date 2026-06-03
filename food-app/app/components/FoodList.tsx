"use client";

import AddToCartButton from "./AddToCartButton";

type FoodItem = { 
  id: number,
  name: string,
  price: number,
  category: string,
  description?: string
};

export default function FoodList({ items }: { items: FoodItem[] }) {
  return (
    <>
      <h1>All Food Items</h1>
      {items.length === 0 ? (
        <p>No food items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>Price: Rs. {item.price}</p>
              <p>Category: {item.category}</p>
              <p>Description: {item.description}</p>
              <AddToCartButton item={item} /><br></br>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
