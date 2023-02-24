import Signin from "../pages/Signin";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/singin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
