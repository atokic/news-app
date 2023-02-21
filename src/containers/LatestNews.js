import LatestNews from '../components/LatestNews';
import { connect } from 'react-redux';
import { selectAllLatestNews, getLatestNewsLoading, getLatestNewsPage } from '../redux/slices/LatestNews/selectors';
import { selectAllSources } from '../redux/slices/Sources/selectors';
import { fetchLatestNewsAction } from '../redux/slices/LatestNews';
import { fetchSourcesAction } from '../redux/slices/Sources';

const connector = connect(
    (state) => ({
        latestNews: selectAllLatestNews( state ),
        sources: selectAllSources( state ),
        loading: getLatestNewsLoading( state )
    }),{
        fetchLatestNewsAction,
        fetchSourcesAction
    }
);

export default connector(LatestNews);