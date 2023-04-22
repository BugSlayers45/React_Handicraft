import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";

const store=configureStore({
    reducer:{
        category:CategorySlice
    }
})


export default store