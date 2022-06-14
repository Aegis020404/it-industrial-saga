import React from 'react';
import HeroSection from './HeroSection';
import cl from '../style/MobileHero.module.css';
import {connect} from "react-redux/lib";

const MobileHero =  props  => {
    const state = props.MobileHeroPage[props.column]
    return (
        <section className={cl.mobileSection}>
           <HeroSection title={state.title} descr={state.descr} classesImg={state.classesimg} gridCl={state.grid}/>
        </section>
    )
}
const mapStateToProps = state => ({MobileHeroPage: state.MobileHeroPage})
const MobileHeroContainer = connect(mapStateToProps, {})(MobileHero)
export default MobileHeroContainer