import { configureStore} from "@reduxjs/toolkit";
import currentSlice from "./currentSlice";

const store = configureStore({
    reducer:{
        currentState : currentSlice
    }
})


export default store