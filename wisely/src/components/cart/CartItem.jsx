import styled from "styled-components";
import axios from "axios";

const CartItem= ( {item, cartList, setCartList})=> {

const plus = () => {
    const newCartList = cartList.map((cur) => {
        if(item.itemId === cur.itemId){
         return{...cur, itemCount: item.itemCount + 1 };
         }else{
             return cur;
         }
     })
     console.log(newCartList)
    return setCartList(newCartList)
  };
  const mius = () => {
    const newCartList2 = cartList.map((cur) => {
        if(item.itemId === cur.itemId){
         return{...cur, itemCount: item.itemCount - 1 };
         }else{
             return cur;
         }
     })

    return item.itemCount<=1 ? 1 : setCartList(newCartList2)
  };
  console.log(item.itemCount)
   let config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          RefreshToken: localStorage.getItem("RefreshToken"),
        },
      };
  const URI = process.env.REACT_APP_BASE_URI;
  const __deletecartitem = async (itemid) => {
    const res = await axios.delete(`${URI}/items/cart/${itemid}`, config);
    console.log(res);   
    return itemid;
  }



    return(
    <CartItemWrapper>
        <div
          className="pic"
          style={{ backgroundImage: `url(${item.itemImgUrl})` }}
        />
        <div className="item-right">
           <div className="righttop">
                <div>{item.itemName}</div>
                <button  className="deletebutton" onClick={()=>{__deletecartitem(item.itmeId)}}>x</button>
            </div> 
           <div className="rightbottom">
                <div>{item.itemPrice}원</div>
                <div className="buttonset">
                    <CountButton  onClick={()=>{mius(item.itmId)}}>-</CountButton>
                    <CountDiv>{item.itemCount}</CountDiv>
                    <CountButton onClick={()=>{plus(item.itmId)}}>+</CountButton>
                </div>
            </div>
        </div>
</CartItemWrapper>
)

}

export default CartItem;

const CartItemWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 60px;
    border-bottom: 1px solid #f0f0f0;
    width:600px;
    .pic{
    width: 120px;
    height: 120px;
    background-color: #f7f6f5;
      box-sizing: border-box;
      position: relative;
      background-position: center;
      background-size: cover;
    
    }
    .item-right{
        display: flex;
    flex-direction: column;
    width: 100%;
    }
    .righttop {
        display: flex;
        justify-content: space-between;
    }
    .deletebutton {
        display: inline-block;
        background-color: #fff;
        border:none;
    width: 24pxpx;
    height: 24px;
    cursor: pointer;
   
    }
    .rightbottom {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
    .buttonset {
        display: flex;
    }
 
`
const CountDiv=styled.div`
    width: 24px;
    height: 20px;
   text-align: center;  
   vertical-align: middle;
   border-top:2px solid #f0f0f0;
   border-bottom: 2px solid #f0f0f0;


`

const CountButton=styled.button`
        background-color: #fff;
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid #f0f0f0;
    cursor: pointer;
`