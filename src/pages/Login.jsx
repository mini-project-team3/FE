import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {Button} from "../style/signinOrUp/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToSignupPage = () => {
    navigate("/signup");
  };

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    isSubmitting,
  } = useForm();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      loginId: "yshong2006",
      password: "123asdASD!@#",
    };
    const res = await axios.post(
      "http://13.113.67.140:8080/api/users/login",
      data
    );
    console.log("res : ", res);
  };

  return (
    <Container
      style={{ marginTop: "20vh", width: "50vw", textAlign: "center" }}
    >
      <div>타이틀 : 로그인</div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label>아이디</label>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          name="userId"
          {...register("userId", {
            required: "아이디를 입력해주세요",
            pattern: {
              value: /^[a-z]+[a-z0-9]{2,19}$/g,
              message:
                "아이디는 2-19자 사이의 영문자 소문자와 숫자만 입력하세요",
            },
          })}
        />
        {errors.userId && <small role="alert">{errors.userId.message}</small>}

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
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
