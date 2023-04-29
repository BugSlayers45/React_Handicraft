import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../WebApi/api";
 
export const fetchCart=createAsyncThunk("fetch cart",async(customerId)=>{
    let response=await axios.post(api.VIEW_CART_ITEMS,{customerId})
    console.log(response.data[1] +"this is crt items")
    return response.data[0].cartItems
})
  


export const addItemIntoCart=createAsyncThunk("cart/addItemcart",async(obj)=>{
    let response=await axios.post(api.ADD_TO_CART,{userId:obj.userId,productId:obj.productId})
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
        const itemIndex= state.cartItems.findIndex(item=>item.id===action.payload.id)
    //   if(itemIndex>=0){
    //     state.cartItems[itemIndex].cartQuantity +=1}
    //   else{
    //     const tempProduct={...action.payload, cartQuantity:1}
    //     state.cartItems.push(tempProduct);
    //    }
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
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