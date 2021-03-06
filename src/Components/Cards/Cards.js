import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css";
const Cards = ({ rev }) => {
  const { name, title, img, review, date, rating } = rev;
  return (
    <div className="mx-5 my-4">
      <Card style={{ width: "21rem", minHeight: "28rem" }}>
        <Card.Img
          variant="top"
          className="rounded-circle mx-auto mt-2"
          style={{ width: "5rem", height: "5rem" }}
          src={img}
        />
        <Card.Title>{name}</Card.Title>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {review.length > 200 ? review.slice(0, 200) + "..." : review}
          </Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
          <small className="text-muted">Reviewed on {date}</small>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
