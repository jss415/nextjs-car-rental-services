import { Amenity } from "@/utils/amenities";
import { LuFolderCheck } from "react-icons/lu";
import CarTitle from "./CarTitle";

export default function CarAmenities({ amenities }: { amenities: string }) {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);

  if (noAmenities) {
    return null;
  }
  return (
    <div className="mt-12">
      <CarTitle text="Features" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) {
            return null;
          }
          return (
            <div key={amenity.name} className="flex items-center gap-x-4 mb-2 ">
              <LuFolderCheck className="h-6 w-6" />
              <span className="font-light text-sm capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
