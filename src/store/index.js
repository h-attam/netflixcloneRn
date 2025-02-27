import {configureStore} from '@reduxjs/toolkit';
import whatchListSlice from './slice/whatchListSlice';
import moviesSlice from './slice/moviesSlice';

const store = configureStore({
  reducer: {
    whatchList: whatchListSlice,
    movies: moviesSlice,
  },
});

export default store;
