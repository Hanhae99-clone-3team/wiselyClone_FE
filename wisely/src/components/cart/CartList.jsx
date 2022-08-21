import styled from "styled-components";

const CartList = () => {
    return (
        <div>
            <StMenuWrapper>
                장바구니
            </StMenuWrapper>
            <CartBackground>
                <div className="cartList">
                    <img src="https://www.wiselycompany.com/assets/images/cart/emptyBox.png" alt="item" />
                    <div className="emptyCartText">담은상품이 없습니다:(</div>
                    <button>구매하러 가기</button>
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
    width: 400px;
    max-width: 100%;
    margin-top: 64px;
    }
`