import React, { useEffect, useState } from 'react';
import cl from "./Header.module.scss";
import Select from 'react-select';

import GlobalSvgSelector from '../../img/icons/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

const Header = () => {
const theme = useTheme();
    
const options = [
    { value: 'city-1', label: 'Казань' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Санкт-петербург' }
  ]

  

  const colourStyles = {
      control: (styles) => ({
          ...styles,
          backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' :  'rgba(71, 147, 255, 0.2)',
          width: '194px', 
          height: '37px',
          border: 'none',
          borderRadius: '10px',
          zIndex: 100,
      }),
      singleValue:(styles) => ({
        ...styles,
        color: theme.theme === Theme.DARK ?  '#fff'  :   '#000', 
        })
      
  };



  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }



  

    return (

    <header className={cl.header}>
        <div className={cl.wrapper}>
            <a href='/' className={cl.logo}>
            <GlobalSvgSelector id="header-logo"/>
            </a>
            <div className={cl.logo__name}>
            React weather
            </div>           
        </div>

        <div className={cl.wrapper}>
            <div className={cl.change_theme} onClick={changeTheme}>
            <GlobalSvgSelector id="change-theme"/> 
            </div>

            <Select defaultValue={options[0]} 
            styles={colourStyles} 
            options={options} />
        </div>
        
    </header>        
       
    );
};

export default Header;