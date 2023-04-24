import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import CustomerSlice from "./CustomerSlice";
import featuresProductSlice from "./FeaturesProductSlice";

const store=configureStore({
    reducer:{
        category:CategorySlice,
        customer:CustomerSlice,
        featuresproduct:featuresProductSlice
    }
})
export default store