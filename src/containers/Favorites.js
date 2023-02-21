import News from '../components/News';
import { connect } from 'react-redux';
import { getFavoriteNews, getFavoriteNewsTitles, getNewsLoading, getSearchTerm } from '../redux/slices/News/selectors';
import { fetchNewsByCategory,removeFavoriteItem,setSelectedCategory } from '../redux/slices/News';

const connector = connect(
    (state) => ({
            newsLoading: getNewsLoading( state ),
            news:getFavoriteNews( state ),
            searchTerm: getSearchTerm( state ),
            favoritesTitles:getFavoriteNewsTitles( state ),
            isFavorites:true
    }),{
        fetchNewsByCategory,
        setSelectedCategory,
        removeFavoriteItem
    }
);

export default connector(News);