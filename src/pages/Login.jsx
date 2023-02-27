import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Button from "../style/signinOrUp/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/modules/loginSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToSignupPage = () => {
    navigate("/signup");
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <Container
      style={{ marginTop: "20vh", width: "50vw", textAlign: "center" }}
    >
      <div>타이틀 : 로그인</div>
      <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(data));
        })}
      >
        <label>아이디</label>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          name="loginId"
          aria-invalid={
            !isDirty ? undefined : errors.loginId ? "true" : "false"
          }
          {...register("loginId", {
            required: "아이디를 입력해주세요",
            pattern: {
              value: /^[a-z]+[a-z0-9]{5,19}$/g,
              message: "아이디는 영문자 소문자와 숫자만 입력하세요",
            },
          })}
        />
        {errors.loginId && <small role="alert">{errors.loginId.message}</small>}

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
          aria-invalid={
            !isDirty ? undefined : errors.password ? "true" : "false"
          }
          {...register("password", {
            required: "비밀번호는 필수 입력입니다",
            minLength: {
              value: 2,
              message: "2자리 이상의 비밀번호를 사용하세요",
            },
          })}
        />
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
        <Button
          type="submit"
          disable={isSubmitting}
          style={{ backgroundColor: "gray" }}
        >
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
