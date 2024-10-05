"use server";

import { calculateTotals } from "@/utils/calculateTotals";
import { getAuthUser } from "../auth/getAuthUser";
import db from "@/utils/db";
import { redirect } from "next/navigation";

export const createBookingAction = async (prevState: {
  carId: string;
  checkIn: Date;
  checkOut: Date;
}) => {
  const user = await getAuthUser();

  const { carId, checkIn, checkOut } = prevState;
  const car = await db.car.findUnique({
    where: { id: carId },
    select: { price: true },
  });
  if (!car) {
    return { message: "Property not found" };
  }
  const { orderTotal, totalDays } = calculateTotals({
    checkIn,
    checkOut,
    price: car.price,
  });

  try {
    const booking = await db.booking.create({
      data: {
        checkIn,
        checkOut,
        orderTotal,
        totalDays,
        userId: user.id,
        carId,
      },
    });
  } catch (error) {
    return { message: "Something went wrong" };
  }
  redirect("/bookings");
};
