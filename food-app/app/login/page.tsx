"use client";

import { login } from "../action/auth";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    if (result && !result.success) setError(result.message);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="Enter your email" required />
        <br /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" placeholder="Enter password" required />
        <br /><br />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Do not have an account? <Link href="/signup">Sign Up</Link></p>
    </div>
  );
}

