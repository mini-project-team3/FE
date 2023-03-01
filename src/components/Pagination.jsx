import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentPage } from "../redux/modules/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const [curPage, setCurPage] = useState(1);

  const newSelect = (e) => {
    dispatch(setCurrentPage(e.target.textContent));
    setCurPage(Number(e.target.textContent));
  };

  return (
    <PagiNationStyle>
      <ul className="pagination">
        <li className="pagination-item">이전</li>
        <li className="pagination-item" onClick={newSelect}>
          {curPage - 2}
        </li>
        <li className="pagination-item" onClick={newSelect}>
          {curPage - 1}
        </li>
        <li className="pagination-item pg-active" onClick={newSelect}>
          {curPage}
        </li>
        <li className="pagination-item" onClick={newSelect}>
          {curPage + 1}
        </li>
        <li className="pagination-item" onClick={newSelect}>
          {curPage + 2}
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
