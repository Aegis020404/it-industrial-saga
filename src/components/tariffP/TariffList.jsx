import React from 'react';
import cl from './../../style/TariffList.module.css';
import MyTitle from './../UI/titlepage/MyTitle'

import MainTariffContainer from '../mainP/MainTariff';

const TariffList = () => {
    return (
        <section className={cl.tariff}>
            <span className={cl.tariffBackground}></span>
            <div className="container">
               <MyTitle title='Тарифы' classes={cl.titlePage}/>
            </div>
                <MainTariffContainer/>
        </section>
    )
}

export default TariffList