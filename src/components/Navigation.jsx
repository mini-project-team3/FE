import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SlPencil } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import styled from "styled-components";

//스타일 컴포넌트
const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    text-align: center; /* 드롭다운 토글 중앙 정렬 */
    width: 1115%; //아니 이거어카지...
  }
  .dropdown-menu {
    position: absolute; /* 드롭다운 메뉴 위치 고정 */
    left: 600%; /* 드롭다운 메뉴 정렬 */
    transform: translateX(-50%);
  }
`;
const Icon = styled.div`
  font-size: 1.2em;
`;

const Stylednav = styled(Navbar)`
  /* background-color: black; */
  height: 70px;
  margin-bottom: 60px;
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

  return (
    <Stylednav>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <StyledNavDropdown title="Kategorie" id="basic-nav-dropdown">
              {dropdownMenu}
            </StyledNavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Icon>
                <SlPencil />
              </Icon>
            </Nav.Link>
            <Nav.Link>
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
