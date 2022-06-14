import React, {useRef, useState} from 'react';
import MainTItem from './MainTItem';
import cl from '../../style/MainTariff.module.css';
import cli from '../../style/MainTItem.module.css'
import {connect} from "react-redux/lib";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper from "swiper";
import MyModal from '../UI/modal/MyModal';
import MyInput from '../UI/input/MyInput';
import MyMask from '../UI/maskinput/MyMask';
import MyBtnFiled from '../UI/buttonback/MyBtnFiled';
import {Pagination} from "swiper";
import postRequest from "../../redux/requests";
import MyThxModal from '../UI/thxmodal/MyThxModal';
import TariffsListContainer from '../TariffsList.Item';

let mapStateToProps = state => ({MainTariffPage: state.MainTariffPage, })
const MainTariff = props => {
    const [theme, setTheme] = useState('')
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})

    let forServerInfo = {}

    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now(), themePerson: theme
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        postRequest(forServerInfo)
    }

        let pager = 'pag' + ~~(Math.random()*1000)
        let swiperName = 'swiper' + ~~(Math.random()*1000)
    // className={cl.mySwiper}
    React.useEffect(() => {

        let swiper = null;
        let mediaQuerySize = 576;
        function catalogSliderInit() {
            if (!swiper) {
                swiper = new Swiper(`.${swiperName}`, {
                    modules: [Pagination],
                    slidesPerView: "auto",
                    speed: 400,
                    spaceBetween: 10,
                    // autoHeight: true,
                    pagination: {
                        el: '.'+pager,
                        type: 'bullets',
                    },

                }, []);
            }
        }
        function catalogSliderDestroy() {
            if (swiper) {
                swiper.destroy();
                swiper = null;
            }
        }
        function loadResize() {
            let windowWidth = window.innerWidth
            if (windowWidth <= mediaQuerySize) {
                catalogSliderInit()
            } else {
                catalogSliderDestroy()
            }
        }
        loadResize()
        window.addEventListener('load', loadResize);
        window.addEventListener('resize', loadResize);
    },[]);
    const tariffS = useRef('')
    return (
        <section ref={tariffS} className={cl.tariffSection} >

            {
                props.title
            }
            <div className={cl.tariffListBlock}>

                <div className={`swiper ${swiperName} ` + cl.mySwiper}>


                    <div className={'swiper-wrapper ' + cl.tariffList}>

                        {props.MainTariffPage.map((e, i) => (
                            <div className={'swiper-slide ' + cl.slide} key={i}>
                                <MainTItem img={e.img} title={e.title} descr={e.descr} price={e.price} dl={e.dl}
                                           key={e.title} setModal={setModal} setTheme={setTheme}/>
                            </div>
                        ))}
                    </div>

                    <div className={pager +' '+ cl.pag}/>

                </div>
            </div>
            <MyModal block={tariffS} visible={modal} setVisible={setModal} title='Оставить заявку' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </section>
    )
}

let MainTariffContainer = connect(mapStateToProps,
    {}
)(MainTariff)
export default MainTariffContainer
