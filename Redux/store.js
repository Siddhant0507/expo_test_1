import { configureStore } from "@reduxjs/toolkit";
import navReducer from '../Redux/Slices/navSlices';

export default store =()=>configureStore({
   reducer:{
    nav:navReducer,
   },
})