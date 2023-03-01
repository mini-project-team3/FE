import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = ({ curPageNum }) => {
  const [pageNum, setPageNum] = useState(curPageNum || 1);
  const [pageGroupNum, setPageGroupNum] = useState(1);
  const newSelect = (e) => {
    const a = document.querySelector(".pg-active");
    a.classList.remove("pg-active");
    e.target.classList.add("pg-active");
    setPageNum(Number(e.target.textContent));
  };

  return (
    <PagiNationStyle>
      <ul className="pagination">
        <li className="pagination-item">이전</li>
        <li className="pagination-item" onClick={newSelect}>
          {curPageNum - 2}
        </li>
        <li className="pagination-item" onClick={newSelect}>
          {curPageNum - 1}
        </li>
        <li className="pagination-item pg-active" onClick={newSelect}>
          {curPageNum}
        </li>
        <li className="pagination-item" onClick={newSelect}>
          {curPageNum + 1}
        </li>
        <li className="pagination-item" onClick={newSelect}>
          {curPageNum + 2}
        </li>

        <li className="pagination-item">다음</li>
      </ul>
    </PagiNationStyle>
  );
};

export default Pagination;

const PagiNationStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;

  .heading {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  .pagination {
    display: flex;
    flex-direction: row;

    &-item {
      margin-right: 18px;
      border-radius: 10px;
      border: solid 1px #ececec;

      padding: 11px 16px 11px 16px;
      display: inline-block;
      transition: 0.2s all;

      &:hover {
        background-color: #ececec;
      }
    }
  }

  .pg-active {
    background-color: #ececec;
  }
`;
