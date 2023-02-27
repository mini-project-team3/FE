import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Bgm from "./Bgm";

const StyledHeader = styled.header`
  background-color: #ffffff;
  padding: 20px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: top;
`;

const HeaderLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("https://i.pinimg.com/564x/b0/b2/a2/b0b2a29133dc9d249a225d105e3b6800.jpg");
  background-repeat: no-repeat;
  background-position: top;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <>
      <Bgm />
      <StyledHeader>
        <HeaderLink href="/" />
      </StyledHeader>
      <Navigation />
    </>
  );
};

export default Header;
