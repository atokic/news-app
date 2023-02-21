import { latestNewsAdapter } from './index';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state;
//From adapter
export const {
    selectAll: selectAllLatestNews,
    selectById: selectLatestNewsByTitle,
} = latestNewsAdapter.getSelectors((state) => state.latestNews);

export const getLatestNewsLoading = createDraftSafeSelector(
    selectSelf,
    (state) => state.latestNews.loading);

export const getLatestNewsPage = createDraftSafeSelector(
    selectSelf,
    (state) => state.latestNews.page);