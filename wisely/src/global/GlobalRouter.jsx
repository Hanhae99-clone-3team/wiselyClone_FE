import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import CartPage from "../pages/CartPage"
import MyPage from"../pages/MyPage";
import KaKaoLogin from "../components/user/KaKaologin";




const GlobalRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/" element={<MainPage />}/>
        <Route path="/detail/:id" element={<DetailPage />}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/profile" element={<MyPage />}/>
      <Route path="/kakaoLogin" element={<KaKaoLogin/>}/>
      </Routes>
    </>
  );
};

export default GlobalRouter;
