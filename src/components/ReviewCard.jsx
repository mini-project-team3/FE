import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ReviewCard = (review, id) => {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <Card
      className="d-flex flex-column align-items-center my-2"
      key={id}
      bg="dark"
      text="white"
      style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
      onClick={(id) => goToDetailPage(id)}
    >
      <Card.Header>{review.title}</Card.Header>
      <Card.Body>
        <Card.Title>샬라샬라</Card.Title>
        <Card.Text>{review.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
