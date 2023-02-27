import { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { TbArrowsDownUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    {
      title: "리뷰제목1",
      content: "팀장님 너무해1",
    },
    {
      title: "리뷰제목2",
      content: "팀장님 너무해2",
    },
    {
      title: "리뷰제목3",
      content: "팀장님 너무해3",
    },
  ]);

  const handleSort = () => {
    setReviews([...reviews].reverse());
  };

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <TbArrowsDownUp
        style={{ fontSize: "40px", cursor: "pointer" }}
        variant="dark"
        onClick={handleSort}
      />
      <br />
      {reviews.map((review, id) => (
        <Card
          key={id}
          bg="dark"
          text="white"
          style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
          className="my-2"
          onClick={(id) => goToDetailPage(id)}
        >
          <Card.Header>{review.title}</Card.Header>
          <Card.Body>
            <Card.Title>샬라샬라</Card.Title>
            <Card.Text>{review.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Main;
