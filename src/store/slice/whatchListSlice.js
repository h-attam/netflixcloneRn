import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  whatchList: [
    {
      id: 1,
      title: 'All',
    },
  ],
};

const whatchListSlice = createSlice({
  name: 'whatchList',
  initialState,
  reducers: {
    addNewList: (state, action) => {
      state.whatchList = [...state.whatchList, action.payload];
    },
  },
});
export const {addNewList} = whatchListSlice.actions;
export default whatchListSlice.reducer;
