import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartList = () => {
    const navigate=useNavigate();
const initial= [
  { 
    itemId: 1,
    itemName : "면도기 스타터세트",
   itemDesc : "면도기 첫 구매 고객 대상",
   itemRate : 3,
   itemReviewCount : 37341,
   itemPrice : 5000,
   itemImgUrl : "https://wiselystatic.s3.amazonaws.com/THUMBNAIL/prod/assets/images/item/101050000/main/ws-startset-navy-pro-main.png",
   itemCount :1
 },
  { 
    itemId: 2,
    itemName : "프레쉬한 바디위시",
   itemDesc : "미끌거림없이 빠르게 씻기는",
   itemRate : 2,
   itemReviewCount : 5000,
   itemPrice : 2000,
   itemImgUrl : "https://wiselystatic.s3.amazonaws.com/THUMBNAIL/prod/assets/images/item/600101000/main/ft-bodywash-fresh-main.png",
    itemCount :1
 }
 ]

    const [cartList, setCartList]=useState(initial);

    // useEffect(()=> {
    //     getCartList()
    // },[])
    // let config = {
    //     headers: {
    //       Authorization: localStorage.getItem("Authorization"),
    //       RefreshToken: localStorage.getItem("RefreshToken"),
    //     },
    //   };
    // const URI = process.env.REACT_APP_BASE_URI;
    // const getCartList = async () => {
    //       const res = await axios.get(`${URI}/items/cart`, config);  
    //       console.log(res)     
    //       return setCartList(res.data.cartitems);
    //   }

    // const saveCarthandler= async (cartId)=> {
    //     const res = await axios.post(`${URI}/items/cart/${cartId}`, cartList, config)
    //     return navigate("/")
    // }

     // const buyCartListhandler= async (cartId)=> {
    //     const res = await axios.post(`${URI}/items/cart/${cartId}`, cartList, config)
    //     return alert("구매완료")
    // }

    const totalPrice= cartList.reduce((acc, cur) => acc + cur.itemPrice*cur.itemCount, 0)
  console.log(totalPrice)

    return (
        <div>
            <StMenuWrapper>
                장바구니
            </StMenuWrapper>
            <CartBackground>
                    <div>

                    </div>
                <div className="cartList">
                    {cartList.length === 0? <>
                    <img src="https://www.wiselycompany.com/assets/images/cart/emptyBox.png" alt="item" />
                    <div className="emptyCartText">담은상품이 없습니다:(</div>
                    <button className="emptybuybutton">구매하러 가기</button>
                    
                    
                    </>:<>{cartList.map((item, i) => (
                        <CartItem key={i} item={item}  cartList={cartList} setCartList={setCartList} />
                    ))}
                    <div className="totalPrice">
                        <div>결제예정금액</div>
                        <div>{totalPrice}원</div>
                    </div>
                    
                    <ButtonSet>
                    <button 
                    // onClick={()=>saveCarthandler(cartList.cartId)}
                    >더담으러 가기</button>
                    <button
                    // onClick={()=>saveCarthandler(cartList.cartId)}
                    >결제하기</button>
                    </ButtonSet>
                    </>}
                    

                    
                </div>


            </CartBackground>
        </div>
    )

}

export default CartList;


const StMenuWrapper = styled.div`
text-align: center;
margin: 60px 0 48px;
font-size: 42px;
font-weight: 700;
letter-spacing: -3%;
line-height: 54px;

`
const CartBackground = styled.div`
        display: flex;
    justify-content: center;
    padding: 0 16px 60px;
    border-top: 1px solid #f0f0f0;
    background: #fafafa;
    .cartList {
    background: #ffffff;
    margin-top: 32px;
    width: 724px;
    max-width: 724px;
    min-height: 578px;
    border-radius: 10px;
    box-shadow: 0 0 14px #00000014;
    overflow: hidden;
    font-family: SpoqaHanSansNeo,Roboto,Helvetica Neue,sans-serif!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    }
    img{
       width: 200px; 
       height: 162px; 
       max-width: 100%; 
       display: block;
    }
    .emptyCartText{
    margin-top: 24px;
    font-size: 22px;
    line-height: 34px;
    color: #838383;
    }
    .emptybuybutton{
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
    width: 400px;
    max-width: 100%;
    margin-top: 64px;
    }
    .totalPrice {
    margin-top: 20px;
    width: 600px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -3%;
    line-height: 30px;
    }
 
`
const ButtonSet=styled.div`
      display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 56px;
    padding-bottom: 40px;
    width: 100%;
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
    width: 200px;
    max-width: 100%;
    margin-top: 64px;
    margin-left: 30px;
    margin-right: 30px;
    cursor:pointer;

    }
`