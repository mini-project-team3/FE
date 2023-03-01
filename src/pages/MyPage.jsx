import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import LoadingSpinner from "../style/LoadingSpinner";

const MyPage = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("TIME");
  const accessToken = useSelector((state) => state.authToken.accessToken);

  const token = window.localStorage.getItem("token");
  const { isLoading, isError, error, data, refetch } = useQuery(
    ["getMyReviews"],
    () =>
      axios.get(`${process.env.REACT_APP_BASEURL}/api/myreviews`, {
        headers: { Authorization: token },
      })
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isError) {
    console.log(error.response.data.error.message);
  }

  const myList = data.data.data;

  const reSort = (criteria) => {
    if (criteria !== sortBy) {
      setSortBy(criteria);
      refetch();
    }
  };

  const navArea = (
    <div>
      <button>로그아웃</button>
      <button onClick={() => reSort("TIME")}>최신 순</button>
      <button onClick={() => reSort("LIKES")}>좋아요 순</button>
      <br />
    </div>
  );

  if (sortBy === "TIME") {
    return (
      <Container>
        {navArea}
        {myList?.map((item) => (
          <ReviewCard key={item.id} />
        ))}
      </Container>
    );
  } else if (sortBy === "LIKES") {
    return (
      <Container>
        {navArea}
        {myList?.map((item) => (
          <ReviewCard key={item.id} />
        ))}
      </Container>
    );
  }
};

export default MyPage;
