
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from "./Comment";
import Pagination from "./Pagination";
import styled from "styled-components";
import axios from 'axios';

function CommentsList({itemReviewCount}) {
    const [commentList, setCommentList]=useState([ {
        commentId: 0,
        comment: "",
        name : "",
        createdAt:"",
        age: "",
        commentRate: 0
    },
    
        ]);
    //    console.log(commentList)
  //페이지네이션
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const { id } = useParams();


  useEffect(() => {
    getcommentList({id, page});
  }, [page]);
  const URI = process.env.REACT_APP_BASE_URI;
  const getcommentList = async (data) => {
    const res = await axios.get(`${URI}/items/detail/comments/${data.id}?page=${data.page-1}&size=5`);
    console.log(res.data.comments)       
    return setCommentList(res.data.comments);
}




console.log(itemReviewCount)
    return (
      <StCommentsList className="StCommentsList">
            {commentList.map((comment,i) => (
            <Comment key={i} comment={comment} />
          ))}
          <footer>
            <Pagination
              total={itemReviewCount}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
          </StCommentsList>
    );
  }
  
  export default CommentsList;

const StCommentsList = styled.div``;
