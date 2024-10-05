"use server";

import db from "@/utils/db";
import { getAuthUser } from "../auth/getAuthUser";

export const fetchPropertyReviewsByUser = async () => {
  const user = await getAuthUser();
  const reviews = await db.review.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      car: {
        select: {
          name: true,
          images: true,
        },
      },
    },
  });
  return reviews;
};
