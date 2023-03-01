import { useState } from "react";
// import Card from "react-bootstrap/Card";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getReviews } from "../api/reivewCards";
import LoadingSpinner from "../style/LoadingSpinner";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { goToDetailPage } from "../utils/goToDetailPage";

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

  const [createDateSort, setCreateDateSort] = useState(false);
  const [likeSort, setLikeSort] = useState(false);

  // useQuery hooks의 쿼리 파라미터를 동적으로 변경하기 위해, 쿼리 객체에 변수를 넣어줍니다.
  const { isLoading, isError, data, error } = useQuery(["reviews", { pageNum: 1, criteria: "likeCount" }], getReviews);
  const reviewList = data && data.data;

  console.log(data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return console.log("❌❌❌", error);
  }

  const handleSortByLike = () => {
    setLikeSort(true);
    setCreateDateSort(false);
  };

  const handleSortByLatest = () => {
    setLikeSort(false);
    setCreateDateSort(true);
  };

  const sortedList = reviewList.sort((a, b) => {
    if (likeSort) {
      return b.likeCount - a.likeCount;
    } else if (createDateSort) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return 0;
    }
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center">
        <div className="d-flex w-100 justify-content-center">
          <SortButton onClick={handleSortByLike}>Sort by Likes</SortButton>
          <SortButton onClick={handleSortByLatest}>Sort by Latest</SortButton>
        </div>
      </div>

      <br />
      {sortedList.map((review) => (
        <ReviewCard key={review.id} review={review} onClick={() => goToDetailPage(navigate, review.id)} />
      ))}
    </div>
  );
}

export default Main;
