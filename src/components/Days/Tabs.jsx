import React from 'react';
import cl from "./Days.module.scss";

const Tabs = () => {
    
    const tabs = [
        {
            value: 'На неделю',
        },
        {
            value: 'На месяц',
        },
        {
            value: 'На 10 дней',
        },
    ]

    return (
        <div className={cl.tabs}>
            <div className={cl.tabs__wrapper} >
                {tabs.map((tab)=> 
                    <div key={tab.value} className={cl.tab}>
                        {tab.value}
                    </div>
                )}
            </div>
            <div className={cl.cancel}>Отменить</div>
        </div>
    );
};

export default Tabs;