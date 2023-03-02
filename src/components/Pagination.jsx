import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/modules/paginationSlice";
import PagiNationStyle from "../style/PagiNationStyle";

const Pagination = () => {
  const dispatch = useDispatch();
  const [curPage, setCurPage] = useState(1);

  const newSelect = (e) => {
    dispatch(setCurrentPage(e.target.textContent));
    setCurPage(Number(e.target.textContent));
  };

  const onClickNextButtonHandler = () => {
    dispatch(setCurrentPage(curPage + 5));
    setCurPage(curPage + 5);
  };

  const onClickPrevButtonHandler = () => {
    if (curPage - 5 < 1) {
      dispatch(setCurrentPage(1));
      setCurPage(1);
      return;
    }
    dispatch(setCurrentPage(curPage - 5));
    setCurPage(curPage - 5);
  };

  switch (curPage) {
    case 1:
      return (
        <PagiNationStyle>
          <ul className="pagination">
            <li className="pagination-item">이전</li>
            <li className="pagination-item pg-active" onClick={newSelect}>
              1
            </li>
            <li className="pagination-item" onClick={newSelect}>
              2
            </li>
            <li className="pagination-item " onClick={newSelect}>
              3
            </li>
            <li className="pagination-item" onClick={onClickNextButtonHandler}>
              다음
            </li>
          </ul>
        </PagiNationStyle>
      );
    case 2:
      return (
        <PagiNationStyle>
          <ul className="pagination">
            <li className="pagination-item" onClick={onClickPrevButtonHandler}>
              이전
            </li>
            <li className="pagination-item " onClick={newSelect}>
              1
            </li>
            <li className="pagination-item pg-active" onClick={newSelect}>
              2
            </li>
            <li className="pagination-item " onClick={newSelect}>
              3
            </li>

            <li className="pagination-item" onClick={onClickNextButtonHandler}>
              다음
            </li>
          </ul>
        </PagiNationStyle>
      );
    default:
      return (
        <PagiNationStyle>
          <ul className="pagination">
            <li className="pagination-item" onClick={onClickPrevButtonHandler}>
              이전
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

            <li className="pagination-item" onClick={onClickNextButtonHandler}>
              다음
            </li>
          </ul>
        </PagiNationStyle>
      );
  }
};

export default Pagination;
