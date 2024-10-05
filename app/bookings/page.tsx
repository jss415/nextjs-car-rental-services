import { fetchBookingsByUser } from "@/lib/actions/fetchBookingsByUser";
import Image from "next/image"; // Import Next.js image component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatDate, formatCurrency } from "@/utils/format";
import EmptyList from "@/components/Home/EmptyList";

export default async function BookingsPage() {
  const bookings = await fetchBookingsByUser();

  if (!bookings || bookings.length === 0) {
    return <EmptyList />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Your Bookings</h1>
      <p className="text-gray-500 text-sm mb-12">
        View and manage your car rental bookings.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <Card key={booking.id} className="w-full">
            <CardHeader>
              <CardTitle>{booking.car.name}</CardTitle>
              <CardDescription>{booking.car.location}</CardDescription>
            </CardHeader>

            <CardContent>
              {booking.car.images && booking.car.images.length > 0 && (
                <Image
                  src={booking.car.images[0]} // Display the first image from the array
                  alt={booking.car.name}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
              )}
              <div className="flex justify-between items-center mb-4 mt-4">
                <Badge variant="outline">{booking.car.category}</Badge>
                <span className="font-semibold">
                  {formatCurrency(booking.car.price)}/day
                </span>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Check-in:</span>{" "}
                  {formatDate(booking.checkIn)}
                </p>
                <p>
                  <span className="font-semibold">Check-out:</span>{" "}
                  {formatDate(booking.checkOut)}
                </p>
                <p>
                  <span className="font-semibold">Total days:</span>{" "}
                  {booking.totalDays}
                </p>
              </div>
            </CardContent>
            <Separator className="my-4" />
            <CardFooter className="justify-between">
              <span className="text-lg font-bold">
                Total: {formatCurrency(booking.orderTotal)}
              </span>
              <span className="text-sm text-gray-500">
                Booked on {formatDate(booking.createdAt)}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
