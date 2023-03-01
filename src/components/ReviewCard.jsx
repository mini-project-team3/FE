import Card from "react-bootstrap/Card";

function ReviewCard({ review, onClick }) {
  return (
    <Card
      key={review.id}
      bg="dark"
      text="white"
      style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
      className="my-2"
      onClick={onClick}
    >
      <Card.Header>{review.title}</Card.Header>
      <Card.Body>
        <Card.Title>{review.nickname}</Card.Title>
        <Card.Text>{review.content}</Card.Text>
        <div>{review.createdAt}</div>
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;
