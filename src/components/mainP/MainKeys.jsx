import React from 'react';
import cl from '../../style/MainKeys.module.css';
import MainKItem from './MainKItem';
import MyBtnBlank from './../UI/buttonborder/MyBtnBlank';
import imgPhone from './../../assets/img/orange-phone-block.jpg';
import imgAmout from './../../assets/img/black-gadjets-block.jpg';
import imgPag from './../../assets/img/pad-keys.png';
import imgEvo from './../../assets/img/logo-evo.svg';
import imgFamale from './../../assets/img/female-sort.png';
import imgPadH from './../../assets/img/pad-hockey.png';
import imgPadM from './../../assets/img/pad-mobile.jpg';
import imgEkoM from './../../assets/img/eko-mobile.jpg';
import {Link, NavLink} from "react-router-dom";

const MainKeys = () => {

    const itemInfo = [{
        count: 2,
        info: [{
            href: '/строй-мат',
            descr: 'Интернет-магазин «Строймат»',
            classes: cl.imgPhone,
            img: imgPhone,
            alt: 'Website компании "Строймат" на телефоне'
        }, {
            href: '/avto-estetica',
            descr: 'Интернет-магазин «Автоэстетика»',
            classes: cl.imgAmout,
            img: imgAmout,
            alt: 'Website компании "Автоэстетика" на телефоне и ноутбуке'
        }]
    }, {
        count: 1,
        info: [{
            href: '/llumar',
            descr: 'Сайт компании «Llumar»',
            classes: [cl.imgPad, cl.imgPadM],
            img: [imgPag, imgPadM],
            alt: 'Website компании "Llumar" на планшете'
        }]
    }, {
        count: 2,
        info: [{
            href: '/ec-vtor',
            descr: 'Разработка сайта компании «Эковтор»',
            classes: cl.imgEva,
            img: [imgEvo, imgFamale, imgEkoM],
            alt: '"Ековтор" - экологически чистая компания, спасает природу, перерабатывая бумагу, пластик, пластмассы'
        }, {
            href: '/hock-team',
            descr: 'Сайт для хоккейной команды',
            classes: cl.imgMiniPad,
            img: imgPadH,
            alt: 'Website хоккейной команды на планшете'
        }]
    }]

    return (
        <section className={cl.keys}>
            <div className="container">
                <div className={cl.keysContent}>
                    <h2 className={cl.keysTitle}>Наши кейсы</h2>
                    <p className={cl.keysDescr}>В каждом проекты мы разрабатываем и внедряем новые решения</p>
                    <div className={cl.keysListBlock}>
                        <ul className={cl.keysList}>
                            {itemInfo.map((e, i) =>
                            <MainKItem count={e.count} infoArr={e.info} key={i}/>
                            )}
                        </ul>
                    </div>
                    <Link to='/keys' onClick={e => {
                        document.body.scrollTo({top: 0, behavior: 'smooth'})
                    }}>
                        <MyBtnBlank classes={cl.keysBtn}>все кейсы</MyBtnBlank>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default MainKeys