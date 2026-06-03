import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.foodItem.createMany({
    data: [
      { name: "Margherita Pizza",  price: 250, category: "veg",     description: "Classic tomato and mozzarella pizza" },
      { name: "Pepperoni Pizza",   price: 320, category: "non-veg", description: "Spicy pepperoni with cheese" },
      { name: "Veg Burger",        price: 120, category: "veg",     description: "Crispy veggie patty with lettuce" },
      { name: "Chicken Burger",    price: 180, category: "non-veg", description: "Grilled chicken with sauce" },
      { name: "Paneer Wrap",       price: 150, category: "veg",     description: "Spiced paneer in a soft wrap" },
      { name: "Chicken Wrap",      price: 200, category: "non-veg", description: "Grilled chicken in a tortilla wrap" },
      { name: "French Fries",      price: 80,  category: "veg",     description: "Crispy golden salted fries" },
      { name: "Pasta Arrabbiata",  price: 200, category: "veg",     description: "Penne in spicy tomato sauce" },
      { name: "Cold Coffee",       price: 100, category: "veg",     description: "Chilled blended coffee with milk" },
      { name: "Mango Lassi",       price: 90,  category: "veg",     description: "Sweet mango yogurt drink" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seeded food items");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
