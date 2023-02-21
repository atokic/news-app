import News from '../components/News';
import { connect } from 'react-redux';
import { selectAllNews, getNewsLoading, getFavoriteNewsTitles, getSearchTerm } from '../redux/slices/News/selectors';
import { fetchNewsByCategory,addFavoriteItem,removeFavoriteItem,setSelectedCategory } from '../redux/slices/News';

const connector = connect(
    (state) => ({
            newsLoading: getNewsLoading( state ),
            news:selectAllNews( state ),
            favoritesTitles:getFavoriteNewsTitles( state ),
            searchTerm: getSearchTerm( state ),
            isFavorites:false
    }),{
        fetchNewsByCategory,
        addFavoriteItem,
        setSelectedCategory,
        removeFavoriteItem
    }
);

export default connector(News);