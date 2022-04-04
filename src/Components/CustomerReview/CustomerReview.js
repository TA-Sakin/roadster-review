import React from "react";

const CustomerReview = ({ review }) => {
  return (
    <div className="card container">
      <h3>{review.name}</h3>
      <h4>{review.title}</h4>
      <h5>Rating: {review.rating}</h5>
      <p>Review: {review.review}</p>
    </div>
  );
};

export default CustomerReview;
