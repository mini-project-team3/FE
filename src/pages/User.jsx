import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../redux/modules/Auth";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const User = () => {
  useEffect(() => {
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");

    loginBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          signupBtn.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    });

    signupBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          loginBtn.parentNode.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, isSubmitting, handleSubmit } = useForm();

  const postSignup = async (data) => {
    data = {
      loginId: data.signupLoginId,
      password: data.signupPassword,
      nickname: data.signupNickname,
    };
    await axios
      .post(`${process.env.REACT_APP_BASEURL}/api/users/signup`, data)
      .then(() => {
        alert("로그인 했습니다.");
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };

  const postLogin = async (data) => {
    data = { loginId: data.loginLoginId, password: data.loginPassword };
    await axios
      .post(`${process.env.REACT_APP_BASEURL}/api/users/login`, data)
      .then((res) => {
        alert("로그인 되었습니다.");
        window.localStorage.setItem("token", res.headers.authorization);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };

  return (
    <FormStyle>
      <div className="form-structor">
        <form
          onSubmit={handleSubmit((data) => postLogin(data))}
          className="signup"
        >
          <h2 className="form-title" id="signup">
            <span>or</span>로그인
          </h2>
          <div className="form-holder">
            <input
              type="text"
              className="input"
              placeholder="아이디"
              {...register("loginLoginId")}
            />
            <input
              type="password"
              className="input"
              placeholder="비밀번호"
              {...register("loginPassword")}
            />
          </div>

          <button className="submit-btn" type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </form>
        <div className="login slide-up">
          <form
            className="center"
            onSubmit={handleSubmit((data) => postSignup(data))}
          >
            <h2 className="form-title" id="login">
              <span>or</span>회원가입
            </h2>
            <div className="form-holder">
              <input
                type="text"
                className="input"
                placeholder="아이디"
                name="loginId"
                {...register("signupLoginId")}
              />
              <input
                type="password"
                className="input"
                placeholder="비밀번호"
                name="password"
                {...register("signupPassword")}
              />
              <input
                type="text"
                className="input"
                placeholder="닉네임"
                name="nickname"
                {...register("signupNickname")}
              />
            </div>

            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fira+Sans");

  margin-bottom: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .form-structor {
    background-color: #fff;
    border-radius: 15px;
    height: 550px;
    width: 350px;
    position: relative;
    overflow: hidden;
    border: solid 5px black;

    &::after {
      content: "";
      opacity: 0.8;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
    }

    .signup {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      z-index: 5;
      transition: all 0.3s ease;

      &.slide-up {
        top: 5%;
        transform: translate(-50%, 0%);
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
      }

      &.slide-up .form-title {
        font-size: 1em;
        cursor: pointer;
      }

      &.slide-up .form-title span {
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
      }

      .form-title {
        color: black;
        font-size: 1.7em;
        text-align: center;

        span {
          color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
      }

      .form-holder {
        border-radius: 15px;
        background-color: #fff;
        overflow: hidden;
        margin-top: 50px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;

        .input {
          border: 0;
          outline: none;
          box-shadow: none;
          display: block;
          height: 30px;
          line-height: 30px;
          padding: 8px 15px;
          border-bottom: 1px solid #eee;
          width: 100%;
          font-size: 12px;

          &:last-child {
            border-bottom: 0;
          }
          &::input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }

      .submit-btn {
        background-color: rgba(0, 0, 0, 0.4);
        color: rgba(256, 256, 256, 0.7);
        border: 0;
        border-radius: 15px;
        display: block;
        margin: 15px auto;
        padding: 15px 45px;
        width: 100%;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;

        &:hover {
          transition: all 0.3s ease;
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
    }

    .login {
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: black;
      z-index: 5;
      transition: all 0.3s ease;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -20px;
        transform: translate(-50%, 0);
        background-color: black;
        width: 200%;
        height: 250px;
        border-radius: 50%;
        z-index: 4;
        transition: all 0.3s ease;
      }

      .center {
        position: absolute;
        top: calc(50% - 10%);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 65%;
        z-index: 5;
        transition: all 0.3s ease;

        .form-title {
          color: #fff;
          font-size: 1.7em;
          text-align: center;

          span {
            color: rgba(0, 0, 0, 0.4);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
        }

        .form-holder {
          border-radius: 15px;
          background-color: #fff;
          border: 1px solid #eee;
          overflow: hidden;
          margin-top: 50px;
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;

          .input {
            border: 0;
            outline: none;
            box-shadow: none;
            display: block;
            height: 30px;
            line-height: 30px;
            padding: 8px 15px;
            border-bottom: 1px solid #eee;
            width: 100%;
            font-size: 12px;

            &:last-child {
              border-bottom: 0;
            }
            &::input-placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }

        .submit-btn {
          background-color: #fff;
          /* color: rgba(256, 256, 256, 0.7); */
          border: 0;
          border-radius: 15px;
          display: block;
          margin: 15px auto;
          padding: 15px 45px;
          width: 100%;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;

          &:hover {
            transition: all 0.3s ease;
            background-color: #7f7e7e;
            /* background-color: rgba(0, 0, 0, 0.8); */
          }
        }
      }

      &.slide-up {
        top: 90%;
        transition: all 0.3s ease;
      }

      &.slide-up .center {
        top: 10%;
        transform: translate(-50%, 0%);
        transition: all 0.3s ease;
      }

      &.slide-up .form-holder,
      &.slide-up .submit-btn {
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      &.slide-up .form-title {
        font-size: 1em;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      &.slide-up .form-title span {
        color: #fff;
        margin-right: 5px;
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease;
      }
    }
  }
`;

export default User;
