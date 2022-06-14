import React from "react";
import cl from './../../style/MobileCount.module.css';
import TariffSeoContainer from "./../../components/TariffSEO/TariffSEO";

const MobileCount = ()=>{
    return (
        <section className={cl.countSection}>
             <TariffSeoContainer column={'mobileCreate'}/>
        </section>
    )
}

export default MobileCount