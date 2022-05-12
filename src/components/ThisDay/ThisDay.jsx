import React from 'react';
import cl from "./ThisDay.module.scss";
import GlobalSvgSelector from '../../img/icons/GlobalSvgSelector';

const ThisDay = () => {
    return (
        <div className={cl.this__day}>
            <div  className={cl.top__block}>
                <div className={cl.top__block_wrapper}>
                <div className={cl.this__temp}>
                        20°
                    </div>
                    <div className={cl.this__day_name}>
                        Сегодня
                    </div>
                </div>
                <GlobalSvgSelector id="sun"/> 
                </div>
            <div  className={cl.bottom__block}>
                <div className={cl.this__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={cl.this__city}>
                    Город: <span>Казань</span>
                </div>
                
            </div>

        </div>
    );
};

export default ThisDay;