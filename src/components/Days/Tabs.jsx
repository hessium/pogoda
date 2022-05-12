import React from 'react';
import cl from "./Days.module.scss";

const Tabs = () => {
    
    const tabs = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На неделю',
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