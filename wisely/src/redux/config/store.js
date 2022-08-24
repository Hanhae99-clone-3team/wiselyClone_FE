import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
// 리듀서 통합
const rootReducer = combineReducers({
  user
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  
});

export default store;
