"use client";

import { useState, useEffect } from "react";
// import { logout } from "../action/auth";

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

export default function CartPage() {
  const [cart, setCart] = useState<FoodItem[]>([]);
  const [cartKey, setCartKey] = useState("");

  useEffect(() => {
    const email = getUserEmail();
    if (!email) {
      window.location.href = "/login";
      return;
    }
    const key = `cart_${email}`;
    setCartKey(key);
    setCart(JSON.parse(localStorage.getItem(key) ?? "[]"));
  }, []);

  function removeItem(index: number) {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem(cartKey, JSON.stringify(updated));
  }

  function clearCart() {
    setCart([]);
    localStorage.removeItem(cartKey);
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h2>{item.name}</h2>
                <p>Price: Rs. {Number(item.price).toFixed(2)}</p>
                <p>Category: {item.category}</p>
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: Rs. {total.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </>
  );
}
