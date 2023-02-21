import React from 'react'
import { NavLink } from "react-router-dom";
import { ImNewspaper, ImDisplay } from 'react-icons/im';
import { MdOutlineHome, MdOutlineFavoriteBorder, MdOutlineBusinessCenter, MdOutlineScience, MdOutlineHealthAndSafety, MdSportsSoccer } from 'react-icons/md';
import Classes from './styles.module.scss';

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar;