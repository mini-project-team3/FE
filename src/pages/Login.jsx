import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {Button} from "../style/signinOrUp/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/Users";
import { setRefreshToken } from "../storage/Cookie";
import { SET_TOKEN } from "../redux/modules/Auth";

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

  const onValid = async ({ userId, password }) => {
    // input 태그 값 비워주는 코드
    setValue("password", "");

    // 백으로부터 받은 응답
    const response = await loginUser({ userId, password });

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.json.refresh_token);
      dispatch(SET_TOKEN(response.json.access_token));

      return navigate("/");
    } else {
      console.log(response.json);
    }
  };

  return (
    <Container
      style={{ marginTop: "20vh", width: "50vw", textAlign: "center" }}
    >
      <div>타이틀 : 로그인</div>
      <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(data));
          onValid(data);
        })}
      >
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
