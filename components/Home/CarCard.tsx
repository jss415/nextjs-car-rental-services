import { CarsCardProps } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { FaStar, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import CarRating from "./CarRating";
import FavoriteToggleButton from "./FavoriteToggleButton";

export default function CarCard({ car }: { car: CarsCardProps }) {
  return (
    <Card key={car.id} className="bg-primary-100 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={car.images[0]}
          alt={car.name}
          layout="fill"
          objectFit="cover"
        />
        <FavoriteToggleButton carId={car.id} />
      </div>
      <Link href={`/cars/${car.id}`}>
        <CardContent className="p-4 flex-grow">
          <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
          <CarRating carId={car.id} inPage={false} />
          <div className="flex items-center text-gray-600 mb-2">
            <FaMapMarkerAlt className="h-4 w-4 mr-1" />
            <span className="text-sm">{car.location}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center border-t">
          <div>
            <span className="text-2xl font-bold">${car.price}</span>
            <span className="text-sm text-gray-600">/day</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
