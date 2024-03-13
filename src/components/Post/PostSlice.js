import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchPost = createAsyncThunk('post/fetchPost', async (postId) => {
    try {
        const response = await fetch(`https://www.reddit.com/${postId}.json`);
        const json = await response.json();
        return json[0].data.children[0].data;
    } catch (error) {
        console.error('Failed to fetch post: ', error);
        throw error;
    }
}
);

const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: [],
        isLoadingPost: false,
        failedToLoadPost: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.isLoadingPost = true;
                state.failedToLoadPost = false;
            }).addCase(fetchPost.rejected, (state) => {
                state.isLoadingPost = false;
                state.failedToLoadPost = true;
            }).addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoadingPost = false;
                state.failedToLoadPost = false;
                state.post = action.payload;
            })
    }
});

export const selectPostById = (state) => state.post.post;
export default postSlice.reducer;