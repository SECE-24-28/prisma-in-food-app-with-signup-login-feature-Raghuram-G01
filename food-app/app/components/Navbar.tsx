import Link from "next/link";
import { logout } from "../action/auth";

export default function Navbar() {
  return (
    <nav>
      <h2>Food Ordering System</h2>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <br/>
          <form action={logout}>
            <button type="submit">Logout</button>
          </form>
      </ul>

      <hr />
    </nav>
  );
}
