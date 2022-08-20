import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
// import comments from "../modules/commentSlice";
// import items from "../modules/itemSlice";


import logger from "redux-logger";
// 리듀서 통합
const rootReducer = combineReducers({
//     items,
//   comments,

  user
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
