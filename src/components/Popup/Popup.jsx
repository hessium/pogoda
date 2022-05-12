import React from 'react';
import cl from './Popup.module.scss';
 import ThisDayItem from '../ThisDayInfo/ThisDayItem'; 
 import GlobalSvgSelector from '../../img/icons/GlobalSvgSelector'; 

const Popup = () => {
    
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
          },
          {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
          },
          {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
          },
          {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
          },
]

    return (
        <>
        <div className={cl.blure}></div>
        <div className={cl.popup}>
            <div className={cl.day}>
              <div className={cl.day__temp}> 12° </div>
              <div className={cl.day__name}>Среда</div>
              <div className={cl.img}>
              <GlobalSvgSelector id='sun'/>
              </div>
              <div className={cl.day__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={cl.day__city}>
                    Город: <span>Казань</span>
                </div>
            </div>   
            <div className={cl.this__day_info_items}>
              {items.map((item) => ( 
              <ThisDayItem key={item.icon_id} item={item}/>
              ))}
            </div>
            <div className={cl.close}>
                <GlobalSvgSelector id='close'/>
            </div>      
        </div>
        </>
    );
};

export default Popup;