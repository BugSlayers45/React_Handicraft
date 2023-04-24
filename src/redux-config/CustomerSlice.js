import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:"customer",
    initialState:{
        currentCustomer:null
    },
    reducers :{
        setCustomer:(state,action)=>{
            state.currentCustomer=action.payload
        },
        signOut:(state,action)=>{
            state.currentCustomer=null
        }
    }
})

export const {setCustomer,signOut}=slice.actions
export default slice.reducer;