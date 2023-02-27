import React from "react";
import styled from "styled-components";
import Bgm from "./Bgm";
import Nav2 from "./Nav2";
import Navigation from "./Navigation";

// 스타일을 적용할 컴포넌트를 생성합니다.
const StyledHeader = styled.header`
  background-color: #ffffff;
  margin-top: 40px;
  padding: 30px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  background-image: url("https://i.pinimg.com/564x/b0/b2/a2/b0b2a29133dc9d249a225d105e3b6800.jpg");
  background-repeat: no-repeat; //이미지 반복 안할것이야
  background-position: top; //이미지 윗부분 잘리지않게 하기
`;

// 기존의 Header 컴포넌트 대신에 스타일이 적용된 StyledHeader 컴포넌트를 사용합니다.
const Header = () => {
  return (
    <>
      <StyledHeader></StyledHeader>
      {/* <Bgm /> */}
      <Navigation />
      {/* <Nav2 /> */}
    </>
  );
};

export default Header;
