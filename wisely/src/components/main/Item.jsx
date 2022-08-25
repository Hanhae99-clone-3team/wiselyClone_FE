import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Item({item}) {
  const navigate=useNavigate();

 const ratingToPercent= item.itemRate * 20;
   

    return (
      <StItemWrapper onClick={() => navigate(`/detail/${item.itemId}`)}>
        <div
          className="img"
          style={{ backgroundImage: `url(${item.itemImgUrl})` }}
        />
        <StItemRight>
          <div>
          <div className="nameBox">{item.itemName}</div>
          <div className="DescBox">{item.itemDesc}</div>
          </div>
          <StreviewBox>
      <div className="rigthbottombox">
        <div className="review">
          <div className="star-ratings">
            <div
              className="star-ratings-fill space-x-2 text-lg"
              style={{ width: `${ratingToPercent}%` }}
              // style={{ width: '${ratingToPercent}%'}} 
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
           
          </StreviewBox>
         

          </StItemRight>
      </StItemWrapper>
    );
  }
  
  export default Item;

const StItemWrapper = styled.div`
      margin: 32px 60px;
  
    width: calc(50% - 120px);
    display: flex;
    cursor: pointer;
    .img{
      height: 240px;
       width: 240px;
      background-color: #f7f6f5;
      box-sizing: border-box;
      position: relative;
      background-position: center;
      background-size: cover;
    }
    .nameBox{
      color: #1c1c1c;
    font-family: SpoqaHanSansNeo,Roboto,Helvetica Neue,sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -3%;
    line-height: 28px;
    }
    .DescBox {
      margin-top: 6px;
      word-break: keep-all;
    color: #1c1c1c;
    font-family: SpoqaHanSansNeo,Roboto,Helvetica Neue,sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -3%;
    line-height: 22px;
    color: #838383;

    }
    .rigthbottombox{
      width: 100%;
      display: flex;
      justify-content: space-between;
    align-items: center;
    }
    .review{
      display: flex;
    }

    .star-ratings {
  color: #aaa9a9; 
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: 	#E2E2E2; /* Will override color (regardless of order) */
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
  color: #1c1c1c;
    font-family: SpoqaHanSansNeo,Roboto,Helvetica Neue,sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -3%;
    line-height: 30px;
}
`
const StItemRight =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 0 8px 16px;
  width: 100%;
`


const StreviewBox=styled.div`
  display: flex;
`