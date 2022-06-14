import React, { useEffect, useRef } from "react";
import Header from '../components/Header';
import MainTariffContainer from "../components/mainP/MainTariff";
import MainQuiz from "../components/mainP/MainQuiz";
import '../style/main.css'
import MainResult from "../components/mainP/MainResult";
import SliderContainer from "../components/mainP/MainSlider";
import MainApplication from "../components/mainP/MainApplication";
import MainOther from "../components/mainP/MainOther";
import MainKeys from "../components/mainP/MainKeys";
import MainLider from "../components/mainP/MainLider";
import MainSimple from "../components/mainP/MainSimple";
import MainQuestion from '../components/mainP/MainQuestion';
import Footer from "../components/Footer";
import MainOfferContainer from "../components/mainP/MainOffer";
import MainReview from "../components/mainP/MainReview";
import MainDevContainer from "../components/mainP/MainDev";
import cl from "../style/MainTariff.module.css";

const MainPage = ()=>{

    const mainI = useRef('')
    useEffect(()=>{
        mainI.current.classList.toggle('mainL')
    },[mainI])
    return (
        <div>
         
            <main ref={mainI} className="main">
                <SliderContainer />

                <MainTariffContainer title={<div className={cl.tariffTittleBlock}>
                    <h2 className={cl.tariffTitle}>Тарифы на разработку сайтов</h2>
                </div>}/>

                <MainQuiz />
                <MainApplication/>


                <MainDevContainer column={'turnkeyWebsite'}/>

                <MainOfferContainer/>
                <MainResult />

                <MainOther/>

                <MainKeys/>
                <MainLider/>
                <MainReview/>

                <MainSimple/>

                <MainQuestion/>
            </main>
           
        </div>
    )
}

export default MainPage