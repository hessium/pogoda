import React from 'react';
import cl from "./Header.module.scss";
import Select from 'react-select';

import GlobalSvgSelector from '../../img/icons/GlobalSvgSelector';

const Header = () => {

    
const options = [
    { value: 'city-1', label: 'Казань' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Санкт-петербург' }
  ]

  const colourStyles = {
      control: (styles) => ({
          ...styles,
          backgroundColor: 'rgba(71, 147, 255, 0.2)',
          width: '194px', 
          height: '37px',
          border: 'none',
          borderRadius: '10px',
          zIndex: 100,
      }) 
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
            <div className={cl.change_theme}>
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