import React from "react";
import { CardGroup } from "react-bootstrap";
import Cards from "../Cards/Cards";

const CustomerReview = ({ reviews, path }) => {
  return (
    <div className="container my-5">
      <CardGroup>
        {reviews.map((review, index) =>
          path ? (
            <Cards key={review.id} rev={review}></Cards>
          ) : index < 3 ? (
            <Cards key={review.id} rev={review}></Cards>
          ) : (
            ""
          )
        )}
      </CardGroup>
    </div>
  );
};

export default CustomerReview;
