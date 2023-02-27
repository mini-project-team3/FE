import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../style/LoadingSpinner";

const MyPage = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("TIME");
  const isLogin = useSelector((state) => {
    return state.loginSlice.isLogin;
  });
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
          <div key={item.id}>
            <div>TIME</div>
            <div>제목 : {item.title}</div>
            <div>닉네임 : {item.nickname}</div>
            <div>좋아요 수 : {item.likeCount}</div>
            <div>작성일자 : {item.createdAt}</div>
            <br />
          </div>
        ))}
      </Container>
    );
  } else if (sortBy === "LIKES") {
    return (
      <Container>
        {navArea}
        {data?.data.map((item) => (
          <div key={item.id}>
            <div>LIKES</div>
            <div>제목 : {item.title}</div>
            <div>닉네임 : {item.nickname}</div>
            <div>좋아요 수 : {item.likeCount}</div>
            <div>작성일자 : {item.createdAt}</div>
          </div>
        ))}
      </Container>
    );
  }
};

export default MyPage;
