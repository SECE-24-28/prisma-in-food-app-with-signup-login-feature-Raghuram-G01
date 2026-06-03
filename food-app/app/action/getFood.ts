"use server";

import { prisma } from "../lib/prisma";

export async function getFood() {
  return await prisma.foodItem.findMany({ orderBy: { id: "asc" } });
}
