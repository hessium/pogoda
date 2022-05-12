import React from 'react';
import cl from "./ThisDayInfo.module.scss";
import cloud from '../../img/cloud.png';
import ThisDayItem from './ThisDayItem';

const ThisDayInfo = () => {
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
        <div className={cl.this__day_info}>
            <div className={cl.this__day_info_items}>
                {items.map((item) => 
                    <ThisDayItem key={item.icon_id} item={item}/>
                )}
            </div>

            <img src={cloud} alt="cloud" className={cl.cloud__img} />
        </div>
    );
};

export default ThisDayInfo;