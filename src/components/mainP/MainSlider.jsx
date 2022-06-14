import React, {useEffect, useRef, useState} from 'react';
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper from "swiper";
import {Pagination, Navigation} from "swiper";
import {connect} from "react-redux/lib";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MyModal from './../UI/modal/MyModal';
import MyBtnFiled from './../UI/buttonback/MyBtnFiled';
import MyMask from './../UI/maskinput/MyMask';
import MyInput from './../UI/input/MyInput';
// import required modules


import "./../../style/swiper.css";
import cl from '../../style/Slider.module.css';
import MyBtnBlank from './../UI/buttonborder/MyBtnBlank';
import postRequest from "../../redux/requests";
import ContactsService from '../../API/ContactsService';
import MainTItem from "./MainTItem";
import MyThxModal from '../UI/thxmodal/MyThxModal';

let mapStateToProps = state => ({mainSlider: state.mainSliderPage});


const Slider = (props) => {
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})

    let forServerInfo = {}

    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        console.log(forServerInfo);
        postRequest(forServerInfo)
        ContactsService.setPhoneNName(modalInfo.tel, modalInfo.namePerson)
    }

    const sliderI = useRef(false)

    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)

    React.useEffect(() => {
        let swiper = new Swiper('.swiperSlider', {
            navigation: {
                prevEl: '.prevElSlider',
                nextEl: '.nextElSlider'
            },
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 10,
            modules: [Navigation, Pagination],
            pagination: {
                el: '.pagSlider'
            }
        })
    })
    return (
        <section className={cl.slider}>
            <div className={'swiper swiperSlider ' + cl.mySwiper}>


                <div className={'swiper-wrapper'}>


                        {
                            props.mainSlider.map((item, i) => (
                                <div className={'swiper-slide'} key={i}>

                                    <div className={['container ', cl.contentCont].join` `}>
                                        <div className={cl.wrapper}>
                                            <div className={cl.textBlock}>
                                                <div className={cl.textWrap}>
                                                    <div className={cl.heading}>
                                                        {item.title}
                                                    </div>
                                                    <div className={cl.text}>
                                                        {item.botTitle}
                                                    </div>
                                                    <MyBtnBlank classes={cl.btn} onClick={e => {
                                                        e.preventDefault(e);
                                                        setModal(true)
                                                    }}>получить консультацию</MyBtnBlank>
                                                    {/*<div className={`pag ${cl.pag}`}></div>*/}

                                                </div>
                                            </div>
                                            <div className={cl.imgBlock}>
                                                <div className={cl.photoWraper}>
                                                    <div className={cl.photoWrap}>
                                                        <span className={[cl.photo, item.photo].join` `}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}

                </div>
                <div className="swiper-pagination pagSlider"></div>

                <div className="swiper-button-prev prevElSlider"></div>
                <div className="swiper-button-next nextElSlider"></div>
                <div className="swiper-scrollbar"></div>

            </div>

            <MyModal visible={modal} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </section>

    );
};

const SliderContainer = connect(mapStateToProps, {})(Slider)
export default SliderContainer;
