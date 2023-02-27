import { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { TbArrowsDownUp } from "react-icons/tb";
import ReviewCard from "./ReviewCard";

function Main() {
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

  return (
    <div className="d-flex flex-column align-items-center">
      <TbArrowsDownUp
        style={{ fontSize: "40px", cursor: "pointer" }}
        variant="dark"
        onClick={handleSort}
      />
      <br />
      {reviews.map((review, id) => (
        <ReviewCard key={id} review={review} id={id} />
      ))}
    </div>
  );
}

export default Main;
