import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const UserHeader = (props) => {
  const navigate = useNavigate();

  
  return (
    <StHeaderWrap className="header">
      <StHeader onClick={() => navigate("/")}>WISELY</StHeader>
    </StHeaderWrap>
  );
};

export default UserHeader;

const StHeaderWrap = styled.div`
 height: 68px;
 display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    padding: 0 16px;
    width: 100%;
    z-index: 8001;
    height: 60px;
    background-color: transparent;
    transition: top .4s ease-in-out,background-color .4s ease-in-out .4s;
`;

const StHeader = styled.div`
    width: 100%;
    max-width: 1140px;

`