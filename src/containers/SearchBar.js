import Searchbar from '../components/Searchbar';
import { connect } from 'react-redux';
import { getSelectedCategory,getSearchTerm } from '../redux/slices/News/selectors';
import { fetchNewsByCategory,setSearchTerm } from '../redux/slices/News';

const connector = connect(
    (state) => ({
        selectedCategory: getSelectedCategory( state ),
        searchTerm: getSearchTerm( state ),
    }),{
        fetchNewsByCategory,
        setSearchTerm
    }
);

export default connector(Searchbar);