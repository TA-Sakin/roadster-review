import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import useReview from "../Hooks/useReview";

const Review = () => {
  const [reviews, setReview] = useReview();
  return (
    <div className="text-center">
      <CustomerReview reviews={reviews} path="true"></CustomerReview>
    </div>
  );
};

export default Review;
