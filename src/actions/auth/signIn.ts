"use server";

import { z } from "zod";
import { signInSchema } from "@/schemas/auth/signInSchema";

export const signIn = (values: z.infer<typeof signInSchema>) => {
  console.log(values);
};
