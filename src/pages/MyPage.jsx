import axios from "axios";
import React, { useEffect, useState } from "react";
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
  }, [sortBy]);

  const { isLoading, isError, error, data, refetch } = useQuery(
    ["getMyReviews"],
    () => {
      if (sortBy === "TIME") {
        return axios.get("/api/myreviews?page=0&criteria=createdAt&sort=DESC");
      } else if (sortBy === "LIKES") {
        return axios.get(
          "/api/reviews/likes?page=0&criteria=createdAt&sort=DESC"
        );
      }
    }
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isError) {
    console.log(error);
  }
  const reviewList = data.data.reviewList;

  const navArea = `<div>Title: mypage</div>
    <div onClick={${setSortBy("TIME")}; ${refetch()};}>내가 쓴 글</div>
    <div onClick={${setSortBy(
      "LIKES"
    )}; ${refetch()};}>내가 좋아요 누른 글</div>`;

  if (sortBy === "TIME") {
    return (
      <div>
        {navArea}
        {reviewList?.map((item) => (
          <div onClick={navigate("상세페이지로")}>
            <div>{item.title}</div>
            <div>{item.nickname}</div>
            <div>{item.likeCount}</div>
            <div>{item.createdAt}</div>
          </div>
        ))}
      </div>
    );
  } else if (sortBy === "LIKES") {
    return (
      <div onClick={navigate("상세페이지로")}>
        {navArea}
        {reviewList?.map((item) => (
          <div>
            <div>{item.title}</div>
            <div>{item.nickname}</div>
            <div>{item.likeCount}</div>
            <div>{item.createdAt}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default MyPage;
