import { fetchCarReviews } from "@/lib/actions/fetchCarReviews";
import CarTitle from "../Cars/CarTitle";
import ReviewCard from "./ReviewCard";

async function CarReviews({ carId }: { carId: string }) {
  const reviews = await fetchCarReviews(carId);
  if (reviews.length < 1) return null;
  return (
    <div className="mt-8">
      <CarTitle text="Reviews" />
      <div className="mt-4 ">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { firstName, profileImage } = review.user;
          const reviewInfo = {
            comment,
            rating,
            name: firstName,
            image: profileImage,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}
export default CarReviews;
