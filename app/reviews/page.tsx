import { fetchPropertyReviewsByUser } from "@/lib/actions/fetchReviewsByUser";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import BreadCrumbs from "@/components/BreadCrumb/BreadCrumbs";

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default async function ReviewsPage() {
  const reviews = await fetchPropertyReviewsByUser();

  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">No Reviews Yet</h2>
        <p className="text-gray-600">You haven't posted any reviews.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-2 mb-2">
      <BreadCrumbs names={["My Reviews"]} />
      <h1 className="text-2xl font-bold mb-2 mt-2">My Reviews</h1>
      <p className="text-gray-500 text-sm mb-6">
        View and manage your reviews.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => {
          const { id, rating, comment, car } = review;
          const { name, images } = car;

          return (
            <div key={id} className="bg-white rounded-lg shadow-md p-4">
              {/* Car Image */}
              <div className="relative w-full h-48 mb-4">
                {images && images.length > 0 ? (
                  <Image
                    src={images[0]} // Assuming images[0] contains the first image URL
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-lg">
                    <span className="text-gray-400">No Image Available</span>
                  </div>
                )}
              </div>

              {/* Car Name */}
              <h2 className="text-lg font-semibold mb-2">{name}</h2>

              {/* Rating */}
              <StarRating rating={rating} />

              {/* Comment */}
              <p className="mt-2 text-gray-700">{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
