import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
