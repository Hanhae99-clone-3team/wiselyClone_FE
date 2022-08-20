import styled from "styled-components";
import React, {useRef, useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { userLogin } from "../../redux/modules/userActions";
//  
// import Error from "../../components/Error";

function Login() {
    const [emailOpen, setEmailOpen]=useState(false);
    const [isEmail,setIsEmail]=useState(false);

 
    const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, errors },
    
  } = useForm({ mode: "onChange" });
  

  const navigate = useNavigate();
  const watchEmail = watch("email", false);
  const watchPassWord = watch("password", false);

  // redirect authenticated user to profile screen
//   useEffect(() => {
//     if (userToken) {
//       navigate("/");
//     }
//   }, [navigate, userToken]);
    const URI = process.env.REACT_APP_BASE_URI;
  
    const [loginfail, setLoginfail]=useState();
    const submitForm = async (data) => {
        if (data.password === undefined) {
            const res = await axios.get(`${URI}/emailcheck`
            //  , { email: data.email }
            );
           
            return res.data.success ? setIsEmail(true) : navigate("/register");
        } else {
            const res2 = await axios.get(`${URI}/memberslogin`,
                // {
                //     email: data.email,
                //     password: data.password
                // }
                )
                console.log(res2)
            // localStorage.setItem("Authorization", res2.headers.authorization);
            // localStorage.setItem("RefreshToken", res2.headers.refreshtoken);
            return res2.data.success ? navigate("/"): setLoginfail(res2.data.msg);
        }

    // dispatch(userLogin(data));
  };

// console.log(Boolean(!watchEmail))
// console.log(Boolean(errors.email))
// console.log(!watchEmail || errors.email)
console.log(loginfail);
  return (
    <StLoginBox className="login" >
      {/* {error && <Error>{error}</Error>} */}
      <div className="signBox">
       <LoginH1>
        로그인 및 회원가입을
        시작합니다.
       </LoginH1>
      </div>
      <KakaoButton>카톡으로 쉽게 로그인하기</KakaoButton>
      
        <EmailBox>
        <div>이메일로 시작하기</div>
        <button onClick={()=>{setEmailOpen(!emailOpen)}}>버튼</button>
        </EmailBox>
        {emailOpen &&
            <div className="inputbox">
                  <form onSubmit={handleSubmit(submitForm)}>

                      <input
                          name="email"
                          type="text"
                            placeholder="이메일"
                          aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
                          {...register("email", {
                              required: "이메일은 필수 입력입니다.",                     
                              pattern: {
                                  value: /\S+@\S+\.\S+/,
                                  message: "이메일 형식에 맞지 않습니다.",
                              },
                          })}
                      />
                      {errors.email && <small role="alert">{errors.email.message}</small>}
                     
                      {!isEmail && <LoginButton 
                                    type="submit"
                                    disabled={!watchEmail || errors.email}
                      >다음</LoginButton>}
                      {isEmail && (<>
                          <div className="inputbox">
                              <input
                                  name="password"
                                  type="password"
                                  {...register("password")}
                                  placeholder="비밀번호(6자이상)"
                                  aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
                                  {...register("password", {
                                      required: "비밀번호는 필수 입력입니다.",
                                      minLength: {
                                          value: 6,
                                          message: "6자리 이상 비밀번호를 사용하세요.",
                                      },
                                  })}
                              />
                              {errors.password && <small role="alert">{errors.password.message}</small>}
                              {loginfail && <small role="alert">{loginfail}</small>}
                          </div>
                          <LoginButton type="submit" disabled={isSubmitting||!watchEmail || !watchPassWord || errors.email || errors.password}>
                              로그인
                          </LoginButton>

                      </>)}
                  </form>

              </div>
          }


      </StLoginBox>
  );
}

export default Login;

const StLoginBox = styled.div`

    span {
   
      padding: 5px 10px;
      margin-right: 30px;
      transition: all 0.4s;
    }
  
  .inputbox {
    
    margin-bottom: 38px;
  }
  form {
    
    margin-top: 52px;
  }
 
  p {

    margin-bottom: 0;
  }
  input {
  
    width: 100%;
    border: none;
    outline: none;
    height: 40px;
    font-size: 20px;
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
    background: none;
  }

`;

const LoginH1 =styled.h1`
    font-size: 42px;
    font-weight: 300;
    letter-spacing: -.04em;
    line-height: 54px;
    color: #1c1c1c;
    padding: 68px 0;
`

const KakaoButton =styled.button`
    width: 400px;
    height: 60px;
    margin-bottom: 12px;
    background-color: yellow;
    border: none;
    outline: none;
    border-radius: 10px;
`
const EmailBox=styled.div`
    display: flex;
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginButton=styled.button`
    margin-top: 28px;
       font-size: 18px;
    font-weight: 400;
    letter-spacing: -.04em;
    line-height: 26px;
    line-height: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #1c1c1c;
    width: 100%;
    height: 60px;
    width: 400px;
    max-width: 100%;
   
    opacity: ${props=> props.disabled? 0.6: 1};
    cursor:  ${props=> props.disabled? `not-allowed`:`pointer`}
`
