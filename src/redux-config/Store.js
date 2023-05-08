import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";

import CustomerSlice from "./CustomerSlice";
import featuresProductSlice from "./FeaturesProductSlice";
import SellerSlice from "./sellerSignInSlice";
import CartSlice from "./CartSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        customer: CustomerSlice,
        featuresproduct: featuresProductSlice,
        cart: CartSlice,
        seller: SellerSlice,
        wishlist : wishlistSlice

    }
})
export default store