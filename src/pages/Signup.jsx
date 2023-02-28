import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "../style/signinOrUp/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import instance from "../api/instance";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import LoadingSpinner from "../style/LoadingSpinner";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Signup = () => {
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

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    (newUser) => {
      console.log("mutate ON");
      return axios.post("http://13.113.67.140:8080", newUser);
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
  // if (isError) {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }
  // if (isSuccess) {
  //   navigate("/login");
  // }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      loginId: "yshong2006",
      password: "123asdASD!@#",
      nickname: "닉네임",
    };
    console.log(data);
    const res = await axios.post(
      "http://13.113.67.140:8080/api/users/signup",
      data
    );
    console.log(res);
  };

  return (
    <FormStyle>
      <div className="form-structor">
        <form onSubmit={onSubmitHandler} className="signup">
          <h2 className="form-title" id="signup">
            <span>or</span>회원가입
          </h2>
          <div className="form-holder">
            <input
              type="text"
              className="input"
              placeholder="닉네임"
              name="nickname"
            />
            <input
              type="text"
              className="input"
              placeholder="아이디"
              name="loginId"
            />
            <input
              type="password"
              className="input"
              placeholder="비밀번호"
              name="password"
            />
          </div>
          <button className="submit-btn" type="submit" disabled={isSubmitting}>
            회원가입
          </button>
        </form>
        <div className="login slide-up">
          <form
            className="center"
            onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <h2 className="form-title" id="login">
              <span>or</span>로그인
            </h2>
            <div className="form-holder">
              <input
                type="text"
                className="input"
                placeholder="아이디"
                {...register("userId")}
              />
              <input
                type="password"
                className="input"
                placeholder="비밀번호"
                {...register("password")}
              />
            </div>
            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </FormStyle>
  );
};

export default Signup;

const FormStyle = styled.div``;

// const FormStyle = styled.div`
//   @import url("https://fonts.googleapis.com/css?family=Fira+Sans");

//   position: relative;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: "Fira Sans", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

//   .form-structor {
//     background-color: #222;
//     border-radius: 15px;
//     height: 550px;
//     width: 350px;
//     position: relative;
//     overflow: hidden;
//     /* border: solid 1px #c0c0c0; */

//     &::after {
//       content: "";
//       opacity: 0.8;
//       position: absolute;
//       top: 0;
//       right: 0;
//       bottom: 0;
//       left: 0;
//       background-color: #fff;
//     }

//     .signup {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       -webkit-transform: translate(-50%, -50%);
//       width: 65%;
//       z-index: 5;
//       -webkit-transition: all 0.3s ease;

//       &.slide-up {
//         top: 5%;
//         -webkit-transform: translate(-50%, 0%);
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-holder,
//       &.slide-up .submit-btn {
//         opacity: 0;
//         visibility: hidden;
//       }

//       &.slide-up .form-title {
//         font-size: 1em;
//         cursor: pointer;
//       }

//       &.slide-up .form-title span {
//         margin-right: 5px;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;
//       }

//       .form-title {
//         color: #fff;
//         font-size: 1.7em;
//         text-align: center;

//         span {
//           color: rgba(0, 0, 0, 0.4);
//           opacity: 0;
//           visibility: hidden;
//           -webkit-transition: all 0.3s ease;
//         }
//       }

//       .form-holder {
//         border-radius: 15px;
//         background-color: #fff;
//         overflow: hidden;
//         margin-top: 50px;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;

//         .input {
//           border: 0;
//           outline: none;
//           box-shadow: none;
//           display: block;
//           height: 30px;
//           line-height: 30px;
//           padding: 8px 15px;
//           border-bottom: 1px solid #eee;
//           width: 100%;
//           font-size: 12px;

//           &:last-child {
//             border-bottom: 0;
//           }
//           &::-webkit-input-placeholder {
//             color: rgba(0, 0, 0, 0.4);
//           }
//         }
//       }

//       .submit-btn {
//         background-color: rgba(0, 0, 0, 0.4);
//         color: rgba(256, 256, 256, 0.7);
//         border: 0;
//         border-radius: 15px;
//         display: block;
//         margin: 15px auto;
//         padding: 15px 45px;
//         width: 100%;
//         font-size: 13px;
//         font-weight: bold;
//         cursor: pointer;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;

//         &:hover {
//           transition: all 0.3s ease;
//           background-color: rgba(0, 0, 0, 0.8);
//         }
//       }
//     }

//     .login {
//       position: absolute;
//       top: 20%;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background-color: black;
//       z-index: 5;
//       -webkit-transition: all 0.3s ease;

//       &::before {
//         content: "";
//         position: absolute;
//         left: 50%;
//         top: -20px;
//         -webkit-transform: translate(-50%, 0);
//         background-color: black;
//         width: 200%;
//         height: 250px;
//         border-radius: 50%;
//         z-index: 4;
//         -webkit-transition: all 0.3s ease;
//       }

//       .center {
//         position: absolute;
//         top: calc(50% - 10%);
//         left: 50%;
//         -webkit-transform: translate(-50%, -50%);
//         width: 65%;
//         z-index: 5;
//         -webkit-transition: all 0.3s ease;

//         .form-title {
//           color: #fff;
//           font-size: 1.7em;
//           text-align: center;

//           span {
//             color: rgba(0, 0, 0, 0.4);
//             opacity: 0;
//             visibility: hidden;
//             -webkit-transition: all 0.3s ease;
//           }
//         }

//         .form-holder {
//           border-radius: 15px;
//           background-color: #fff;
//           border: 1px solid #eee;
//           overflow: hidden;
//           margin-top: 50px;
//           opacity: 1;
//           visibility: visible;
//           -webkit-transition: all 0.3s ease;

//           .input {
//             border: 0;
//             outline: none;
//             box-shadow: none;
//             display: block;
//             height: 30px;
//             line-height: 30px;
//             padding: 8px 15px;
//             border-bottom: 1px solid #eee;
//             width: 100%;
//             font-size: 12px;

//             &:last-child {
//               border-bottom: 0;
//             }
//             &::-webkit-input-placeholder {
//               color: rgba(0, 0, 0, 0.4);
//             }
//           }
//         }

//         .submit-btn {
//           background-color: #949494;
//           color: rgba(256, 256, 256, 0.7);
//           border: 0;
//           border-radius: 15px;
//           display: block;
//           margin: 15px auto;
//           padding: 15px 45px;
//           width: 100%;
//           font-size: 13px;
//           font-weight: bold;
//           cursor: pointer;
//           opacity: 1;
//           visibility: visible;
//           -webkit-transition: all 0.3s ease;

//           &:hover {
//             transition: all 0.3s ease;
//             background-color: rgba(0, 0, 0, 0.8);
//           }
//         }
//       }

//       &.slide-up {
//         top: 90%;
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .center {
//         top: 10%;
//         -webkit-transform: translate(-50%, 0%);
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-holder,
//       &.slide-up .submit-btn {
//         opacity: 0;
//         visibility: hidden;
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-title {
//         font-size: 1em;
//         margin: 0;
//         padding: 0;
//         cursor: pointer;
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-title span {
//         margin-right: 5px;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;
//       }
//     }
//   }
// `;
