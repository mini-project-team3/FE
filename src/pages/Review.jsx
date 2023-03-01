import React, { useState } from "react";
import '../App.css'
import axios from "axios";
import Form from "react-bootstrap/Form";
import {ReviewCardSt, CategorySt, CheckboxSt, ReviewTitleSt, InputSt} from '../style/ReviewPage.jsx'
import { BlackBtn } from "../style/signinOrUp/Button";



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
