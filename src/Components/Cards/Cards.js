import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ rev }) => {
  const { name, title, img, review, date, rating } = rev;
  return (
    <Card>
      <Card.Img variant="top" className="rounded-circle w-25" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{review}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated on {date}</small>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
