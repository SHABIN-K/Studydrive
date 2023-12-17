import * as z from "zod";

const Post = z.object({
  postTitle: z
    .string({
      required_error: "Title is required.",
      invalid_type_error: "Title must be a string.",
    })
    .min(5, { message: "Title must be at least 5 characters long." })
    .max(50, {
      message: "Title can only be up to 50 characters long.",
    }),
  postDesc: z
    .string({
      required_error: "Description is required.",
      invalid_type_error: "Description must be a string.",
    })
    .min(10, { message: "Description must be at least 10 characters long." })
    .max(500, {
      message: "Description can only be up to 500 characters long.",
    }),
});

export const PostValidation = {
  addPost: Post.required({
    postTitle: true,
    postDesc: true,
  }),
};
