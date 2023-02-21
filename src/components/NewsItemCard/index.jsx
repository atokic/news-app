import React from 'react'
import Classes from './styles.module.scss';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
const NewsItemCard = ({ title, category, imageUrl, author, onFavoriteClick, isFavorite }) => {
  return (
    <div className={Classes.newsCard}>
        <div onClick={onFavoriteClick} className={Classes.favoriteHolder}>
            {isFavorite ? <IoMdHeart color={'#BB1E1E'} size={25}/> :  <IoMdHeartEmpty color={'#BB1E1E'} size={25} />}
        </div>
        <img src={imageUrl} alt=""/>
        <div className={Classes.newsCardContainer}>
          <div className={Classes.newsCardContainerHeader}>
            <div className={Classes.newsCardCategory}>
              <p>{category}</p>
            </div>
            <div className={Classes.newsCardTitle}>
              <p>{title}</p>
            </div>
          </div>
          <div className={Classes.newsCardAuthor}>
            <p>{author}</p>
          </div>
        </div>
    </div>
  )
}

export default NewsItemCard;