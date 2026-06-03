"use client";

type FoodItem = { id: number; name: string; price: number; category: string };

function getUserEmail(): string | null {
  const match = document.cookie.split("; ").find((c) => c.startsWith("user="));
  if (!match) return null;
  try {
    const value = match.substring("user=".length);
    return JSON.parse(decodeURIComponent(value)).email;
  } catch {
    return null;
  }
}

export default function AddToCartButton({ item }: { item: FoodItem }) {
  function addToCart() {
    const email = getUserEmail();
    if (!email) {
      alert("Please login to add items to cart.");
      window.location.href = "/login";
      return;
    }
    const key = `cart_${email}`;
    const cart: FoodItem[] = JSON.parse(localStorage.getItem(key) ?? "[]");
    cart.push(item);
    localStorage.setItem(key, JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  }

  return <button onClick={addToCart}>Add to Cart</button>;
}
