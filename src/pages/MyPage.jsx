import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => {
    return state.loginSlice.isLogin;
  });
  useEffect(() => {
    // if (!isLogin) {
    //   navigate("/login");
    // }
  }, []);

  return (
    <div>
      <div>Title: mypage</div>
    </div>
  );
};

export default MyPage;
