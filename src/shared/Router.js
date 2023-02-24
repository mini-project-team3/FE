import Signup from "../pages/Signup";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  const i = 0;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/singup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
