import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk("fetchwishlist", async (obj) => {
    let response = await axios.post("http://localhost:3000/wishlist/viewwishlist", { customerId: obj.customerId })
    return response.data.wishlist
})



export const addItemInWishlist = createAsyncThunk("addtowishlist", async (obj) => {
    let response = await axios.post("http://localhost:3000/wishlist/addtowishlist", { customerId: obj.customerId, productId: obj.productId })
    if (response.data.status)

        return response.data

})


const slice = createSlice({
    name: "wishlistData",
    initialState: {
        wishlistData: [],
        wishlistError: null,
        flag: false
    },
    reducers: {
        updateWishlistItems: (state, action) => {
            state.wishlistData = [...state.wishlistData, { productId: action.payload }]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWishlist.pending, (state, action) => {
            state.wishlistData = action.payload
        }).addCase(fetchWishlist.fulfilled, (state, action) => {
            state.wishlistData = action.payload
        }).addCase(fetchWishlist.rejected, (state, action) => {
            state.wishlistError = "Something went wrong"
        }).addCase(addItemInWishlist.fulfilled, (state, action) => {
            state.flag = true;
        }).addCase(addItemInWishlist.rejected, (state, action) => {
            state.cartError = "Opp! Something went Wrong"
        })
    }

})

export const { updateWishlistItems } = slice.actions;
export default slice.reducer;