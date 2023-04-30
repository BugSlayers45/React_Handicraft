import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";

import CustomerSlice from "./CustomerSlice";
import featuresProductSlice from "./FeaturesProductSlice";
import SellerSlice from "./sellerSignInSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        customer: CustomerSlice,
        featuresproduct: featuresProductSlice,
        cart: CartSlice,
        seller: SellerSlice,


    }
})
export default store