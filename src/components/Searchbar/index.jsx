import React, { useState } from 'react'
import Classes from './styles.module.scss';
import { MdSearch } from "react-icons/md";
import { useMaxMediaQuery } from "../../hooks/useMediaQuery";

const Searchbar = ({selectedCategory, fetchNewsByCategory ,searchTerm, setSearchTerm}) => {
  const [searchVal,setSearchVal] = useState('');
  const onSearchChange = (event) => {
      setSearchVal(event.target.value)
      setSearchTerm(event.target.value)
  }

  const onSearchSubmit = async () => {
      await fetchNewsByCategory( {
          category:selectedCategory,
          searchTerm
      })
  }

  const isMobile = useMaxMediaQuery('sm');

  return (
      <div className={Classes.searchHolder}>
        <div className={Classes.searchTitle}>
          <span className={Classes.titleMy}>My</span><span className={Classes.titleNews}>News</span>
        </div>
        <div className={Classes.inputHolder}>
          <MdSearch size={20} className={Classes.searchIcon}/>
          <input placeholder={'Search news'} className={Classes.searchInput} type={'text'} value={searchVal} onChange={onSearchChange}/>
          {!isMobile ? <button onClick={onSearchSubmit} className={Classes.searchBtn}>Search</button> : null}
        </div>
      </div>
  );
}

export default Searchbar;