import axios from "axios";
import { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { TbArrowsDownUp } from "react-icons/tb";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getRivews } from "../api/reviewCards";
import LoadingSpinner from "../style/LoadingSpinner";

// 팀장님 여깁뉘다!!!!!!!!!!!!!!!!!!

function Main() {
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery("rivews", getRivews);
  //이 코드는 "data" 변수가 존재하면 "data" 변수의 "data" 속성값을 반환하고, "data" 변수가 존재하지 않으면 false를 반환합니다.
  const reviewList = data && data.data;
  // console.log("이data는뭘까", data);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError) {
    return console.log("❌❌❌", error);
  }

  const handleSort = () => {
    if (reviewList) {
      reviewList.sort((a, b) => b.id - a.id);
    }
  };

  const goToDetailPage = (id) => {
    // goToDetailPage 함수에서 id를 전달할 때, review.id를 전달해야함
    navigate(`/detail/${id}`);
  };

  // const data = axios.get(`${process.env.REACT_APP_BASEURL}/api/reviews`);

  return (
    <div className="d-flex flex-column align-items-center">
      <TbArrowsDownUp style={{ fontSize: "40px", cursor: "pointer" }} variant="dark" onClick={handleSort} />
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
          <Card.Header>{review.title}</Card.Header>
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
