import styled from "styled-components";

const PagiNationStyle = styled.div`
  margin: 20px;
  padding: 0;
  box-sizing: border-box;

  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

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

export default PagiNationStyle;
