import styled from "styled-components";

const Button = styled.button`
  background-color: #afc8e4;
  border-radius: 20px;
`;

const delButton = styled.button`
  background-color: red;
  border-radius: 20px;
`;

export const BlackBtn = styled.button`
  background-color: black;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.4rem 1.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;
