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
            <li className="pagination-item" onClick={newSelect}>
              4
            </li>
            <li className="pagination-item" onClick={newSelect}>
              5
            </li>

            <li className="pagination-item">다음</li>
          </ul>
        </PagiNationStyle>
      );
    case 2:
      return (
        <PagiNationStyle>
          <ul className="pagination">
            <li className="pagination-item">이전</li>
            <li className="pagination-item " onClick={newSelect}>
              1
            </li>
            <li className="pagination-item pg-active" onClick={newSelect}>
              2
            </li>
            <li className="pagination-item " onClick={newSelect}>
              3
            </li>
            <li className="pagination-item" onClick={newSelect}>
              4
            </li>
            <li className="pagination-item" onClick={newSelect}>
              5
            </li>

            <li className="pagination-item">다음</li>
          </ul>
        </PagiNationStyle>
      );
    default:
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
  }
};

export default Pagination;
