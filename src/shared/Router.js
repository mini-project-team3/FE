import Signin from "../pages/Signin";
import Review from "../pages/Review";
import Detail from "../pages/Detail";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/singin" element={<Signin />} />
        <Route path="/review" element={<Review />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
