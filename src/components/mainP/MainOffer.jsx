import React, {useMemo, useState, useEffect} from 'react';
import cl from './../../style/MainOffer.module.css'
import MyBtnFiled from './../UI/buttonback/MyBtnFiled'
import MyMask from './../UI/maskinput/MyMask'
import MyInput from "./../UI/input/MyInput";
import Ranger from "./../UI/ranger/Ranger";
import MyModal from '../UI/modal/MyModal';
import {connect} from "react-redux/lib";
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import ContactsService from '../../API/ContactsService';
import MyThxModal from '../UI/thxmodal/MyThxModal';
import {selectBtn} from "../../redux/mainOffer-redux";

const MainOffer = (props) => {
    const [btnActive, setBtnActive] = useState('')

    const [priceTo, setPriseTo] = useState(0)
    const [priceFrom, setPriseFrom] = useState(0)

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: '', themeSite: '', range: {from: '', to: ''}})
    const [modal, setModal] = useState(false)

    let forServerInfo = {}

    useMemo(() => {
        setModalInfo((mf)=>({...mf, range: {from: priceFrom, to: priceTo}}))
    }, [priceTo, priceFrom])

    useMemo(() => {

        setModalInfo(()=>({...modalInfo, themeSite: btnActive}))
    }, [btnActive])
    useMemo(()=> {
        setBtnActive(() => props.state.btns.filter(el=>el.selected).map(el => el.text))
    },[props.state.btns])
    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(true);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo(()=>({namePerson: '', tel: '', range: {from: priceFrom, to: priceTo}, themeSite: ''}))
        console.log(modalInfo)
        ContactsService.setPhonaNameBudget(forServerInfo.namePerson, forServerInfo.tel, forServerInfo.range.from, forServerInfo.range.to)
    }
    return (
        <section className={cl.MainOffer}>
            <div className={["container", cl.container].join` `}>
                <div className={cl.wrapper}>
                    <span className={cl.mailRight}/>
                    <span className={cl.mailLeft}/>
                    <p className={cl.title}>Получить коммерческое предложение</p>
                    <p className={cl.titleText}>Заполните форму сейчас и наш специалист свяжется с вами для консультации
                        и составит ваше персональное предложение. Вы получите более точное КП, если укажете полную
                        информацию о проекте.</p>
                    <div className={cl.btnsM}>
                        <Swiper
                            slidesPerView={"auto"}
                            autoHeight={true}
                            spaceBetween={10}

                            className={cl.mySwiper}>

                            {props.state.btns.map((el, i) => (
                                <SwiperSlide className={cl.swipeSl} key={i}>
                                    <button className={el.selected ? `${cl.btn} ${cl.btnSelected}` : cl.btn}  my_key={i}
                                            onClick={e => {
                                                props.selectBtn(e.target.getAttribute('my_key'))
                                                e.preventDefault();
                                            }}>{el.textS}
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={cl.btns}>
                        {props.state.btns.map((el, i) => (
                            <button className={el.selected ? `${cl.btn} ${cl.btnSelected}` : cl.btn} key={i} my_key={i}
                                    onClick={(e,i) => {
                                        props.selectBtn(e.target.getAttribute('my_key'))
                                        e.preventDefault();
                                    }}>{el.text}
                            </button>
                        ))}
                    </div>

                    <div className={cl.prices}>
                        <p className={cl.titlePrices}>Бюджет проекта</p>
                        <p className={cl.titlePricesText}>Укажите примерную сумму, которую плнируете потратить на
                            реализацию проекта</p>
                        <Ranger setTo={setPriseTo} priceTo={priceTo} priceFrom={priceFrom} setFrom={setPriseFrom}/>
                    </div>

                    <div className={cl.contacts}>
                        <form id='offer' action="">
                            <p className={cl.titleContacts}>Контакты</p>
                            <div className={cl.contactsBtn}>
                                <div className={cl.itemBlock}>
                                    <MyInput classesInput={cl.input} valueInput={modalInfo.namePerson}
                                             setInput={setModalInfo} input={modalInfo} classesPlace={cl.modalPlace}
                                             place='Введите ваше имя'/>
                                </div>
                                <div className={cl.itemBlock}>
                                    <MyMask classesItem={[cl.input, cl.modalMask, cl.mask].join` `}
                                            value={modalInfo.tel}
                                            onChange={e => setModalInfo({...modalInfo, tel: e.target.value})}/>
                                </div>
                            </div>
                            <p className={cl.agreement}>Нажимая на кнопку, вы даете согласие на обработку ваших
                                персональных
                                данных</p>
                            <div className={cl.requestWrap}>
                                <MyBtnFiled type='submit' form='offer' children={'получить консультацию'}
                                            onClick={e => addModalInfo(e)}
                                            classes={cl.request}/>
                                <MyBtnBlank type='submit' form='offer' children={'получить консультацию'}
                                            onClick={e => addModalInfo(e)}
                                            classes={cl.requestM}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    );

};

let mapStateToProps = state => ({
    state: state.mainOfferPage
})
const MainOfferContainer = connect(mapStateToProps, {selectBtn})(MainOffer)

export default MainOfferContainer;