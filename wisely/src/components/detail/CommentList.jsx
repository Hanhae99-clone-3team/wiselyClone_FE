
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from "./Comment";
import Pagination from "./Pagination";
import styled from "styled-components";
import axios from 'axios';

function CommentsList() {
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
    getcommentList(id);
  }, []);
  const URI = process.env.REACT_APP_BASE_URI;
  const getcommentList = async (id) => {
    const res = await axios.get(`${URI}/items/detail/comments/${id}`);
    console.log(res)       
    return setCommentList(res.data.comments);
}





    return (
      <StCommentsList className="StCommentsList">
            {commentList.map((comment,i) => (
            <Comment key={i} comment={comment} />
          ))}
          <footer>
            <Pagination
              total={commentList.length}
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
