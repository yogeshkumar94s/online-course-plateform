"use server";

import { z } from "zod";
import { registerSchema } from "@/schemas/auth/registerSchema";

export const register = (values: z.infer<typeof registerSchema>) => {
  console.log(values);
};
