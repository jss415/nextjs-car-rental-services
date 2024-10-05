"use client";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useCar } from "@/utils/store";

import FormContainer from "../Form/FormContainer";
import SubmitButton from "../Form/SubmitButton";
import { createBookingAction } from "@/lib/actions/createBookingAction";

function ConfirmBooking() {
  const { userId } = useAuth();
  const { carId, range } = useCar((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;
  if (!userId)
    return (
      <SignInButton mode="modal">
        <Button type="button" className="w-full">
          Sign In to Complete Booking
        </Button>
      </SignInButton>
    );

  const createBooking = createBookingAction.bind(null, {
    carId,
    checkIn,
    checkOut,
  });
  return (
    <section>
      <FormContainer action={createBooking}>
        <SubmitButton text="Book now" className="w-full" />
      </FormContainer>
    </section>
  );
}
export default ConfirmBooking;
