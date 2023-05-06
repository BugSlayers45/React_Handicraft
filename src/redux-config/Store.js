import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import SellerSlice from "./sellerSignInSlice";
import CustomerSlice from "./CustomerSlice";
import featuresProductSlice from "./FeaturesProductSlice";
import CartSlice from "./CartSlice";

const store=configureStore({
    reducer:{
        category:CategorySlice,
        customer:CustomerSlice,
        cart:CartSlice,
        seller: SellerSlice,
        featuresproduct:featuresProductSlice
        
    }
})
export default store