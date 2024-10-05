import { CarsCardProps } from "@/utils/types";
import CarCard from "./CarCard";

export default function CarsList({ cars }: { cars: CarsCardProps[] }) {
  return (
    <section className="mt-8 gap-8 grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
      {cars.map((car) => {
        return <CarCard key={car.id} car={car} />;
      })}
    </section>
  );
}
