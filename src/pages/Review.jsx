import React, { useState } from "react";
import axios from "axios";

const Review = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [category, setCategory] = useState([]);

  const onSubmitHandler = async () => {
    axios.post("api/reviews", {
      title: { title },
      contents: { contents },
      categoryList: { category },
    });
  };

  const categoryList = ["인문", "사회", "과학", "문학", "예술", "가정", "어린이"];

  return (
    <div>
      <h4>리뷰작성 페이지</h4>
      {categoryList.map((item, i) => {
        return (
          <div key={i}>
            {item}
            <input
              type="checkbox"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                // console.log({category})
              }}
            />
          </div>
        );
      })}

      {/* <form action="api/reviews" method="POST">
      <div>
        Category : <input type="checkbox" name="categoryList"
        value={"C1[]"}/>인문
        <input type="checkbox" name="categoryList"
        value={"C2[]"}/>사회
        <input type="checkbox" name="categoryList"
        value={"C3[]"}/>과학
        <input type="checkbox" name="categoryList"
        value={"C4[]"}/>문학
        <input type="checkbox" name="categoryList"
        value={"C5[]"}/>예술
        <input type="checkbox" name="categoryList"
        value={"C6[]"}/>가정
        <input type="checkbox" name="categoryList"
        value={"C7[]"}/>어린이
      </div><br/>
      </form> */}

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
        ></textarea>
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
