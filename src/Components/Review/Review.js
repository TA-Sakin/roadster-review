import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import useReview from "../Hooks/useReview";

const Review = () => {
  const [reviews, setReview] = useReview();
  return (
    <div>
      {reviews.map((review) => (
        <CustomerReview review={review}></CustomerReview>
      ))}
    </div>
  );
};

export default Review;
