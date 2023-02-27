<<<<<<< HEAD
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Signup from "../pages/Signup";
=======
import Signin from "../pages/MainHome";
>>>>>>> 856384169bbae5ab0513491a8ce3b50c755bf57d

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
