import db from "@/utils/db";
import { getAuthUser } from "../auth/getAuthUser";

export const fetchFavoritesByUser = async () => {
  const user = await getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      userId: user.id,
    },
    select: {
      car: {
        select: {
          id: true,
          name: true,
          tagline: true,
          price: true,
          images: true,
          createdAt: true,
        },
      },
    },
  });
  return favorites;
};
