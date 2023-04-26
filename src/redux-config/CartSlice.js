import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
export const fetchCart=createAsyncThunk("fetch cart",async(customerId)=>{
    let response=await axios.post("http://localhost:3000/cart/viewCartItems",{customerId})
    console.log(response.data +"this is crt items")
    return response.data[0].cartItems
})
  


export const addItemIntoCart=createAsyncThunk("cart/addItemcart",async(obj)=>{
    let response=await axios.post("http://localhost:3000/cart/add-to-cart",{userId:obj.userId,productId:obj.productId})
    if(response.data.status)
    return response.data

})


const slice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        cartError:null,
        flag:false
    },
    reducers:{
       updateCartItems:(state,action)=>{
        state.cartItems=[...state.cartItems,{productId:action.payload}]
       }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.cartItems=action.payload
        }).addCase(fetchCart.rejected,(state,action)=>{
            state.cartError="Something went wrong"
        }).addCase(addItemIntoCart.fulfilled,(state,action)=>{
            state.flag=true;
        }).addCase(addItemIntoCart.rejected,(state,action)=>{
            state.cartError="Opp! Something went Wrong"
        })
    }

})

export const {updateCartItems}=slice.actions;
export default slice.reducer;