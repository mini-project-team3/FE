import React, { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { Button, Delbutton } from "../style/signinOrUp/Button";
import LoadingSpinner from "../style/LoadingSpinner";
import { InputSt } from "../style/ReviewPage.jsx";
import { useParams } from "react-router-dom";

const Detail = React.memo(() => {
  let { id } = useParams();

  const [modal, setModal] = useState(false);
  const [contents, setContents] = useState("");

  const token = window.localStorage.getItem("token"); // 로컬 스토리지에서 토큰을 가져오가
  const [likes, setLikes] = useState(0); // 좋아요 수를 useState관리

  const onLikeHandler = async (event) => {
    // 좋아요 버튼 클릭 시 호출되는 함수입니다.
    setLikes(likes + 1);
    event.preventDefault(); // 기본 동작을 막습니다.
    await axios.post(
      // axios로 POST 요청을 보냅니다.
      `${process.env.REACT_APP_BASEURL}/api/reviews/likes/${id}`, // 좋아요 API 주소
      {},
      { headers: { authorization: token } } // 토큰을 헤더에 담아보냄
    );
    refetch(); // 데이터를 다시 불러옴
  };

  const onSubmitcontentsHandler = async () => {
    axios.post(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`, {
      headers: { authorization: token },
      contents: { contents },
    });
  };

  const { isLoading, isError, data, refetch } = useQuery(
    // useQuery를 사용하여 데이터를 불러옴.
    ["getDetailReviews"], // 캐시에 저장될 고유한 키
    () => {
      console.log("실행");
      return axios.get(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`, {
        headers: { authorization: token }, // 토큰을 헤더에 담아 보냄
      });
    }
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.log("에러 발생");
  }

  return (
    <div className="layout">
      <button onClick={onLikeHandler}>👍 {likes}</button>
      <Card
        key={data && data.id}
        bg="dark"
        text="white"
        style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
        className="my-2"
      >
        <Card.Header>{data && data.title}</Card.Header>
        <Card.Body>
          <Card.Title>{data && data.contents}</Card.Title>
          <Card.Text>{data && data.nickname}</Card.Text>
          <Card.Text>{data && data.createdAt}</Card.Text>
        </Card.Body>
        <div>
          <Button>수정</Button>
          <Delbutton>삭제</Delbutton>
        </div>
      </Card>

      <div
        onClick={() => {
          setModal(true);
        }}
      >
        {/* {data && data.commentList.contents} */}
        댓글창
      </div>

      {modal == true ? (
        <Modal contents={contents} setContents={setContents} onSubmitcontentsHandler={onSubmitcontentsHandler} />
      ) : null}
    </div>
  );
});

function Modal(props) {
  return (
    <div>
      <InputSt
        type="text"
        value={props.contents}
        onChange={(e) => {
          props.setContents(e.target.value);
        }}
        placeholder="댓글을 작성해보세요"
      />
      <button onClick={props.onSubmitcontentsHandler()}>확인</button>
    </div>
  );
}

export default Detail;
