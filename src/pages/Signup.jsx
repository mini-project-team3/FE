import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "../style/signinOrUp/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import instance from "../api/instance";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import LoadingSpinner from "../style/LoadingSpinner";

const Signup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    (newUser) => {
      return axios.post("/api/users/signup", newUser);
    }
  );

  const onSignupHandler = () => {
    if (password != passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    mutate({ userId: id, password, nickname });
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isError) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <Container
      style={{ marginTop: "20vh", width: "50vw", textAlign: "center" }}
    >
      <div>타이틀 : 회원가입</div>
      <form>
        <label>아이디</label>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label>닉네임</label>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />

        <label>비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password-confirm"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        />
      </form>
      <Button onClick={onSignupHandler}>회원가입하기</Button>
    </Container>
  );
};

export default Signup;
