import * as z from "zod";

const User = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email address" })
    .min(5, { message: "Minimum 5 characters." })
    .max(30, { message: "Maximum 30 characters." }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(5, { message: "Minimum 8 characters." })
    .max(1000, { message: "Maximum 1000 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Minimum 4 characters." })
    .max(25, { message: "Maximum 30 characters." }),
  phoneNumber: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number must be a string",
    })
    .refine((phoneNumber) => /^(\+91)[0-9]{10}$/.test(phoneNumber), {
      message: "Phone number must start with +91 and be 10 digits long.",
    }),
});

export const UserValidation = User.required({
  email: true,
  password: true,
  name: true,
  phoneNumber: true,
});
