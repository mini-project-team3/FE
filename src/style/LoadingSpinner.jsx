import styled from "styled-components";

const LoadingSpinner = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  :before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 18%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 5px solid #00060c;
    border-right: 5px solid transparent;
    animation: spinner 0.6s linear infinite;
  }
`;

export default LoadingSpinner;
