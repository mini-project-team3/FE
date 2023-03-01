import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Signup from "../pages/User";
import MainHome from "../pages/MainHome";
import Review from "../pages/Review";
import Detail from "../pages/Detail";
import { Routes, Route } from "react-router-dom";
import User from "../pages/User";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/user" element={<User />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/review" element={<Review />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
