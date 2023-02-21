import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchLatestNews } from '../../../api/index';

export const latestNewsAdapter = createEntityAdapter({
    selectId: (news) => news.title
});

const initialState = latestNewsAdapter.getInitialState({
    news:null,
    loading:false,
    page:1
});

export const fetchLatestNewsAction = createAsyncThunk('latestNews/fetchLatestNewsAction', async ({ page,sources }, { dispatch,rejectWithValue }) => {
    const data = await fetchLatestNews(page,sources);

    return {
        latestNews:data.articles
    };
});

const latestNewsSlice = createSlice({
    name: 'latestNews',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchLatestNewsAction.pending,  (state) => {
            state.loading = true;
        })
        .addCase(fetchLatestNewsAction.fulfilled,  (state,action) => {
            latestNewsAdapter.addMany(state,action.payload.latestNews);
            state.loading = false;
        })
        .addCase(fetchLatestNewsAction.rejected,  (state) => {
            state.loading = false;
            latestNewsAdapter.removeAll(state);
        });
    },
});

export default latestNewsSlice.reducer;