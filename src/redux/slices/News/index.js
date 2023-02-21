import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchNews,searchNews } from '../../../api/index';

export const newsAdapter = createEntityAdapter({
    selectId: (news) => news.title
});

const initialState = newsAdapter.getInitialState({
    allNews:null,
    favoriteNews:[],
    selectedCategory:null,
    searchTerm:'',
    loading:false
});

export const fetchNewsByCategory = createAsyncThunk('news/fetchNewsByCategory', async ({ category,searchTerm }, { dispatch,rejectWithValue }) => {
    const data = searchTerm ? await searchNews(category,searchTerm) : await fetchNews(category);

    return {
        news:data.articles
    };
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            //check if news item is already a favorite
            state.selectedCategory = action.payload
        },
        setSearchTerm: (state, action) => {
            //check if news item is already a favorite
            state.searchTerm = action.payload
        },
        addFavoriteItem: (state, action) => {
            //check if news item is already a favorite
            const itemIndex = state.favoriteNews.findIndex(newsItem => newsItem.title === action.payload.title);
            if(itemIndex === -1){
                state.favoriteNews = [...state.favoriteNews,action.payload]
            }
        },
        removeFavoriteItem: (state, action) => {
            state.favoriteNews = state.favoriteNews.filter((newsItem) => {
                return newsItem.title !== action.payload.title
            })
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchNewsByCategory.pending,  (state) => {
            state.loading = true;
        })
        .addCase(fetchNewsByCategory.fulfilled,  (state,action) => {
            newsAdapter.setAll(state,action.payload.news);
            state.loading = false;
        })
        .addCase(fetchNewsByCategory.rejected,  (state) => {
            state.loading = false;
            newsAdapter.removeAll(state);
        });
    },
});

export const { removeFavoriteItem,addFavoriteItem,setSelectedCategory,setSearchTerm } = newsSlice.actions;
export default newsSlice.reducer;