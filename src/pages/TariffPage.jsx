import React, { useRef, useEffect } from "react";
import MainApplication from "../components/mainP/MainApplication";
import TariffList from "../components/tariffP/TariffList";
import TariffSeo from "../components/tariffP/TariffSeo";
import NavPagesHead from "../components/UI/navpage/MyNavPages";
import MainTariffContainer from './../components/mainP/MainTariff';

const TariffPage = ()=>{
    const tariffRef = useRef('')
    useEffect(()=>{
        tariffRef.current.classList.toggle('tariffI')
    },[tariffRef])
    const infoPage = [{text: 'Тарифы'}]
    return (
        <div>
            <main ref={tariffRef} className='tariff'>
                <NavPagesHead navItems={infoPage}/>
                <TariffList/>
                <TariffSeo/>
                <MainApplication/>
            </main>
        </div>
    )
}

export default TariffPage