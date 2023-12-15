import * as z from "zod";

const Post = z.object({
  postTitle: z.string({
    required_error: "Subject Code is required.",
  }),
  postDesc: z.string({
    required_error: "Subject Name is required.",
  }),
});

export const PostValidation = {
  addPost: Post.required({
    postTitle: true,
    postDesc: true,
  }),
};
