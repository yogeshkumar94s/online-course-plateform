"use server";

import { signUpSchema } from "@/schemas/auth/signUpSchema";
import { z } from "zod";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/lib/utils/userData";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, username, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  await db.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created successfully!" };
};
