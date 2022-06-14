import React from 'react';
import cl from './../../style/KeysMainMobile.module.css';
import phonesBlue from './../../assets/img/keys-phones-blue.svg';
import KeysItemList from '../KeysItemList';
import {NavLink} from "react-router-dom";

const KeysMainMobile = ({classesTabs})=>{
    const infoArr = [{descr: 'Перевозки App',img: {background:'#2F80EC',image: phonesBlue, alt:'Сайт компании на мобильных устройствах',classesImg: cl.mobilaAppImg,logo: <svg className={cl.logoBlue} width="61" height="49" viewBox="0 0 61 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3354 8.37863H51.8706V0.0787811H38.3392V8.37863H29.9053V21.7253H38.3392V30.0251H51.8706V21.7253H60.3354V8.37863Z" fill="#B5D2FD"/><path d="M38.3389 30.0252V21.7253H29.9049V21.6037L25.9506 26.1641L10.4729 8.37869H0V53.1006H13.5314V31.4845L25.9506 44.4055L38.3389 31.4845V53.1006H51.8702V30.0252H38.3389Z" fill="white"/></svg>}}]
    const scrollTopPage = (e)=>{
        document.body.scrollTo({top:0,behavior:'smooth'});
    }
    return (
        <div className={[cl.mobileBlock,classesTabs].join` `}>
            <ul className={cl.mobileList}>
                <NavLink to='Перевозки-App' className={cl.navLink} onClick={scrollTopPage}>
                {infoArr.map((e,i)=>
                    <KeysItemList key={i} descr={e.descr} logo={e.img.logo} img={e.img.image} background={e.img.background} alt={e.img.alt} classesImg={e.img.classesImg} imgSet={e.img.imageSet}/>)}
                </NavLink>
            </ul>
        </div>
    )
}

export default KeysMainMobile