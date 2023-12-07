import * as z from "zod";

const User = z.object({
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email can be at most 100 characters long." }),
  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password must be a string.",
    })
    .min(5, { message: "Password must be at least 5 characters long." })
    .max(200, { message: "Password can be at most 200 characters long." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,200}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number. Only alphanumeric characters are allowed."
    ),
  name: z
    .string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be a string.",
    })
    .min(3, { message: "Name must be at least 4 characters long." })
    .max(25, { message: "Name can be at most 30 characters long." }),
  phoneNumber: z
    .string({
      required_error: "Phone number is required.",
      invalid_type_error: "Phone number must be a string.",
    })
    .refine((phoneNumber) => /^(\+91)[0-9]{10}$/.test(phoneNumber), {
      message: "Phone number must start with +91 and be 10 digits long.",
    }),
});

const UserProfileUpdate = User.omit({ password: true });
const UserLoginValidation = User.omit({ name: true, phoneNumber: true });
const passwordValidation = User.omit({
  name: true,
  phoneNumber: true,
  email: true,
});

export const UserValidation = {
  registration: User.required({
    email: true,
    name: true,
    phoneNumber: true,
  }),
  profileUpdate: UserProfileUpdate.required({
    email: true,
    name: true,
    phoneNumber: true,
  }),
  UserLogin: UserLoginValidation.required({
    email: true,
    password: true,
  }),
  changepwd: passwordValidation.required({ password: true }),
};
