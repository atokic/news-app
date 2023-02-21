import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/News';
import latestNewsReducer from './slices/LatestNews';
import sourcesReducer from './slices/Sources';

const store = configureStore({
    reducer: {
        news:newsReducer,
        latestNews:latestNewsReducer,
        sources:sourcesReducer
    }
});

export default store;
