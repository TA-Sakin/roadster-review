import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css";
const Cards = ({ rev }) => {
  const { name, title, img, review, date, rating } = rev;
  return (
    <div style={{ width: "21rem" }} className="mx-5 my-5">
      <Card className="border-0">
        <Card.Img
          variant="top"
          className="rounded-circle mx-auto"
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
        {/* <Card.Footer> */}
        {/* </Card.Footer> */}
      </Card>
    </div>
  );
};

export default Cards;
