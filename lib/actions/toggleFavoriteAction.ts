"use server";

import db from "@/utils/db";
import { getAuthUser } from "../auth/getAuthUser";
import { revalidatePath } from "next/cache";

export const toggleFavoriteAction = async (prevState: {
  carId: string;
  favoriteId: string | null;
  pathname: string;
}) => {
  const user = await getAuthUser();
  const { carId, favoriteId, pathname } = prevState;
  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          carId,
          userId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? "Removed from Faves" : "Added to Faves" };
  } catch (error) {
    return { message: "Something went wrong" };
  }
};
