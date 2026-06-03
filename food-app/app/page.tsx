import { getFood } from "./action/getFood";
import FoodPage from "./components/FoodPage";

export default async function Home() {
  const items = await getFood();
  return (
    <main>
      <FoodPage items={items} />
    </main>
  );
}
