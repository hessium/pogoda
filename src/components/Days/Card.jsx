import React from 'react';
import GlobalSvgSelector from '../../img/icons/GlobalSvgSelector';

import cl from "./Days.module.scss";



const Card = ({day}) => {
const { day_info,   icon_id,    temp_day,   temp_night, info} = day;

    return (
        <div className={cl.card}>
          <div className={cl.day}>{day.day}</div>
          <div className={cl.day__info}>{day_info}</div>
            <div className={cl.img}>
             <GlobalSvgSelector id={icon_id}/> 
            </div>
          <div className={cl.day__temp}>{temp_day}</div>
          <div className={cl.day__temp_night}>{temp_night}</div>
          <div className={cl.info}>{info}</div>          
        </div>
    );
};

export default Card;