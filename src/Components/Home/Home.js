import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tesla from "../../Assets/Image/tesla.png";
import CustomerReview from "../CustomerReview/CustomerReview";
import useReview from "../Hooks/useReview";
import "./Home.css";
const Home = () => {
  const [reviews, setReview] = useReview();
  return (
    <div className="header-section">
      <div className="container header-container">
        <div className="pe-5">
          <h1 className="text-secondary">Tesla Roadster</h1>
          <p>
            The quickest car in the world, with record-setting acceleration,
            range and performance.
          </p>
          <Button variant="outline-secondary">Reserve Now</Button>
        </div>
        <div>
          <img src={Tesla} alt="" />
        </div>
      </div>
      <div className="customer-review">
        <h1>Customer Reviews</h1>
        {reviews.map((review) =>
          reviews.indexOf(review) < 3 ? (
            <CustomerReview review={review}></CustomerReview>
          ) : (
            ""
          )
        )}
        <Button variant="outline-secondary">
          <Link to="/review">View all reviews</Link>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Home;
