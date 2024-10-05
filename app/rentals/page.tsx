import { fetchRentalsByUser } from "@/lib/actions/fetchRentalsByUser";
import EmptyList from "@/components/Home/EmptyList";
import Link from "next/link";
import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function RentalsPage() {
  const rentals = await fetchRentalsByUser();

  if (rentals.length === 0) {
    return (
      <EmptyList
        heading="No rentals to display."
        message="Don't hesitate to create a rental."
      />
    );
  }

  // Calculate total days booked and total income
  const totalDays = rentals.reduce(
    (sum, rental) => sum + (rental.totalDaysSum || 0),
    0
  );
  const totalIncome = rentals.reduce(
    (sum, rental) => sum + (rental.orderTotalSum || 0),
    0
  );

  return (
    <div className="mt-6 mb-16">
      <h1 className="text-3xl font-bold mb-2">Your Car Rentals</h1>
      <p className="text-gray-500 text-sm mb-12">
        View and manage your car rentals.
      </p>
      <h4 className="mb-4 text-xl font-semibold">
        Active Rentals: {rentals.length}
      </h4>

      {/* Simple and Clean Totals Section */}
      <div className="mb-8 p-4 bg-gray-100 rounded-md shadow-sm">
        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-xl font-semibold">{totalDays}</p>
            <p className="text-sm text-gray-600">Total Days Booked</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">
              {formatCurrency(totalIncome)}
            </p>
            <p className="text-sm text-gray-600">Total Income</p>
          </div>
        </div>
      </div>

      <Table>
        <TableCaption>A list of all car rentals.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Car Name</TableHead>
            <TableHead>Daily Rate</TableHead>
            <TableHead>Days Booked</TableHead>
            <TableHead>Total Income</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map((rental) => {
            const { id: carId, name, price } = rental;
            const { totalDaysSum, orderTotalSum } = rental;
            return (
              <TableRow key={carId}>
                <TableCell>
                  <Link
                    href={`/cars/${carId}`}
                    className="underline text-muted-foreground tracking-wide"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell>{totalDaysSum || 0}</TableCell>
                <TableCell>{formatCurrency(orderTotalSum)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default RentalsPage;
