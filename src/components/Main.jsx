import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getRivews } from "../api/reivewCards";
import LoadingSpinner from "../style/LoadingSpinner";
import styled from "styled-components";

const SortButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.4rem 1.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

function Main() {
  const navigate = useNavigate();


  const [sortBy, setSortBy] = useState("createdAt");

  // useQuery hooks의 쿼리 파라미터를 동적으로 변경하기 위해, 쿼리 객체에 변수를 넣어줍니다.
  const { isLoading, isError, data, error } = useQuery(["reviews", { criteria: sortBy }], getRivews);
  const reviewList = data && data.data;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return console.log("❌❌❌", error);
  }

  const handleSortByLike = () => {
    setSortBy("likeCount");
  };

  const handleSortByCreatedAt = () => {
    setSortBy("createdAt");
  };

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center">
        <div className="d-flex w-100 justify-content-center">
          <SortButton onClick={handleSortByLike}>Sort by Likes</SortButton>
          <SortButton onClick={handleSortByCreatedAt}>Sort by Latest</SortButton>
        </div>
      </div>

      <br />

      {reviewList.map((review) => (
        <Card
          key={review.id}
          bg="dark"
          text="white"
          style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
          className="my-2"
          onClick={() => goToDetailPage(review.id)}
        >
          <Card.Header>{item.title}</Card.Header>
          <Card.Body>
            <Card.Title>{review.nickname}</Card.Title>
            <Card.Text>{review.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Main;
