import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMeApi, loginApi, registerApi } from "../api/AuthAPI";


//error 
const getErrorMessage = (error) => {
  const err = error.response?.data;
  return (
    err?.errors?.[0]?.msg ||
    err?.message ||
    "Something went wrong. Please try again."
  );
};

// register 
export const registerActionapi = createAsyncThunk(
  "auth/register",
  async (data , thunkApi)=>{
    try {
        const res = await registerApi(data)
        return res.data.data
    } catch (error) {
        return thunkApi.rejectWithValue(getErrorMessage(error))
    }
  }
)


//login 
export const loginActionApi = createAsyncThunk(
    "auth/login",

    async(data , thunkApi)=>{
        try {
            const res = await loginApi(data)
            return res.data.data
        } catch (error) {
            return thunkApi.rejectWithValue(getErrorMessage(error))
        }
    }
)

//getme
export const getMeActionApi = createAsyncThunk(
    "auth/me",
    async(data , thunkApi) =>{
        try {
             const res = await getMeApi();
             return res.data.data
        } catch (error) {
            return thunkApi.rejectWithValue(getErrorMessage(error))
        }
    }
)