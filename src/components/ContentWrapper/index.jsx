import React, { useState } from 'react';
import Sidebar  from "../Sidebar";
import { Outlet } from 'react-router-dom';
import Classes from './styles.module.scss';
import Searchbar from "../../containers/SearchBar";
import { useMaxMediaQuery } from "../../hooks/useMediaQuery";
import LatestNews from "../../containers/LatestNews";

const ContentWrapper = () => {
    const [tab,setTab] = useState('featured');
    const isMobile = useMaxMediaQuery('sm');

    return <div className={Classes.mainWrapper}>
        <Searchbar />
        {isMobile ?  <div style={{display:'flex',justifyContent:'center',margin:'10px auto'}}><div onClick={() => setTab('latest')} className={`${Classes.tab} ${tab === 'latest' ? Classes.active : ''}`}>Latest</div><div onClick={() => setTab('featured')} className={`${Classes.tab} ${tab === 'featured' ? Classes.active : ''}`}>Feature</div> </div> : null}

        <div className={Classes.contentWrapper}>
            <div className={Classes.sidebar}>
                {!isMobile ? <Sidebar /> : null}
            </div>

            <div className={Classes.newsWrapper}>
                {tab === 'latest' && isMobile ? <LatestNews /> : <Outlet />}
            </div>
        </div>
    </div>;
};

export default ContentWrapper;