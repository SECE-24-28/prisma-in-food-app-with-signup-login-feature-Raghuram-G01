"use server";

import { prisma } from "../lib/prisma";

export async function storeFood(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;

  await prisma.foodItem.create({ data: { name, price, category, description } });

  return { success: true, message: "Food added successfully" };
}
