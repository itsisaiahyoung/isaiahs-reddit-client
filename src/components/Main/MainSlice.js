import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('main/fetchPosts', async (searchTerm) => { 
    try {
        const response = await fetch(`https://www.reddit.com/r/${searchTerm}.json?raw_json=1`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const json = await response.json();
        return json.data.children.map(child => child.data);
    } catch (error) {
        console.error('Failed to fetch posts: ', error);
        throw error;
    }
});

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        posts: [],
        isLoadingPosts: false,
        failedToLoadPosts: false,
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoadingPosts = true;
                state.failedToLoadPosts = false;
                state.status = 'loading';
            }).addCase(fetchPosts.rejected, (state) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = true;
                state.status = 'failed';
            }).addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;
                state.status = 'succeeded';
                state.posts = action.payload;
            })}
});

export const selectAllPosts = (state) => state.main.posts;
export const selectPostStatus = (state) => state.main.status;
export default mainSlice.reducer;