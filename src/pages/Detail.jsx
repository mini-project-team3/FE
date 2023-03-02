import React, { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";

import LoadingSpinner from "../style/LoadingSpinner";
import { InputSt } from "../style/ReviewPage.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";

const Detail = () => {
  let { id } = useParams();

  const [modal, setModal] = useState(false);
  const [contents, setContents] = useState("");
  const [commentInputMode, setCommentInputMode] = useState("CREATE");
  const [commentEditId, setCommentEditId] = useState(null);

  const [reviewEditOn, setReviewEditOn] = useState(false); //리뷰 수정창 뜨게하기
  const [reviewEditTitle, setReviewEditTitle] = useState("");
  const [reviewEditContents, setReviewEditContents] = useState("");

  const [likes, setLikes] = useState(null); // 좋아요 수를 useState관리
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token"); // 로컬 스토리지에서 토큰을 가져오가

  //토큰 디코딩 -> 닉네임 가져오기
  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };
  const curUserNickname = parseJwt(token).sub;

  const onLikeHandler = async (event) => {
    // 좋아요 버튼 클릭 시 호출되는 함수입니다.
    event.preventDefault(); // 기본 동작을 막습니다.
    await axios
      .post(
        // axios로 POST 요청을 보냅니다.
        `${process.env.REACT_APP_BASEURL}/api/reviews/likes/${id}`, // 좋아요 API 주소
        {},
        { headers: { authorization: token } } // 토큰을 헤더에 담아보냄
      )
      .then(() => {
        refetch();
      })
      .catch((err) => {
        axios
          .delete(`${process.env.REACT_APP_BASEURL}/api/reviews/likes/${id}`, {
            headers: { authorization: token },
          })
          .then(() => {
            refetch();
          });
      });
  };

  const onSubmitcontentsHandler = async () => {
    if (!contents) {
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/api/reviews/${id}`,
        {
          contents: contents,
        },
        { headers: { authorization: token } }
      )
      .then(() => {
        setContents(""); // 인풋비우기
        refetch();
      });
  };

  const onSubmitEditcontentsHandler = () => {
    axios
      .put(`${process.env.REACT_APP_BASEURL}/api/comments/${commentEditId}`, {
        contents: contents,
      })
      .then(() => {
        refetch();
      });
  };

  const { isLoading, isError, data, refetch } = useQuery(
    // useQuery를 사용하여 데이터를 불러옴.
    ["getDetailReviews"], // 캐시에 저장될 고유한 키
    () => {
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

  const onSubmitCommentHandler = (e) => {
    e.preventDefault();
    const commentValue = e.target.comment.value;
  };

  const List = data.data.data;

  const onEditButtonHandler = async (e) => {
    e.preventDefault();
    const now = new Date();
    const nowDetail = "" + now.getHours() + now.getMinutes() + now.getSeconds() + now.getMilliseconds();

    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const newReview = Object.assign({}, List, {
      title: title,
      contents: desc,
      modifiedAt: nowDetail,
    });
    const res = await axios.put(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`, newReview, {
      headers: { authorization: token }, // 토큰을 헤더에 담아 보냄
    });
    console.log(res);
  };

  //모달창 키고 끄기
  const toggleModalHandler = () => {
    setModal(!modal);
  };

  // 댓글 관련

  const onDeleteCommentHandler = (id) => {
    axios.delete(`${process.env.REACT_APP_BASEURL}/api/comments/${id}`).then(() => {
      refetch();
    });
  };

  const showEditCommentHandler = (item) => {
    console.log("item", item);
    setCommentEditId(item.id);
    setContents(item.contents);
    setCommentInputMode("UPDATE");
    setModal(true);
  };

  const showReviewEditHandler = (title, contents) => {
    setReviewEditOn(true);
    setReviewEditTitle(title);
    setReviewEditContents(contents);
  };
  const reviewEditHandler = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`, {
        title: reviewEditTitle,
        contents: reviewEditContents,
      })
      .then((res) => {
        console.log(res);
        refetch();
        setReviewEditOn(false);
      });
  };
  const reviewDeleteHandler = () => {
    axios.delete(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`);
    navigate("/");
  };

  console.log("List : ", List.nickname);

  return (
    <div className="layout">
      <button onClick={onLikeHandler} style={{ backgroundColor: "transparent", border: "none" }}>
        <MdFavorite style={{ fontSize: "30px" }} /> {List.likeCount}
      </button>
      {reviewEditOn ? (
        <div>
          <form onSubmit={reviewEditHandler}>
            <input
              type="text"
              placeholder="제목"
              value={reviewEditTitle}
              onChange={(e) => {
                setReviewEditTitle(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="내용"
              value={reviewEditContents}
              onChange={(e) => {
                setReviewEditContents(e.target.value);
              }}
            />
            <input type="submit" />
          </form>
        </div>
      ) : (
        <Card
          key={List?.id}
          bg="dark"
          text="white"
          style={{
            width: "30rem",
            height: "20rem",
            borderRadius: "20px",
          }}
          className="my-2"
        >
          <Card.Header>{List?.title}</Card.Header>
          <Card.Body>
            <Card.Title>{List?.contents}</Card.Title>
            <Card.Text>{List?.nickname}</Card.Text>
            <Card.Text>{List?.createdAt}</Card.Text>
          </Card.Body>
          {List.nickname === curUserNickname ? (
            <div>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => showReviewEditHandler(List?.title, List?.contents)}
              >
                <SlPencil style={{ fontSize: "30px", color: "white" }} />
              </button>
              <button style={{ backgroundColor: "transparent", border: "none" }} onClick={reviewDeleteHandler}>
                <SlTrash style={{ fontSize: "30px", color: "white", backgroundColor: "transparent", border: "none" }} />
              </button>
            </div>
          ) : (
            <div>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => showReviewEditHandler(List?.title, List?.contents)}
              >
                <SlPencil style={{ fontSize: "30px", color: "white" }} />
              </button>
              <button onClick={reviewDeleteHandler} style={{ backgroundColor: "transparent", border: "none" }}>
                <SlTrash style={{ fontSize: "30px", color: "white" }} />
              </button>
            </div>
          )}
        </Card>
      )}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div style={{ fontFamily: "Lobster, cursive", fontSize: "5em", marginTop: "-20px", marginBottom: "-30px" }}>
            -----Commnet----
          </div>
          <button
            onClick={toggleModalHandler}
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "15px",
              padding: "10px 20px",
              margin: "20px 0",
              width: "500px",
              maxWidth: "100%",
            }}
          >
            댓글 입력하기
          </button>

          {modal == true ? (
            <Modal
              commentInputMode={commentInputMode}
              contents={contents}
              setContents={setContents}
              onSubmitcontentsHandler={onSubmitcontentsHandler}
              onSubmitEditcontentsHandler={onSubmitEditcontentsHandler}
            />
          ) : null}
          {List.commentList?.map((item) => (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    marginRight: "20px",
                    display: "inline-block",
                    width: "auto",

                    padding: "5px",
                  }}
                >
                  {item.nickname}
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    display: "inline-block",
                    width: "auto",

                    padding: "5px",
                  }}
                >
                  {item.contents}
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <button
                  onClick={() => onDeleteCommentHandler(item.id)}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "20px",
                    padding: "5px 10px",
                  }}
                >
                  <SlTrash style={{ fontSize: "20px" }} />
                </button>
                <button
                  onClick={() => showEditCommentHandler(item)}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "20px",
                    padding: "5px 10px",
                  }}
                >
                  <SlPencil style={{ fontSize: "20px" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Modal(props) {
  switch (props.commentInputMode) {
    case "CREATE":
      return (
        <div>
          <InputSt
            type="text"
            value={props.contents}
            onChange={(e) => {
              props.setContents(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.onSubmitcontentsHandler();
              }
            }}
            placeholder="입력 후 엔터를 누르세요"
            style={{
              width: "500px",
              height: "100px",
              backgroundImage: `linear-gradient(
              rgba(48, 48, 48, 0.8),
              rgba(0, 0, 0, 0.8)
              ), url('https://i.pinimg.com/originals/0b/5c/c0/0b5cc024841accd9a31a7b2daeb0e57b.gif')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "white",
            }}
          />
        </div>
      );

    case "UPDATE":
      return (
        <div>
          <InputSt
            type="text"
            value={props.contents}
            onChange={(e) => {
              props.setContents(e.target.value);
            }}
            placeholder="댓글을 수정해보세요"
          />
          <button onClick={props.onSubmitEditcontentsHandler}>확인</button>
        </div>
      );
    default:
      return;
  }
}

export default Detail;
