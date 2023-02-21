import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchSources } from '../../../api/index';

export const sourcesAdapter = createEntityAdapter({
    selectId: (source) => source.id
});

const initialState = sourcesAdapter.getInitialState({
    sources:null,
    loading:false
});

export const fetchSourcesAction = createAsyncThunk('sources/fetch', async () => {
    const data = await fetchSources();

    return {
        sources:data.sources
    };
});

const sourcesSlice = createSlice({
    name: 'sources',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchSourcesAction.pending,  (state) => {
            state.loading = true;
        })
        .addCase(fetchSourcesAction.fulfilled,  (state,action) => {
            sourcesAdapter.setAll(state,action.payload.sources);
            state.loading = false;
        })
        .addCase(fetchSourcesAction.rejected,  (state) => {
            state.loading = false;
            sourcesAdapter.removeAll(state);
        });
    },
});

export default sourcesSlice.reducer;