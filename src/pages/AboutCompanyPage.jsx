import React, { useEffect, useRef } from 'react';
import AboutSimple from '../components/aboutP/AboutSimple';
import AboutText from '../components/aboutP/AboutText';
import MainApplication from '../components/mainP/MainApplication';
import NavPagesHead from '../components/UI/navpage/MyNavPages';


const AboutCompanyPage = ()=>{
    const aboutI = useRef('')
    const infoNav = [{text: 'О компании'}]
    useEffect(()=>{
        aboutI.current.classList.toggle('aboutI')
    },[aboutI])
    return (
       <div>
           <main ref={aboutI} className='about'>
                <NavPagesHead navItems={infoNav}/>
                <AboutText/>
                <AboutSimple/>
                <MainApplication/>
           </main>
       </div>
    )
}

export default AboutCompanyPage 