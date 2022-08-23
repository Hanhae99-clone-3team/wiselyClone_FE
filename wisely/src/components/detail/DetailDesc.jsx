import { useState } from "react";
import styled from "styled-components";

// 디테일 페이지, 상세 펼쳐보기 버튼, 평균별점, 후기 개수
const DetailDesc=({itemDetailImg1, itemDetailImg2})=> {
    const [isDesc,setIsDsc]=useState(false);
    const isDeschandler=()=> {
        setIsDsc(!isDesc)
    }
    return(
        <Wrapper>
            <img src={itemDetailImg1} alt="item" />
            {isDesc?(
            <>
                 <img src={itemDetailImg2} alt="item" />
                <button onClick={isDeschandler}>상세페이지 접기</button>
            </> 
            ):(
                <button onClick={isDeschandler}>상세페이지 펼쳐보기</button>
            )}
            
        </Wrapper>
    )
}

export default DetailDesc;

const Wrapper=styled.div`
     align-items: center;
     width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    text-align:center;
    img{
    margin-bottom: -10px;
    width:600px;
     
    }
    button {
       
        margin: 20px auto;
        font-size: 18px;
    font-weight: 400;
    letter-spacing: -3%;
    line-height: 28px;
    line-height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1c1c1c;
    background-color: #fff;
    border: 1px solid #1c1c1c;
    width: 100%;
    height: 58px;
    width: 400px;
    max-width: 100%;
    }

`