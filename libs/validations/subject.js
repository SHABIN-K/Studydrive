import * as z from "zod";

const Subject = z.object({
  subjectCode: z
    .string({
      required_error: "Subject Code is required.",
      invalid_type_error: "Subject Code must be a string.",
    })
    .min(2, { message: "Subject Code must be at least 2 characters long." })
    .max(20, {
      message: "Subject Code can only be up to 20 characters long.",
    }),
  subjectName: z
    .string({
      required_error: "Subject Name is required.",
      invalid_type_error: "Subject Name must be a string.",
    })
    .min(5, { message: "Subject Name must be at least 5 characters long." })
    .max(150, {
      message: "Subject Name can only be up to 150 characters long..",
    }),
  courseName: z
    .string({
      required_error: "course is required.",
      invalid_type_error: "course name must be a string.",
    })
    .max(20, {
      message: "course name can only be up to 20 characters long.",
    }),
  userSemester: z
    .string({
      required_error: "semester is required.",
      invalid_type_error: "semester must be a string.",
    })
    .max(10, {
      message: "semester can only be up to 10 characters long..",
    }),
});

export const SubjectValidation = {
  addSubject: Subject.required({
    subjectCode: true,
    subjectName: true,
    courseName: true,
    userSemester: true,
  }),
};
