import { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { TbArrowsDownUp } from "react-icons/tb";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getReviews } from "../api/reivewCards";
import LoadingSpinner from "../style/LoadingSpinner";

// 팀장님 여깁뉘다!!!!!!!!!!!!!!!!!!

function Main() {
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery("reviews", getReviews);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError) {
    return console.log("errorㅠㅠㅠㅠㅠㅠ", error);
  }
  

  const handleSort = () => {
    data.reverse();
  };

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <TbArrowsDownUp style={{ fontSize: "40px", cursor: "pointer" }} variant="dark" onClick={handleSort} />
      <br />
      {data.map((review, id) => (
        <Card
          key={id}
          bg="dark"
          text="white"
          style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
          className="my-2"
          onClick={() => goToDetailPage(id)}
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
