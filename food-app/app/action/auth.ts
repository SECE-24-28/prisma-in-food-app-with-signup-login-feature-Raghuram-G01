"use server";

import { prisma } from "../lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { success: false, message: "Email already registered" };
  }

  await prisma.user.create({ data: { username, email, password } });

  return { success: true, message: "Account created successfully" };
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findFirst({ where: { email, password } });

  if (!user) {
    return { success: false, message: "Invalid email or password" };
  }

  const cookieStore = await cookies();
  cookieStore.set("user", JSON.stringify({ id: user.id, email: user.email, username: user.username }), {
    path: "/",
  });

  redirect("/");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("user");
  redirect("/login");
}
