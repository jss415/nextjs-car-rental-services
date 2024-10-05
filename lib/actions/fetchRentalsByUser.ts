"use server";

import db from "@/utils/db";
import { getAuthUser } from "../auth/getAuthUser";

export const fetchRentalsByUser = async () => {
  const user = await getAuthUser();
  const rentals = await db.car.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      name: true,
      price: true,
    },
  });

  const rentalsWithBookingSums = await Promise.all(
    rentals.map(async (rental) => {
      const totalNightsSum = await db.booking.aggregate({
        where: {
          carId: rental.id,
        },
        _sum: {
          totalDays: true,
        },
      });

      const orderTotalSum = await db.booking.aggregate({
        where: {
          carId: rental.id,
        },
        _sum: {
          orderTotal: true,
        },
      });

      return {
        ...rental,
        totalDaysSum: totalNightsSum._sum.totalDays,
        orderTotalSum: orderTotalSum._sum.orderTotal,
      };
    })
  );

  return rentalsWithBookingSums;
};
