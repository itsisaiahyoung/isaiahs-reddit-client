import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('main/fetchPosts', async (searchTerm) => { 
    try {
        const response = await fetch(`https://www.reddit.com/r/${searchTerm}.json`);
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
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoadingPosts = true;
                state.failedToLoadPosts = false;
            }).addCase(fetchPosts.rejected, (state) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = true;
            }).addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;
                state.posts = action.payload;
            })}
});

export const selectAllPosts = (state) => state.main.posts;
export default mainSlice.reducer;