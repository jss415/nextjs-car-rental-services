import * as z from "zod";
import { ZodSchema } from "zod";

export const carSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  tagline: z
    .string()
    .min(2, {
      message: "tagline must be at least 2 characters.",
    })
    .max(100, {
      message: "tagline must be less than 100 characters.",
    }),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      console.log(wordCount);
      return wordCount >= 5 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),

  passengers: z.coerce.number().int().min(0, {
    message: "passengers amount must be a positive number.",
  }),
  doors: z.coerce.number().int().min(0, {
    message: "doors amount must be a positive number.",
  }),
  amenities: z.string(),
});
