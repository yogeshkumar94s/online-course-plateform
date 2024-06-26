import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name should be at least 2 characters" })
    .max(16, { message: "Name should be less than 16 characters" }),
  username: z
    .string()
    .min(2, { message: "Username should be at least 2 characters" })
    .max(16, { message: "Username should be less than 16 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
