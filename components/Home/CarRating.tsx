import { FaStar } from "react-icons/fa";

export default function CarRating({
  carId,
  inPage,
}: {
  carId: string;
  inPage: boolean;
}) {
  const ratings = 4.7;
  const reviews = 100;

  return (
    <section className="mb-2">
      <div className="flex items-center">
        <FaStar className="h-5 w-5 mr-2" />
        <span className="font-medium">4.5 / 5</span>
      </div>
      <span className="text-sm text-gray-600">7 reviews</span>
    </section>
  );
}
