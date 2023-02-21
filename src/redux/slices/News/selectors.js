import { newsAdapter } from './index';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state;
//From adapter
export const {
    selectAll: selectAllNews,
    selectById: selectNewsByTitle,
} = newsAdapter.getSelectors((state) => state.news);

export const getFavoriteNews = createDraftSafeSelector(
    selectSelf,
    (state) => state.news.favoriteNews
);

export const getFavoriteNewsTitles = createDraftSafeSelector(
    selectSelf,
    (state) => state.news.favoriteNews.map((favoriteItem) => favoriteItem.title)
);

export const getSelectedCategory = createDraftSafeSelector(
    selectSelf,
    (state) => state.news.selectedCategory
);

export const getSearchTerm = createDraftSafeSelector(
    selectSelf,
    (state) => state.news.searchTerm
);

export const getNewsLoading = createDraftSafeSelector(
    selectSelf,
    (state) => state.news.loading);