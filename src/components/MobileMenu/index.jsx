import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ImNewspaper, ImDisplay } from 'react-icons/im';
import { MdOutlineClose, MdSearch, MdOutlineHome, MdOutlineFavoriteBorder, MdOutlineBusinessCenter, MdOutlineScience, MdOutlineHealthAndSafety, MdSportsSoccer } from 'react-icons/md';
import Classes from './styles.module.scss';
import { useMaxMediaQuery } from "../../hooks/useMediaQuery";

const MobileMenu = () => {
    const [closeMobileMenu, setCloseMobileMenu] = useState(false);
    
    return (
        <div className={Classes.hamburgerMenu}>
            <div className={Classes.closeBtn}><MdOutlineClose size={25} onClick={() => setCloseMobileMenu(true)}></MdOutlineClose></div>
            <div className={Classes.content}>
            <div className={Classes.searchHolder}>
                <div className={Classes.searchTitle}>
                    <span className={Classes.titleMy}>My</span><span className={Classes.titleNews}>News</span>
                </div>
                <div className={Classes.inputHolder}>
                    <MdSearch size={20} className={Classes.searchIcon}/>
                    <input placeholder={'Search news'} className={Classes.searchInput} type={'text'} value={''} onChange={''}/>
                </div>
            </div>
            <div className={Classes.iconBar}>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/"><MdOutlineHome className='iconBarItemsIcon' size={'1.5rem'} />Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/news/favorites"><MdOutlineFavoriteBorder className='iconBarItemsIcon' size={'1.5rem'} />Favorites</NavLink>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/general" ><ImNewspaper className='iconBarItemsIcon' size={'1.5rem'}/>General</NavLink>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/business"><MdOutlineBusinessCenter className='iconBarItemsIcon' size={'1.5rem'} />Business</NavLink>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/health"><MdOutlineHealthAndSafety className='iconBarItemsIcon' size={'1.5rem'} />Health</NavLink>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/science"><MdOutlineScience className='iconBarItemsIcon' size={'1.5rem'}/>Science</NavLink>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/sports"><MdSportsSoccer className='iconBarItemsIcon' size={'1.5rem'}/>Sports</NavLink>
                <NavLink className={({ isActive }) => (isActive ? Classes.linkActive : Classes.iconBarItems)} to="/technology"><ImDisplay className='iconBarItemsIcon' size={'1.5rem'}/>Technology</NavLink>
            </div>
            </div>
        </div>
    );
}

export default MobileMenu;