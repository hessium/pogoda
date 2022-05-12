import React from 'react';
import Days from '../../../components/Days/Days';
import ThisDay from '../../../components/ThisDay/ThisDay';
import ThisDayInfo from '../../../components/ThisDayInfo/ThisDayInfo';
import cl from "./Home.module.scss";


const Home = () => {
    

    return (
        <div className={cl.home}>
            <div className={cl.wrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    );
};

export default Home;