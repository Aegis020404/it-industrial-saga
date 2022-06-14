import React, { useEffect, useRef } from "react";
import MobileHeroContainer from "../components/MobileHero";
import MobilePortfolio from "../components/mobilemsc/MobilePortfolio";
import MainApplication from "../components/mainP/MainApplication";
import MobileServiceContainer from "../components/mobilemsc/MobileService";
import MainSimple from './../components/mainP/MainSimple'
import MainReview from "../components/mainP/MainReview";
import MainQuestion from './../components/mainP/MainQuestion'
import MainLider from "../components/mainP/MainLider";
import MainOfferContainer from "../components/mainP/MainOffer";
import TariffSeoContainer from "../components/TariffSEO/TariffSEO";
import MainDevContainer from "../components/mainP/MainDev";
import cl from './../style/MobilePage.module.css'
import MobileCount from './../components/mobilemsc/MobileCount'
const MobilePage = ()=>{
    const mobileI = useRef(false)
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <div>
            <main ref={mobileI} className="mobile">
                <MobileHeroContainer column={'mobile'}/>
                <MobileCount/>
                <MobileServiceContainer column={'mobileDevelop'}/>
                <MobilePortfolio/>
                 <MainDevContainer column={'developerMobile'}/>
                <MainApplication/>
                <div className={cl.offer}>
                    <MainOfferContainer/>
                </div>
                <MainLider/>
                <MainReview/>
                <MainSimple/>
                <MainQuestion/>
            </main>
        </div>
    )
}

export default MobilePage