import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import LoadingSpinner from "../style/LoadingSpinner";
import styled from "styled-components";

const MyPage = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("MyWrite");
  const [createDateSort, setCreateDateSort] = useState(false);
  const [likeSort, setLikeSort] = useState(false);
  const criteria = "createdAt";

  const handleSortByLike = () => {
    criteria = "likeCount";
    refetch();
  };

  const handleSortByLatest = () => {
    criteria = "createdAt";
    refetch();
  };

  const token = window.localStorage.getItem("token");

  const queryFunc = async () => {
    if (sortBy === "MyWrite") {
      return await axios.get(
        `${process.env.REACT_APP_BASEURL}/api/myreviews?criteria=${criteria}`,
        {
          headers: { authorization: token },
        }
      );
    } else if (sortBy === "LIKES") {
      return await axios.get(
        `${process.env.REACT_APP_BASEURL}/api/reviews/likes?criteria=${criteria}`,
        {
          headers: { authorization: token },
        }
      );
    }
  };
  const { isLoading, isError, error, data, refetch } = useQuery(
    ["getMyReviews"],
    queryFunc
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isError) {
    console.log(error.response.data.error.message);
  }

  const myList = data.data.data;

  const reSort = (criteria) => {
    if (criteria === sortBy) {
      return;
    }
    setSortBy(criteria);
    refetch();
  };

  const navArea = (
    <div>
      <div className="d-flex justify-content-center">
        <div className="d-flex w-100 justify-content-center">
          <SortButton onClick={handleSortByLike}>Sort by Likes</SortButton>
          <SortButton onClick={handleSortByLatest}>Sort by Latest</SortButton>
        </div>
      </div>
      <button>로그아웃</button>
      <button onClick={() => reSort("MyWrite")}>내가 쓴 리뷰 조회</button>
      <button onClick={() => reSort("LIKES")}>내가 좋아요한 리뷰 조회</button>
      <br />
    </div>
  );

  if (sortBy === "MyWrite") {
    return (
      <Container>
        {navArea}
        {myList?.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </Container>
    );
  } else if (sortBy === "LIKES") {
    return (
      <Container>
        {navArea}
        {myList?.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </Container>
    );
  }
};
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

export default MyPage;
