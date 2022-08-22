import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


// import { userLogin } from "../../redux/modules/userActions";
//  
// import Error from "../../components/Error";

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { isSubmitting, isDirty, errors },
    } = useForm({ mode: "onChange" });
    const watchEmail = watch("email", false);
    const watchPassWord = watch("password", false);
    const watchBirth = watch("birth", false);
    const watchName = watch("name", false);
   const [registerFail, setRegisterFail]=useState();
   console.log(watchBirth)

    const navigate = useNavigate();


    const URI = process.env.REACT_APP_BASE_URI;

    
    const submitForm = async (data) => {

         await axios.post(`${URI}/members/signup`, 
                { email: data.email,
                password: data.password,
                birthday: String(data.birth),
                name: data.name 
                 }
        );  
        const res = await axios.post(`${URI}/members/login`,
        {
            email: data.email,
            password: data.password
        }
        )
        console.log(res) 
    localStorage.setItem("Authorization", res.headers.authorization);
    localStorage.setItem("RefreshToken", res.headers.refreshtoken);
    
        return res.data.success ? navigate("/") : setRegisterFail(res.data.msg);
    }





    return (
        <StRegisterBox>
            {/* {error && <Error>{error}</Error>} */}

            <LoginH1>
                처음이시군요.
                가입을 진행합니다.
            </LoginH1>

            <div className="inputbox">
                <form onSubmit={handleSubmit(submitForm)}>
                    {/* 아이디 인풋 */}
                    <div className="inputbox">
                        <label>아이디</label>
                        <input
                            name="email"
                            type="email"
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
                    </div>

                    {/* 비밀번호 인풋 */}
                    <div className="inputbox">
                        <label>비밀번호</label>
                        <input
                            name="password"
                            type="password"
                            {...register("password")}
                            placeholder="비밀번호(6자이상)"
                            aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
                            {...register("password", {
                                required: "비밀번호는 필수 입력 창입니다.",
                                minLength: {
                                    value: 6,
                                    message: "6자리 이상 비밀번호를 사용하세요.",
                                },
                            })}
                        />
                        {errors.password && <small role="alert">{errors.password.message}</small>}
                    </div>
                    {/* 생년월일 인풋 */}
                    <div className="inputbox">
                        <label>생년월일 6자리</label>
                        <input
                            name="birth"
                            type="text"
                            {...register("birth")}
                            placeholder="예: 971229"
                            aria-invalid={!isDirty ? undefined : errors.birth ? "true" : "false"}
                            {...register("birth", {
                                required: "만14세 미만 여부 확인을 위한 필수 입력 값입니다.",
                                maxLength: {
                                    value: 6
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "생년월일을 올바르게 입력하세요",
                                },
                            })}
                        />
                        {errors.birth && <small role="alert">{errors.birth.message}</small>}
                        <div className="inputbox"></div>

                    </div>


                    {/* 이름 인풋 */}
                    <div className="inputbox">
                        <label>이름</label>
                        <input
                            name="name"
                            type="text"
                            {...register("name")}
                            placeholder="이름"
                            aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
                            {...register("name", {
                                required: "이름은 필수 입력입니다.",
                                pattern: {
                                   value: /^[가-힣]|[a-zA-Z]+$/,
                                   message: "이름을 올바르게 입력하세요"
                                    
                                }
                            })}
                        />
                        {errors.name && <small role="alert">{errors.name.message}</small>}
                    </div>


                    <RegisterButton type="submit"
                        disabled={isSubmitting || !watchEmail || !watchPassWord || !watchBirth ||!watchName
                        || errors.email || errors.password ||errors.birth||errors.name }>
                        가입완료
                    </RegisterButton>
                    {registerFail &&<small role="alert">{registerFail}</small>}


                </form>

            </div>



        </StRegisterBox>
    );
}

export default Register;

const StRegisterBox = styled.div`

    span {
   
      padding: 5px 10px;
      margin-right: 30px;
      transition: all 0.4s;
    }
  

    .inputbox {
        margin-top: 34px;
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

const LoginH1 = styled.h1`
    font-size: 42px;
    font-weight: 300;
    letter-spacing: -.04em;
    line-height: 54px;
    color: #1c1c1c;
    padding: 68px 0 0 0;
`


const RegisterButton = styled.button`
    margin-top: 48px;
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
   
    opacity: ${props => props.disabled ? 0.6 : 1};
    cursor:  ${props => props.disabled ? `not-allowed` : `pointer`}
`
