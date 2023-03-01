import React, { useState } from "react";
import '../App.css'
import axios from "axios";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import {ReviewCardSt, CategorySt, CheckboxSt, ReviewTitleSt, InputSt} from '../style/ReviewPage.jsx'
import { BlackBtn } from "../style/signinOrUp/Button";

//styled-components

const ReviewCardSt = styled.div`
  display: flex;
  flex-wrap: wrap; // 항목들이 넘칠 경우 자동으로 아래줄로 내려갑니다.
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-align: center;
`;

const CategorySt = styled(ReviewCardSt)`
  margin-right: 10px; // 항목들 사이에 오른쪽 여백을 추가합니다.
`;

const CheckboxSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ReviewTitleSt = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  & h2 {
    font-family: "Lobster", cursive;
    font-size: 3rem;
  }
`;

const InputSt = styled(Form.Control)`
  border: 2px solid;
  &:focus {
    box-shadow: 0 0 0 0.25rem #010000;
  }
  width: 400px;
  border-radius: 10px;
`;

//컴포시작
const Review = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [category, setCategory] = useState([]);

  const onSubmitHandler = async ()  => {
    axios.post(`${process.env.REACT_APP_BASEURL}/api/reviews`, {
      title: { title },
      contents: { contents },
      categoryList: { category },
      // {header}로 토큰값을 같이 넘겨줘야 함
    })
    console.log({'title':{title}, 'contents':{contents}, 'categoryList':{category}})
  }

  const categoryList = [
    "인문",
    "사회",
    "과학",
    "문학",
    "예술",
    "가정",
    "어린이",
  ];


  return (
    <ReviewCardSt>
    <Form onSubmit = {(e)=>{e.preventDefault()}}>
      <ReviewTitleSt>
        <h2>Write a review</h2>
      </ReviewTitleSt>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <CheckboxSt>
          {categoryList.map((item, i) => {
            return (
              <CategorySt key={i}>
                {item}
                <input
                  type="checkbox"
                  value={`C${i}`}
                  onChange={(e) => {
                    setCategory([...category, e.target.value]);
                    // console.log({category})
                  }}
                />
              </CategorySt>
            );
          })}
        </CheckboxSt>

        <InputSt
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="책 제목을 입력하세요"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <InputSt
          as="textarea"
          rows={3}
          placeholder="내용을 입력하세요"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
          cols="30"
          style={{
            height: "300px",
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
      </Form.Group>

      <BlackBtn
        onClick={() => {
          onSubmitHandler();
        }}
      >
        등록하기
      </BlackBtn>
    </Form>
  </ReviewCardSt>
);
};

export default Review;
