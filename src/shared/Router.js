import Signup from "../pages/Signup";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=`${process.env.REACT_APP_BASEURL}/users/signup` element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router