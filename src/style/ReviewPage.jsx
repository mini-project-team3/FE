import styled from "styled-components";
import Form from "react-bootstrap/Form";

const ReviewCardSt = styled.div`
  display: flex;
  flex-wrap: wrap; // 항목들이 넘칠 경우 자동으로 아래줄로 내려갑니다.
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-align: center;
`;

const CategorySt = styled(ReviewCardSt)`
  margin-right: 10px; // 항목들 사이에 오른쪽 여백을 추가합니다.
`;

const CheckboxSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ReviewTitleSt = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  & h2 {
    font-family: "Lobster", cursive;
    font-size: 3rem;
  }
`; 

const InputSt = styled(Form.Control)`
  border: 2px solid;
  &:focus {
    box-shadow: 0 0 0 0.25rem #010000;
  }
  width: 400px;
  border-radius: 10px;
`;

export {ReviewCardSt, CategorySt, CheckboxSt, ReviewTitleSt, InputSt}