import React, { useState } from "react";
import axios from "axios";

const Review = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [category, setCategory] = useState([]);

  const onSubmitHandler = async ()  => {
    axios.post(`${process.env.REACT_APP_BASEURL}/api/reviews`, {
      title: { title },
      contents: { contents },
      categoryList: { category },
      
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
    <div>
      <h4>리뷰작성 페이지</h4>
      {categoryList.map((item, i) => {
        return (
          <div key={i}>
            {item}
            <input
              type="checkbox"
              value={`C${i}`}
              onChange={(e) => {
                setCategory([...category, e.target.value]);
              }}
            />
          </div>
        );
      })}

      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="책 제목을 입력하세요📚"
          />
        <br />
        <textarea
          type="text"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
          cols="30"
          rows="5"
          placeholder="여기에 내용을 써주세요~"
          />
      </div>

      <button
        onClick={() => {
          axios.post("api/reviews", {
            title: { title },
            contents: { contents },
            categoryList: { category },
          });
        }}
      >
        등록하기
      </button>
    </div>
  );
};

export default Review;
