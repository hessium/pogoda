import React from 'react';
import cl from './ThisDayInfo.module.scss';
import IndicatorSvgSelector from '../../img/icons/Indicators/IndicatorSvgSelector';

const ThisDayItem = ({item}) => {

    const {icon_id, name, value} = item;

    return (
        <div className={cl.item}>
           <div className={cl.indicator}>
            <IndicatorSvgSelector id={icon_id}/>
            </div> 
           <div className={cl.indicator__name}>{name}</div> 
           <div className={cl.indicator__value}>{value}</div> 
        </div>
    );
};

export default ThisDayItem;