import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import CustomerSlice from "./CustomerSlice";
import featuresProductSlice from "./FeaturesProductSlice";
import SellerSlice from "./sellerSignInSlice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        customer: CustomerSlice,
        seller: SellerSlice,
        featuresproduct: featuresProductSlice


    }
})
export default store