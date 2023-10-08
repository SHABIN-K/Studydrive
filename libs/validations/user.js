import * as z from "zod";

export const UserValidation = z.object({
  email: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(30, { message: "Maximum 30 characters." }),
  username: z
    .string()
    .min(4, { message: "Minimum 4 characters." })
    .max(30, { message: "Maximum 30 characters." }),
  password: z
    .string()
    .min(8, { message: "Minimum 8 characters." })
    .max(1000, { message: "Maximum 1000 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
});
