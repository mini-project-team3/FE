import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Button from "../style/signinOrUp/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../style/LoadingSpinner";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = () => {
    const data = {
      loginId: id,
      password,
    };
    axios
      .post("/api/users/login", data)
      .then((response) => {
        const { accessToken } = response.data;

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const goToSignupPage = () => {
    navigate("/signup");
  };

  return (
    <Container
      style={{ marginTop: "20vh", width: "50vw", textAlign: "center" }}
    >
      <div>타이틀 : 로그인</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <label>아이디</label>
        <input type="text" placeholder="아이디를 입력해주세요" name="loginId" />

        <label>비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
        />
        <Button type="submit" style={{ backgroundColor: "gray" }}>
          로그인하기
        </Button>
      </form>

      <Button
        type="submit"
        onClick={goToSignupPage}
        style={{ backgroundColor: "gray" }}
      >
        회원가입하기
      </Button>
    </Container>
  );
};

export default Login;
