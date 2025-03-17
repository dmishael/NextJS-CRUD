import * as z from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "post title must be 3 or more characters long" })
    .max(200, { message: "Post must be 200 or fewer characters long" }),
});

export type PostSchemaType = z.infer<typeof PostSchema>;
