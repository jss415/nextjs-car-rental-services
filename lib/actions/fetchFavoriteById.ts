import db from "@/utils/db";
import { getAuthUser } from "../auth/getAuthUser";

export const fetchFavoriteById = async ({ carId }: { carId: string }) => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      carId,
      userId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};
