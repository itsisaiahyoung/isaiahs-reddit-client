import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchPosts = createAsyncThunk('search/searchPosts', async (searchTerm) => {
    try {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
        const json = await response.json();
        return json.data.children.map(child => child.data);
    } catch (error) {
        console.error('Failed to fetch search results: ', error);
        throw error;
    }
}); 

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        isLoadingSearchResults: false,
        failedToLoadSearchResults: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchPosts.pending, (state) => {
                state.isLoadingSearchResults = true;
                state.failedToLoadSearchResults = false;
            }).addCase(searchPosts.rejected, (state) => {
                state.isLoadingSearchResults = false;
                state.failedToLoadSearchResults = true;
            }).addCase(searchPosts.fulfilled, (state, action) => {
                state.isLoadingSearchResults = false;
                state.failedToLoadSearchResults = false;
                state.searchResults = action.payload;
            })
    }
});

export const selectSearchResults = (state) => state.search.searchResults;
export default searchSlice.reducer;