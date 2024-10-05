import db from "@/utils/db";

export async function fetchCarReviews(carId: string) {
  const reviews = await db.review.findMany({
    where: {
      carId,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      user: {
        select: {
          firstName: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return reviews;
}
