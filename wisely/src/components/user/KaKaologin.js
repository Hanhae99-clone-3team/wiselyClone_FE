import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KaKaoLogin= ()=> {
const location =useLocation();
const navigate=useNavigate();
const KAKAO_CODE = location.search.split('=')[1];
const URI = process.env.REACT_APP_BASE_URI;
useEffect(()=> {
    axios(`${URI}/members/kakaoSignup`)
})
}

export default KaKaoLogin;