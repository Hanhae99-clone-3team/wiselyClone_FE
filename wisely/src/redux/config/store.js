import { combineReducers, configureStore } from "@reduxjs/toolkit";

// 리듀서 통합
const rootReducer = combineReducers({
  
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  
});

export default store;
