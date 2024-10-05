"use server";

import db from "@/utils/db";
import { getAuthUser } from "../auth/getAuthUser";
import { createReviewSchema } from "../schemas/reviews";

export async function createCarReviewAction(
  prevState: any,
  formData: FormData
) {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);

    // Validate the form data using the schema
    const validatedFields = createReviewSchema.parse(rawData);

    // Create a new review in the database
    await db.review.create({
      data: {
        ...validatedFields,
        userId: user.id,
      },
    });

    return { message: "Review submitted successfully" };
  } catch (error) {
    console.error("Error submitting review:", error);
    return { message: "Something went wrong" };
  }
}
