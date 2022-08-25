import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import DetailDesc from "./DetailDesc";
import CommentsList from "./CommentList";

const DetailItem=()=> {  
  const { id } = useParams();
  const navigate=useNavigate();


  const[item, setItem]=useState(
    { 
      itemAvgRate: 0,
      itemDesc: "",
      itemDetailImg1: "",
      itemDetailImg2: "",
      itemId: 0,
      itemImgUrl: "",
      itemName: "",
      itemPrice: 0,
      itemReviewCount: 0
   }
   );

   const URI = process.env.REACT_APP_BASE_URI;
   const getitem = async (id) => {
    const res = await axios.get(`${URI}/items/detail/${id}`);    
    return setItem(res.data);
}

  useEffect(() => {
    getitem(id);
   }, []);
     
   
   const config = {
     headers: {
       Authorization: localStorage.getItem("Authorization"),
       RefreshToken: localStorage.getItem("RefreshToken")
     },
   }
console.log(config)

const buyhandler=(id)=> {
  putItemToCart(id)
 return navigate("/cart")

}
  const putItemToCart=async (itemId)=>{
    const res = await axios.post(`${URI}/items/detail/order/${itemId}`,
   config
     );  
     console.log(res);     
    return res
}


 const ratingToPercent= item.itemAvgRate * 20;
    

    return (
      <StDetilWrapper>
      <StItemWrapper>
        <div
          className="img"
          style={{ backgroundImage: `url(${item.itemImgUrl})` }}
        />
        <StItemRight>
          <div className="rightTop">
          <div className="nameBox">{item.itemName}</div>
          <div className="DescBox">{item.itemDesc}</div>
          </div>
          <StrigthBottom>
              <div className="rateAndPrice">
                <div className="rate">
                <div className="star-ratings">
                  <div
                    className="star-ratings-fill space-x-2 text-lg"
                    style={{ width: ratingToPercent + '%' }}
                  >
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div className="star-ratings-base space-x-2 text-lg">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <div className="reviewcount">({item.itemReviewCount})</div>
              </div>
              <div className="price">{item.itemPrice}원</div>
              </div>
              <div className="buttonset">
                <button onClick={()=>{putItemToCart(item.itemId)}}>장바구니 담기</button>
              <button onClick={()=>buyhandler(item.itemId)}>바로 구매하기</button>
              </div>

          </StrigthBottom>
          </StItemRight>
      </StItemWrapper>
      <DetailDesc itemDetailImg1={item.itemDetailImg1} itemDetailImg2={item.itemDetailImg2} />
      <CommentsList itemReviewCount={item.itemReviewCount}/>
      </StDetilWrapper>
    );
  }
  
  export default DetailItem;
const StDetilWrapper = styled.div`
align-items: center;
`
const StItemWrapper = styled.div`
      display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 102px 30px 20px 30px;
    padding: 0 120px;
    height: 50vw;
    min-height: auto;
    max-height: 570px;
    .img{
      height: 480px;
       width: 480px;
       max-width: 50%;
       margin-right: 100px;
      background-color: #f7f6f5;
      box-sizing: border-box;
      position: relative;
      background-position: center;
      background-size: cover;
    }
    .nameBox{
      margin-top: 16px;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    }
    .DescBox {
    margin-top: 24px;
    font-size: 20px;
    color: #838383;

    }
    .rigthbottombox{
      width: 100%;
      display: flex;
      justify-content: space-between;
     align-items: center;
    }
    .rateAndPrice{
      display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .rate{
      display: flex;
    }
    .star-ratings {
   
  color: #aaa9a9; 
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: 	#E2E2E2;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: transparent;
}
 
.star-ratings-fill {
  color: #fff58c;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: gold;
}
 
.star-ratings-base {
  z-index: 0;
  padding: 0;
}
.reviewcount{
  font-size: 14px;
    font-weight: 400;
    letter-spacing: -3%;
    line-height: 26px;
    color: #cbcbcb;
}
.price{
    font-size: 20px;
    font-weight: 700;
}
.buttonset{
  margin-top: 34px;
  padding:0 5px;
  display: flex;
    justify-content: space-between;
    button{
    font-size: 18px;
    line-height: 28px;
    line-height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #1c1c1c;
    width: 100%;
    height: 58px;
    outline: none;
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    padding: 0;
   
    
    width: calc(50% - 4px);
    
    }

}
`
const StItemRight =styled.div`
     padding: 0;
    width: 400px;
    max-width: 50%;
    height: 100%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`


const StrigthBottom=styled.div`

`