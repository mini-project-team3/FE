import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

const Styledspan = styled.span`
  color: white;
  font-size: 30px;
`;

function Nav2() {
  return (
    <>
      <Navbar StyledNav bg="dark" variant="dark">
        <Container>
          <Styledspan>
            <BiMenu />
          </Styledspan>
          <Nav className="me-auto">
            <Nav.Link href="#cartegori/1">인문</Nav.Link>
            <Nav.Link href="#cartegori/2">사회</Nav.Link>
            <Nav.Link href="#cartegori/3">과학</Nav.Link>
            <Nav.Link href="#cartegori/4">문학</Nav.Link>
            <Nav.Link href="#cartegori/5">예술</Nav.Link>
            <Nav.Link href="#cartegori/6">가정</Nav.Link>
            <Nav.Link href="#cartegori/7">어린이</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav2;
