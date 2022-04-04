import React from "react";
import { CardGroup } from "react-bootstrap";
import Cards from "../Cards/Cards";

const CustomerReview = ({ reviews, path, img }) => {
  return (
    <CardGroup>
      {reviews.map((review, index) =>
        path ? (
          <Cards rev={review}></Cards>
        ) : index < 3 ? (
          <Cards rev={review}></Cards>
        ) : (
          ""
        )
      )}
    </CardGroup>
  );
};

export default CustomerReview;
