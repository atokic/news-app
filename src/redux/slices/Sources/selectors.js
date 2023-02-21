import { sourcesAdapter } from './index';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state;

//From adapter
export const {
    selectAll: selectAllSources,
    selectById: selectSourcesById,
} = sourcesAdapter.getSelectors((state) => state.sources);

export const getSourcesLoading = createDraftSafeSelector(
    selectSelf,
    (state) => state.sources.loading);