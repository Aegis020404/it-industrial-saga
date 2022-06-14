import React, { useEffect, useRef } from "react";
import cl from './../style/CRM.module.css'
import MobilePortfolio from "../components/mobilemsc/MobilePortfolio";
import MainApplication from "../components/mainP/MainApplication";
import MainSimple from './../components/mainP/MainSimple'
import MainReview from "../components/mainP/MainReview";
import MainQuestion from './../components/mainP/MainQuestion'
import MainLider from "../components/mainP/MainLider";
import MainOfferContainer from "../components/mainP/MainOffer";
import MainDevContainer from "../components/mainP/MainDev";
import MobileServiceContainer from "../components/mobilemsc/MobileService";
import MobileHero from './../components/MobileHero'
import CrmCount from './../components/crmseo/CrmCount';

const CRMPage = ()=>{
    const mobileI = useRef('')
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <div>
            <main ref={mobileI} className="mobile">
                <MobileHero column='crm'/>
                <CrmCount/>
                <MobileServiceContainer column={'crmDevelop'}/>
                <MobilePortfolio/>
                <MainDevContainer column={'developerCRM'}/>
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

export default CRMPage