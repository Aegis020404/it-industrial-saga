import React, {useRef, useEffect} from "react";
import MarketplaceSeoText from "../../components/genericServices/marketplaceSeo/MarketplaceSeoText";
import MainApplication from "../../components/mainP/MainApplication";
import MainLider from "../../components/mainP/MainLider";
import MainOfferContainer from "../../components/mainP/MainOffer";
import MainQuestion from "../../components/mainP/MainQuestion";
import MainResult from "../../components/mainP/MainResult";
import MainSimple from "../../components/mainP/MainSimple";
import MobileHero from './../../components/MobileHero';

const MarketplaceSeoPage = ()=>{
    const marketI = useRef('')
    useEffect(()=>{
        marketI.current.classList.toggle('marketplaceI')
    },[marketI])
    return (
        <div>
            <main ref={marketI} className="marketplace">
                <MobileHero column='marketPlace'/>
                <MarketplaceSeoText/>
                <MainApplication/>
                <MainOfferContainer/>
                <MainLider/>
                <MainResult/>
                <MainSimple/>
                <MainQuestion/>
            </main> 
        </div>
    )
}

export default MarketplaceSeoPage