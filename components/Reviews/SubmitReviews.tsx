import { Card } from "@/components/ui/card";

import FormContainer from "../Form/FormContainer";
import RatingInput from "../Form/RatingInput";
import InputTextArea from "../Form/InputTextArea";
import SubmitButton from "../Form/SubmitButton";
import { createCarReviewAction } from "@/lib/actions/createCarReviewAction";
import CarTitle from "../Cars/CarTitle";
function SubmitReview({ carId }: { carId: string }) {
  return (
    <div className="mt-12">
      <CarTitle text="Leave a review" />
      <FormContainer action={createCarReviewAction}>
        <input type="hidden" name="carId" value={carId} />
        <RatingInput name="rating" />
        <InputTextArea
          name="comment"
          labelText="Comment"
          defaultValue="Enter your comment here (must be greater than 10 and less than 1000 characters)"
        />
        <SubmitButton text="Submit" className="mt-4" />
      </FormContainer>
    </div>
  );
}

export default SubmitReview;
