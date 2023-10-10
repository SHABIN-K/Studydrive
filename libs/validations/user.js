const User = z.object({
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(30, { message: "Email can be at most 30 characters long." }),
  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password must be a string.",
    })
    .min(5, { message: "Password must be at least 5 characters long." })
    .max(100, { message: "Password can be at most 100 characters long." })
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,100}$/,
      "Password must contain at least one uppercase letter, one number, and one special character."
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

export const UserValidation = User.required({
  email: true,
  password: true,
  name: true,
  phoneNumber: true,
});
