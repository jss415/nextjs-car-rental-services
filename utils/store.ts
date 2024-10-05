import { create } from "zustand";
import { Booking } from "./types";
import { DateRange } from "react-day-picker";

type PropertyState = {
  carId: string;
  price: number;
  bookings: Booking[];
  range: DateRange | undefined;
};

// Create the store
export const useCar = create<PropertyState>(() => {
  return {
    carId: "",
    price: 0,
    bookings: [],
    range: undefined,
  };
});
