import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux/lib";
import cl from './../style/keySite.module.css'
import {NavLink} from "react-router-dom";
import MainApplication from "../components/mainP/MainApplication";
import miniPhone from './../assets/img/miniPhone.png'
import MyModal from "../components/UI/modal/MyModal";
import MyThxModal from "../components/UI/thxmodal/MyThxModal";
import MyBtnBlank from "../components/UI/buttonborder/MyBtnBlank";
import NavPagesHead from '../components/UI/navpage/MyNavPages';

const KeySite = (props) => {
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    let [state] = props.KeySitePage.filter(el => el.href === props.match.path)
    const keyItem = useRef('')
    useEffect(()=>{
        keyItem.current.classList.toggle('keyI')
    },[keyItem])
    const infoPage = [{text: 'Кейсы', link: '/keys'}, {text: state.descrAchor}]
    return (
        <div ref={keyItem} className={[cl.KeySite, 'key'].join` `} >
                <NavPagesHead navItems={infoPage}/>
            <div className={cl.container}>
                <div className={cl.descr}>{state.descr}</div>
                <div className={cl.achorSite}>
                    { state.achorSite ? <a href={state.achorSite[1]} target='_blank' className={cl.hrefSite} >{state.achorSite[0]}</a> : ''}
                </div>
                <div className={cl.about}>
                    <div className={cl.aboutCompany}>
                        <div className={cl.title}>О компании</div>
                        <div className={cl.text}>
                            {state.aboutCompany}
                        </div>
                    </div>
                    <div className={cl.task}>
                        <div className={cl.title}>Задача</div>
                        <div className={cl.text}>
                            {state.task}
                        </div>
                    </div>
                </div>

            </div>


            {state.imageInfo.map((el, i) => (
                <div className={cl.photoWrap}>
                    <h1 className={cl.imageInfo}>{state.imageInfo[i][0]}</h1>
                    <img src={state.imageInfo[i][1]} alt="" className={cl.photo}/>
                </div>
            ))
            }

            <div className={cl.publicity}>
                <div className={cl.wrapMiniPhone}>
                    <svg className={cl.miniPhone} width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8105 8.82038C10.8105 7.67803 11.7366 6.75195 12.879 6.75195H17.0158C18.1582 6.75195 19.0843 7.67803 19.0843 8.82038C19.0843 9.96273 18.1582 10.8888 17.0158 10.8888H12.879C11.7366 10.8888 10.8105 9.96273 10.8105 8.82038Z" fill="#F84263"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.46875 6.75216C0.46875 3.32509 3.24696 0.546875 6.67404 0.546875H23.2215C26.6487 0.546875 29.4268 3.32509 29.4268 6.75216V35.7102C29.4268 39.1374 26.6487 41.9155 23.2215 41.9155H6.67404C3.24696 41.9155 0.46875 39.1374 0.46875 35.7102V6.75216ZM4.60561 31.5733V6.75216C4.60561 5.60981 5.53169 4.68373 6.67404 4.68373H23.2215C24.3639 4.68373 25.2899 5.60981 25.2899 6.75216V31.5733H4.60561ZM25.2899 35.7102H4.60561C4.60561 36.8526 5.53169 37.7786 6.67404 37.7786H23.2215C24.3639 37.7786 25.2899 36.8526 25.2899 35.7102Z" fill="#F84263"/>
                    </svg>

                </div>
                <div className={cl.titlePubl}>Понравилось? Закажите подобное решение</div>
                <div className={cl.textPubl}>Мы свяжемся с вами, ответим на интересующие вопросы и подготовим
                    коммерческое предложение
                </div>
                <div className={cl.tel}>+7 (925) 117-00-46</div>
                <MyBtnBlank classes={cl.btn} onClick={e => {
                    e.preventDefault(e);
                    setModal(true)
                }}>получить консультацию</MyBtnBlank>
            </div>
                <MyModal visible={modal} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
                <MyThxModal visible={thxModal} setVisible={setThxModal}/>


            <MainApplication/>
        </div>
    );
};
const mapStateToProps = (state) => ({
    KeySitePage: state.KeySitePage
})
const KeySiteContainer = connect(mapStateToProps, {})(KeySite)
export default KeySiteContainer;