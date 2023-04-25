import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import SellerSlice from "./sellerSignInSlice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        seller: SellerSlice
    }
})


export default store