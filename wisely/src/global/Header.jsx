import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Header = (props) => {
  const navigate = useNavigate();

  const Token = localStorage.getItem("Authorization");
  console.log(Token);
  // useEffect(() => {
  //   if (userToken) {
  //     dispatch(getUserDetails())
  //   }
  // }, [userToken, dispatch])

  
  return (
    <StHeaderWrap className="header">
      <StContent>
    <StMenu>
        <h2 onClick={() => navigate("/")}>WISELY</h2>
        <p>제품보기</p>
        </StMenu>
      
      <div className="loginFlexBox">
        {Token ? (
            <p  onClick={() => navigate("/profile")}>
              마이페이지
            </p>
          
        ) : (
          <p onClick={()=> navigate("/login")}>
            로그인
          </p>
        )} 
          <p onClick={()=> navigate("/cart")}>장바구니</p>
      </div>
      </StContent>
    </StHeaderWrap>
  );
};

export default Header;

const StHeaderWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    padding: 0 16px;
    width: 1140px;
    height: 68px;
    background-color: transparent;
  box-sizing: border-box;
  max-width: 1140px;
  min-width: 800px;
  margin: 0 auto;
  position: relative;
  
  h2 {
    
    
    margin-right: 80px;
    font-family: SpoqaHanSansNeo,Roboto,Helvetica Neue,sans-serif!important;
    font-style: normal;
    font-stretch: normal;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    /* font-family: "Roboto Mono", monospace; */
  }
  p {
    color: #1c1c1c;
    font-family: SpoqaHanSansNeo,Roboto,Helvetica Neue,sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -3%;
    line-height: 24px;
    margin-right: 24px;
    cursor: pointer;
  }
  button {
    background-color: #fff;
    color: #094067;
    border: none;
    padding: 1.2rem 2rem;
    border-radius: 10px;

    font-size: 1.1rem;
    font-weight: 700; 
    cursor: pointer;
    transition: all 0.4s;
    :hover {
      box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
      background-color: #3da9fc;
      color: #fff;
    }
  }
  .loginFlexBox {
    border-radius: 10px;
    display: flex;
    gap: 7px;
    .sign {
      padding: 15px 25px;
      border-radius: 10px;
      transition: all 0.4s;
      :hover {
        cursor: pointer;
        background-color: #3da9fc;
        color: #fff;
      }
    }
  }
`;

const StContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    height: 50px;
    background-color: transparent;
    width: 1000px;
  
 
`
const StMenu=styled.div`
  display: flex;
  align-items: center;
`