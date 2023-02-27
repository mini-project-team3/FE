import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import LoadingSpinner from "../style/LoadingSpinner";

const MyPage = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("TIME");
  const isAuthenticated = useSelector((state) => {
    return state.authToken.authenticated;
  });
  console.log(isAuthenticated);
  useEffect(() => {
    // if (!isLogin) {
    //   navigate("/login");
    // }
  }, []);

  const { isLoading, isError, error, data, refetch } = useQuery(
    ["getMyReviews"],
    () => {
      if (sortBy === "TIME") {
        return axios.get("http://localhost:5000/reviewList");
      } else if (sortBy === "LIKES") {
        return axios.get("http://localhost:5000/reviewList");
      }
    }
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isError) {
    console.log(error);
  }

  const reSort = (criteria) => {
    if (criteria !== sortBy) {
      setSortBy(criteria);
      refetch();
    }
  };

  const navArea = (
    <div>
      <button onClick={() => reSort("TIME")}>최신 순</button>
      <button onClick={() => reSort("LIKES")}>좋아요 순</button>
      <br />
    </div>
  );

  if (sortBy === "TIME") {
    return (
      <Container>
        {navArea}
        {data?.data.map((item) => (
          <ReviewCard key={item.id} />
        ))}
      </Container>
    );
  } else if (sortBy === "LIKES") {
    return (
      <Container>
        {navArea}
        {data?.data.map((item) => (
          <ReviewCard key={item.id} />
        ))}
      </Container>
    );
  }
};

export default MyPage;
