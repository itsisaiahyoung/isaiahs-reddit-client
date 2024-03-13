import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./components/Main/MainSlice";
import searchReducer from "./components/Search/SearchSlice";
import postReducer from "./components/Post/PostSlice";

export default configureStore({
    reducer: {
        main: mainReducer,
        search: searchReducer,
        post: postReducer
    },
});