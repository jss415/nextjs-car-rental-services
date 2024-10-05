import { fetchCars } from "@/lib/actions/fetchCars";
import EmptyList from "./EmptyList";
import CarsList from "./CarsList";
import { CarsCardProps } from "@/utils/types";

export default async function CarsContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const cars: CarsCardProps[] = await fetchCars({
    category,
    search,
  });

  if (cars.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    );
  }

  return <CarsList cars={cars} />;
}
