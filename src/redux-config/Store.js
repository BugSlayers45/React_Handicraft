import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import SellerSlice from "./sellerSignInSlice";
import CustomerSlice from "./CustomerSlice";
import featuresProductSlice from "./FeaturesProductSlice";

const store=configureStore({
    reducer:{
        category:CategorySlice,
        customer:CustomerSlice,
        seller: SellerSlice,
        featuresproduct:featuresProductSlice

    }
})
export default store