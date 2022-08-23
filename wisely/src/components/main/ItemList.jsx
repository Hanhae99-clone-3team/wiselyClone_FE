import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Item from "./Item";

function CategoryHeader() {
  useEffect(() => {
   gettotalitems();
  }, []);




  const [itemList, setItemList]=useState([]);
    const URI = process.env.REACT_APP_BASE_URI;
    const gettotalitems = async () => {
        const res = await axios.get(`${URI}/home/main`);
    
        return setItemList(res.data);
    }

    const getitems = async (categoryname) => {
      console.log(categoryname)
        const res = await axios.get(`${URI}/home/main/${categoryname}`);      
        return setItemList(res.data);
    }
  
    return (
      <div>
         <StMenuWrapper>
                제품보기
        </StMenuWrapper>
        <StCategoryBox>
          <p onClick={() => gettotalitems()}>전체</p>
          <p onClick={() => getitems("면도용품")}>면도용품</p>
          <p onClick={() => getitems("스킨케어")}>스킨케어</p>
          <p onClick={() => getitems("두피케어")}>두피케어</p>
          <p onClick={() => getitems("영양제")}>영양제</p>
          <p onClick={() => getitems("덴탈케어")}>덴탈케어</p>
          <p onClick={() => getitems("바디케어")}>바디케어</p>
        </StCategoryBox>
        <StitemList>
          {itemList.map((item, i) => (
            <Item key={i} item={item} />
              ))}
        </StitemList>
        
        

      </div>
       
   
    );
  }
  
  export default CategoryHeader;
  
  const StMenuWrapper=styled.div`
       text-align: center;
    margin: 60px 0 48px;
    font-size: 42px;
    font-weight: 700;
    letter-spacing: -3%;
    line-height: 54px;
  
  `
const StCategoryBox = styled.div`
  justify-content: center;
  height: 62px;
  display: flex;
    align-items: center;
    padding: 0 12px;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    p{
      padding: 16px 46px;
      cursor: pointer;
    }
`
const StitemList=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 8px;
    width: 100%;
    max-width: 1140px;
`