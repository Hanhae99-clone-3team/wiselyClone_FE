import Register from "../components/user/Register";
import UserHeader from "../global/UserHeader";
import styled from "styled-components";

function RegisterPage() {
    return (
        <StBackground>
            <UserHeader />
            <StLoginBox>
                <Register />
            </StLoginBox>
        </StBackground>
    );

}

export default RegisterPage;


const StBackground = styled.div`
      min-height: 1000px;
    background-image: url(https://wiselystatic.s3.amazonaws.com/WHALE/prod/assets/images/auth/signIn/companySignInBg.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 889px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    z-index: -10;


`

const StLoginBox = styled.div`
     position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 400px;
    min-height: 780px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 24px #00000014;
    margin-left: 17vw;
    box-shadow: 0 0 #00000014;
    max-width: 500px;
    padding: 0 50px;
   
`;
