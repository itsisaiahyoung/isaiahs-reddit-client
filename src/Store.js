import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./components/Main/MainSlice";

export default configureStore({
    reducer: {
        main: mainReducer,
    },
});