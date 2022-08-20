import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import CategoryPage from "../pages/CategoryPage";
import DetailPage from "../pages/DetailPage";
import CartPage from "../pages/CartPage"
import MyPage from"../pages/MyPage";




const GlobalRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/" element={<MainPage />}/>
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path="/detail/:id" element={<DetailPage />}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/profile" element={<MyPage />}/>
      </Routes>
    </>
  );
};

export default GlobalRouter;
