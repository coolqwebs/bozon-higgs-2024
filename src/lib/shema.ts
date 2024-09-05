import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  // password: z
  //   .string()
  //   .regex(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  //     {
  //       message:
  //         "Password must be at least 8 characters. Contain at least one uppercase letter, one lowercase letter, one number and one special character(!@#$%^&*)",
  //     }
  //   )
  //   .min(8, { message: "Password must be at least 8 characters" }),
  // confirmPassword: z.string(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   path: ["confirmPassword"],
//   message: "Passwords does not match",
// });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z.string(),
  // .min(8, { message: "Password must be at least 8 characters" }),
});
