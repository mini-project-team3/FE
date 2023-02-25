import Signin from "../pages/MainHome";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
