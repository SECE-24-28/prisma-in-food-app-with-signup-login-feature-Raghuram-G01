"use client";

import { signUp } from "../action/auth";

export default function Signup() {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const result = await signUp(formData);
    if(result.success) {
      e.target.reset();
      alert(result.message);
    } else {
      alert(result.message);
    }

  }

  return (
    <div>
      <h1>Register here</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
        />
        <br /><br />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
        <br /><br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        <br /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}