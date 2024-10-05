"use server";

import db from "@/utils/db";
import { getAuthUser } from "../auth/getAuthUser";

export const fetchBookingsByUser = async () => {
  const user = await getAuthUser();
  const bookings = await db.booking.findMany({
    where: {
      userId: user.id,
    },
    include: {
      car: {
        select: {
          id: true,
          name: true,
          images: true,
          location: true,
          category: true,
          price: true,
        },
      },
    },
    orderBy: {
      checkIn: "desc",
    },
  });
  return bookings;
};
