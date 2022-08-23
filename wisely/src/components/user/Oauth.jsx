
import styled from "styled-components";

const Kakao=()=> {



const REST_API_KEY = "c4f6e24dec4e7fd8840058222b589a57";
const REDIRECT_URI =  "http://localhost:3000/kakaoLogin";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


return(
    <h1>
        <Kakaobutton className="kaako" href={KAKAO_AUTH_URL}><img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          
          alt="kakao"
        /></Kakaobutton>
    </h1>

)

}

export default Kakao;


const Kakaobutton =styled.a`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -.04em;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
 
    

    height: 60px;

    
    color: #1c1c1c;
    border: none;

 img {
  width: 300px;
 }
`
