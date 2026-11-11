import { createSlice } from "@reduxjs/toolkit"
import { getMeActionApi, loginActionApi, registerActionapi } from "./authActions";

const authSlice = createSlice({
  name:"auth",

  initialState:{
    user: null,
    accessToken:null,
    isAuthCheck:false,
    isLoading:false,
    error:null,

  },

  reducers:{

    // after 15m when refrsh api trigger then it stores the updated user and accesstoken
    setCredentials: (state , action) =>{
      state.user = action.payload.user;
      state.accessToken =  action.payload.accessToken;
    },
    // if refresh fail then user and accessToken will be null
    logout:(state) =>{
      state.user = null
      state.accessToken = null
    }
  },

  extraReducers:(builder) =>{
    // register
    builder
    .addCase(registerActionapi.pending , (state) =>{
      state.isLoading = true;
      state.error = null;
    })
    .addCase(registerActionapi.fulfilled , (state , action)=>{
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    })
    .addCase(registerActionapi.rejected , (state , action)=>{
      state.isLoading = false;
      state.error = action.payload;

    })

    // login
    .addCase(loginActionApi.pending , (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(loginActionApi.fulfilled , (state , action)=>{
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    })
    .addCase(loginActionApi.rejected , (state , action)=>{
      state.isLoading = false;
      state.error = action.payload;
    })

    .addCase(getMeActionApi.pending , (state )=>{
      state.isLoading = true;
      state.error = null;
    } )

    .addCase(getMeActionApi.fulfilled , (state , action) => {
      state.isLoading = false
      state.user = action.payload.user;
      state.isAuthCheck = true;
    })

    .addCase(getMeActionApi.rejected , (state)=>{
      state.isLoading = false;
      state.isAuthCheck = true;
      state.user = null;
      state.accessToken = null;
    })

  }
})
export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

