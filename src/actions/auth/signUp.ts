"use server";

import { signUpSchema } from "@/schemas/auth/signUpSchema";
import { z } from "zod";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  console.log(values);
};
