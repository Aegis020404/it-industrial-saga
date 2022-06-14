import React, {useEffect} from 'react';
import cl from './../../style/MobileService.module.css';
import MobileServItem from './MobileServItem';
import {connect} from "react-redux/lib";
import {Pagination, Swiper} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const MobileService = (props) => {
    const state = props.mobileServicePage[props.column]
    let checkin = 1
    useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 576

        function inititalSwiper() {
            if (swiper) return
            swiper = new Swiper(`.${props.column}`, {
                modules: [Pagination],
                slidesPerView: 'auto',
                speed: 400,
                spaceBetween: 20,
                pagination: {
                    el: `.pag${props.column}`,
                    type: 'bullets',
                },
                autoHeight: true,
            })
        }

        function destroySwiper() {
            if (!swiper) return
            swiper.destroy();
            swiper = null;

        }

        function loadResize() {
            let windowWidth = window.innerWidth
            if (windowWidth <= mediaQuerySize) {
                inititalSwiper()
            } else {
                destroySwiper()
            }
        }
        if (checkin) {
            loadResize()
            checkin = 0
        }
        window.addEventListener('load', loadResize);
        window.addEventListener('resize', loadResize);

    })
    return (
        <section className={cl.serviceSection}>
            <div className="container">
                {state.title ? <h2 className={cl.serviceTitle}>{state.title}</h2> : ''}
                {state.text ? <p className={cl.serviceDescr}>{state.text}</p> : ''}
                <div className={cl.serviceListBlock}>
                    <div className={`swiper ${props.column}`}>
                        <div className={'swiper-wrapper ' + cl.serviceList}>
                            {state.cases.map((e, i) => <div className={'swiper-slide ' + cl.swiperSl} key={i}>
                                <MobileServItem title={e.title} descr={e.descr} img={e.img}/>
                            </div>)}
                        </div>
                        <div className="swiper-scrollbar"></div>
                        <div className={`pag${props.column}` + ' ' + cl.pag} ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const stateToProps = state => ({mobileServicePage: state.mobileServicePage})
const MobileServiceContainer = connect(stateToProps, {})(MobileService)
export default MobileServiceContainer