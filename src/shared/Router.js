import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Signup from "../pages/Signup";
import MainHome from "../pages/MainHome";
import Review from "../pages/Review";
import Detail from "../pages/Detail";

const {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} = require("react-router-dom");

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/review" element={<Review />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
