import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import NewsItemCard  from '../../components/NewsItemCard';
import Loader from "../Loader";
import LatestNews from "../../containers/LatestNews";
import Classes from './styles.module.scss';
import { useMaxMediaQuery } from "../../hooks/useMediaQuery";

const News = ({ newsLoading,news,fetchNewsByCategory,isFavorites,addFavoriteItem,removeFavoriteItem,favoritesTitles,setSelectedCategory,searchTerm }) => {
  
  let { category } = useParams();
  const isMobile = useMaxMediaQuery('sm');

  useEffect(() => {

      setSelectedCategory(category);
      if(!isFavorites){
          fetchNewsByCategory( { category,searchTerm });
      }

  }, [category]);

  const isMobileAndTablet = useMaxMediaQuery('md');
  const renderFirstFourNews = () =>{
      if(news){
          const firstFourNews = news.map((item,index) => {
              if (index < 4){

                  const isFavorite = favoritesTitles.includes(item.title)
                  return <NewsItemCard key={index}
                                       onFavoriteClick={() => {
                                           return isFavorite ? removeFavoriteItem({ title:item.title }) : addFavoriteItem(item)
                                       }}
                                       isFavorite={isFavorite}
                                       title={item.title}
                                       category={item.source.name}
                                       imageUrl={item.urlToImage}
                                       author={item.author} />
              }
          })
          return firstFourNews;
      }
  }

  const renderRestNews = () =>{
      if(news){
          const restNews = news.map((item,index) => {
              if (index >= 4){
                  const isFavorite = favoritesTitles.includes(item.title)
                  return <NewsItemCard key={index}
                                       onFavoriteClick={() => {
                                           return isFavorite ? removeFavoriteItem({ title:item.title }) : addFavoriteItem(item)
                                       }}
                                       isFavorite={isFavorite}
                                       title={item.title}
                                       category={item.source.name}
                                       imageUrl={item.urlToImage}
                                       author={item.author} />
              }
          })
          return restNews;
      }
  }

  return (
  <div className={Classes.container}>
      {!isMobile ? <h3>News</h3> : null}
      {newsLoading ? <Loader /> :
          ( news && news.length ?   <div className={Classes.newsContainer}>
                  <div className={Classes.firstFourNewsContainer}>{renderFirstFourNews()}</div>
                  {isMobileAndTablet ? null : <div className={Classes.latestNewsContainer}><LatestNews /></div>}
                  {renderRestNews()}
              </div>
              : <div>No News Available For this category and search term</div> )
      }
  </div>
);
}

export default News;
