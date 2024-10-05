import * as z from "zod";
import { ZodSchema } from "zod";

export const createReviewSchema = z.object({
  carId: z.string(),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().min(10).max(1000),
});
