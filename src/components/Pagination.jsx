import { useEffect } from "react";
import styled from "styled-components";

const Pagination = () => {
  useEffect(() => {
    var btns = document.querySelectorAll(".btn");
    var paginationWrapper = document.querySelector(".pagination-wrapper");
    var bigDotContainer = document.querySelector(".big-dot-container");
    var littleDot = document.querySelector(".little-dot");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", btnClick);
    }

    function btnClick() {
      if (this.classList.contains("btn--prev")) {
        paginationWrapper.classList.add("transition-prev");
      } else {
        paginationWrapper.classList.add("transition-next");
      }

      var timeout = setTimeout(cleanClasses, 500);
    }

    function cleanClasses() {
      if (paginationWrapper.classList.contains("transition-next")) {
        paginationWrapper.classList.remove("transition-next");
      } else if (paginationWrapper.classList.contains("transition-prev")) {
        paginationWrapper.classList.remove("transition-prev");
      }
    }
  }, []);
  return (
    <PaginationStyle>
      <div class="pagination-wrapper">
        <svg
          className="btn btn--prev"
          height="96"
          viewBox="0 0 24 24"
          width="96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          <path d="M0-.5h24v24H0z" fill="none" />
        </svg>
        <div className="pagination-container">
          <div className="little-dot  little-dot--first"></div>
          <div className="little-dot">
            <div className="big-dot-container">
              <div className="big-dot"></div>
            </div>
          </div>
          <div className="little-dot  little-dot--last"></div>
        </div>
        <svg
          className="btn btn--next"
          height="96"
          viewBox="0 0 24 24"
          width="96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
          <path d="M0-.25h24v24H0z" fill="none" />
        </svg>
      </div>
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    background: #393994;
  }

  .pagination-wrapper {
    font-size: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  @keyframes pagination-container--animation-prev {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(18px);
    }
  }

  @keyframes pagination-container--animation-next {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-18px);
    }
  }

  .transition-prev .pagination-container {
    animation: pagination-container--animation-prev 0.3s forwards;
  }

  .transition-next .pagination-container {
    animation: pagination-container--animation-next 0.3s forwards;
  }

  .little-dot {
    width: 6px;
    height: 6px;
    background: black;
    border-radius: 100%;
    display: inline-block;
    vertical-align: middle;
    margin: 0 6px;
    position: relative;
    z-index: 10;
  }

  .little-dot--first,
  .little-dot--last {
    z-index: 5;
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(-18px);
    }
  }

  .transition-prev .little-dot--first {
    animation: slideLeft 0.4s 0.3s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  @keyframes little-dot--first--animation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .transition-next .little-dot--first {
    animation: little-dot--last--animation 0.3s forwards;
  }

  @keyframes little-dot--last--animation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .transition-prev .little-dot--last {
    animation: little-dot--last--animation 0.3s forwards;
  }

  @keyframes slideRight {
    0% {
      transform: translateX(0px);
      opacity: 1;
    }

    100% {
      transform: translateX(18px);
      opacity: 1;
    }
  }

  .transition-next .little-dot--last {
    animation: slideRight 0.4s 0.3s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .big-dot {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: #f6af54;
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
  }

  .transition-next .big-dot {
    right: auto;
    left: -6px;
  }

  .big-dot-container {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    right: 3px;
    transform: translateY(-50%);
    z-index: 10;
  }

  .transition-next .big-dot-container {
    right: auto;
    left: 3px;
  }

  @keyframes big-dot-container--animation-prev {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(-50%) rotate(-179deg);
    }
  }

  @keyframes big-dot-container--animation-next {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(-50%) rotate(-181deg);
    }
  }

  .transition-prev .big-dot-container {
    animation: big-dot-container--animation-prev 0.3s forwards;
  }

  .transition-next .big-dot-container {
    animation: big-dot-container--animation-next 0.3s forwards;
  }

  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    fill: black;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .btn:hover {
    opacity: 0.6;
  }

  .btn--next {
    left: calc(100% + 20px);
  }

  .btn--prev {
    right: calc(100% + 20px);
  }
`;

export default Pagination;
