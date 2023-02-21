import React, { useEffect, useRef } from 'react'
import { FaCircle } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';
import Classes from './styles.module.scss';
import Moment from 'moment';
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Loader from "../Loader";
const LatestNews = ({ latestNews, loading, fetchLatestNewsAction,sources,fetchSourcesAction }) => {
    const newsRootRef =useRef();
    const { loadMoreRef, page } = useInfiniteScroll(newsRootRef);

    useEffect(() => {
        const fetchSources = async () => {
            await fetchSourcesAction()
        }
        fetchSources();
    }, []);

    useEffect(() => {
        if ( sources && sources.length && page){
            const sourcesId = sources && sources.map((source) => source.id).join(',')
            const fetchNews = async (sources) => {
                await fetchLatestNewsAction({ page,sources })
            }
            fetchNews(sourcesId);
        }
    }, [sources]);

    useEffect(() => {
        // page can be max 5 because of developer account can only receive 100 results
        if ( sources && sources.length && page && page < 6) {
            const sourcesId = sources && sources.map( (source) => source.id ).join( ',' )
            const fetchNews = async (sources) => {
                await fetchLatestNewsAction( { page, sources } )
            }
            fetchNews( sourcesId );
        }
    }, [page])

  return (
    <div className={Classes.newsWidgetCard}>
      <div className={Classes.newsWidgetHead}>
        <div className={Classes.newsWidgetIconHolder}>
          <FaCircle className={Classes.newsWidgetIcon} color={'#BB1E1E'} size={10}/>
        </div>
        <p className={Classes.newsWidgetMainTitle}>Latest News</p>
      </div>
      <div className={Classes.newsWidgetBody}>
        <ul ref={newsRootRef} className={Classes.newsWidgetList}>
            {latestNews?.map((news,index) => {
                const time = Moment(news.publishedAt).format('HH:mm')

                return <li key={index} className={Classes.newsWidgetItem}>
                    <span className={Classes.newsWidgetTime}>{time}</span>
                    <a className={Classes.newsWidgetTitle} href={news.url}><p>{news.title}</p></a>
                </li>
            })}
            <div ref={loadMoreRef}>{loading && <Loader />}</div>
        </ul>
      </div>
        <a class={Classes.newsWidgetAllNews} href="/"><p>See all news</p>
        <SlArrowRight className={Classes.newsWidgetAllNewsIcon}/></a>
    </div>
  )
}

export default LatestNews;