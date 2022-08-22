import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const accesstoken = localStorage.getItem("Authorization");
const refreshtoken = localStorage.getItem("RefreshToken");

const URI = process.env.REACT_APP_BASE;

// const gettotalitems =  () => {
//     console.log(1)
//       const res =  axios.get(`${URI}/home/main`);
//       console.log(res)      
//       return setItemList(res.data.items);
//   }


  export const __gettatalitem = createAsyncThunk("ADD_POST", 
    async () => {
    const res = await axios.post(`${URI}/home/main`);
    return res.data;
  });