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
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid #07d;
    border-right: 2px solid transparent;
    animation: spinner 0.6s linear infinite;
  }
`;

export default LoadingSpinner;
