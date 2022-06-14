import React, { useState, useMemo,useEffect } from 'react';
import cl from './../../style/ContactMap.module.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Marker from './../../assets/img/map-placemark.svg';

const ContactMap = (props)=>{
    const [defaultState, setDefaultState] = useState({ center: [55.621950, 37.636882], zoom: 17 })
    useEffect(()=>{
        if(window.innerWidth <= 576 && defaultState.zoom === 17)setDefaultState({...defaultState, zoom: 16})
        if(window.innerWidth > 576 &&defaultState.zoom === 16)setDefaultState({...defaultState, zoom: 17})
    },[defaultState])
    window.addEventListener('resize',()=>{
        if(window.innerWidth <= 576 && defaultState.zoom === 17)setDefaultState({...defaultState, zoom: 16})
        if(window.innerWidth > 576 &&defaultState.zoom === 16)setDefaultState({...defaultState, zoom: 17})
    })
    window.addEventListener('load',()=>{
        if(window.innerWidth <= 576 && defaultState.zoom === 17)setDefaultState({...defaultState, zoom: 16})
        if(window.innerWidth > 576 &&defaultState.zoom === 16)setDefaultState({...defaultState, zoom: 17})
    })
    return (
        <section className={cl.mapSection} >
            <YMaps>
                <div onClick={e=>e.target.classList.toggle(cl.active)}>
                <Map state={defaultState}  className={cl.map}>
                    <Placemark geometry={[55.622636, 37.635177]} options={{iconLayout: "default#image",iconImageHref:Marker,iconImageSize: [55,66]}} />
                </Map>
                </div>
            </YMaps>
        </section>  
    )

}



export default ContactMap