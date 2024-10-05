import { categories } from "@/utils/categories";
import { FaDoorOpen, FaUsers } from "react-icons/fa";

interface CarInfoGridProps {
  category: string;
  doors: number;
  passengers: number;
}

export default function CarInfoGrid({
  category,
  doors,
  passengers,
}: CarInfoGridProps) {
  const categoryInfo = categories.find(
    (cat) => cat.label === category.toLowerCase()
  );
  const CategoryIcon = categoryInfo?.icon;

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* First row: Category and Doors */}
      <div className="flex items-center space-x-2">
        {CategoryIcon ? (
          <>
            <CategoryIcon className="text-2xl" />
            <span className="capitalize">{categoryInfo.label}</span>
          </>
        ) : (
          <span>Unknown Category</span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <FaDoorOpen className="text-2xl" />
        <span>{doors} Doors</span>
      </div>

      {/* Second row: Passengers */}
      <div className="flex items-center space-x-2">
        <FaUsers className="text-2xl" />
        <span>{passengers} Passengers</span>
      </div>
    </div>
  );
}
