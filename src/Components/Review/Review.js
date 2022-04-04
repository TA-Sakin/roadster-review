import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import useReview from "../Hooks/useReview";
import "./Review.css";
const Review = () => {
  const [reviews, setReview] = useReview();
  return (
    <div className="text-center">
      <h1 className="mt-5 review-header ">All reviews on Tesla Roadster</h1>
      <CustomerReview reviews={reviews} path="true"></CustomerReview>
    </div>
  );
};

export default Review;
