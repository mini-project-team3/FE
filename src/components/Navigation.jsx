import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SlPencil } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//스타일 컴포넌트
const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    text-align: center;
    width: 1115%;
    color: ${({ theme }) => theme.color};
  }
  .dropdown-menu {
    position: absolute;
    left: 600%;
    transform: translateX(-50%);
  }
`;

const Icon = styled.div`
  font-size: 1.2em;
  color: ${({ theme }) => theme.color}; // 테마 모드에 따른 글자 색상 적용
`;

const Stylednav = styled(Navbar)`
  /* background-color: black; */
  height: 70px;
  margin-bottom: 60px;

  .navbar-toggler {
    border-color: ${({ theme }) =>
      theme.color}; // 테마 모드에 따른 버튼 색상 적용
  }
`;

//컴포함수시작
function Navigation() {
  const dropdownItems = [
    { href: "#cartegori/1", label: "인문" },
    { href: "#cartegori/2", label: "사회" },
    { href: "#cartegori/3", label: "과학" },
    { href: "#cartegori/4", label: "문학" },
    { href: "#cartegori/5", label: "예술" },
    { href: "#cartegori/6", label: "가정" },
    { href: "#cartegori/7", label: "어린이" },
  ];

  const dropdownMenu = dropdownItems.map((item) => (
    <NavDropdown.Item key={item.href} href={item.href}>
      {item.label}
    </NavDropdown.Item>
  ));

  const navigate = useNavigate();
  const moveToReviewPage = () => {
    navigate("/review");
  };

  const moveToMyPage = () => {
    navigate("/mypage");
  };
  return (
    <Stylednav>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <StyledNavDropdown title="Kategorie" id="basic-nav-dropdown">
              {dropdownMenu}
            </StyledNavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={moveToReviewPage}>
              <Icon>
                <SlPencil />
              </Icon>
            </Nav.Link>
            <Nav.Link onClick={moveToMyPage}>
              <Icon>
                <SlUser />
              </Icon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Stylednav>
  );
}
export default Navigation;
