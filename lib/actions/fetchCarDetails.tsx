import db from "@/utils/db";

export const fetchCarDetails = (id: string) => {
  return db.car.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      bookings: {
        select: {
          checkIn: true,
          checkOut: true,
        },
      },
    },
  });
};
