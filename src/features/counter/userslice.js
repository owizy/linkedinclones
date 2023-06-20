import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  name:"user",
  isloading:true
};


export const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
    
    logout: (state) => {
      state.user= null;
    },
    setLoading :(state,action)=>{
      state.isloading = action.payload
    }
  },
});

export const { login,logout,setLoading } = userslice.actions;

export const selectuser = (state) => state.user.user;


export default userslice.reducer;
