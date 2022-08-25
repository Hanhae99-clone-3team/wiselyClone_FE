import React from "react";
import styled from "styled-components";



const Comment = ({ comment }) => {
    const ratingToPercent = comment.commentRate * 20;

    return (
        <div>
            <StComment>
                <div className="starbox">
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
                </div>
                <p className="commentbox">{comment.comment}</p>
                <div className="commentbottombox">
                    <p> {comment.name}|{comment.age}</p>
                    <p>{comment.createdAt}</p>
                </div>
            </StComment>

        </div>
    )
};

export default Comment;

const StComment = styled.div`
    padding: 40px 0 16px;
    border-bottom: 3px solid #f0f0f0;

  
  .textbox {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
      margin: 0;
      color: #094067;
      font-size: 16px;
    }
  }
  .buttonbox {
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    button {
      padding: 2px 0;
      background-color: #fff;
      border: none;
      border-radius: 7px;
      font-weight: bold;
      :hover {
        background-color: #3da9fc;
      }
    }
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
 .commentbox {
    margin-top: 18px;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
 }
 .commentbottombox{
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    color: #838383;
    display: flex;
    justify-content: space-between;
 }
`;
