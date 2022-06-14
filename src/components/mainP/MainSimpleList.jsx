import React from 'react';
import cl from '../../style/MainSimple.module.css';
import MainSItem from './MainSItem';
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper, {Pagination} from "swiper";

const MainSimpleList = () => {

    const itemInfo = [{
        title: 'Отвечаем на все вопросы быстро',
        descr: 'В рабочее время. Не игнорируем, а обсуждаем задачи и устанавливаем сроки на их выполнение.',
        count: '01.'
    },
        {
            title: 'Разбиваем оплату по этапам',
            descr: 'В зависимости от видов работ оплата делится на 2 или 3 этапа. Все условия прописаны в договоре.',
            count: '02.'
        },
        {
            title: 'Контролируем сроки',
            descr: 'Работаем с системой управления проектами. У нас есть отдельный специалист (проект-менеджер), который отвечает за сроки.',
            count: '03.'
        },
        {
            title: 'Экономим ваше время',
            descr: 'Планируем удобное время для общения с вами, проведения интервью и ответов на вопросы.',
            count: '04.'
        },
        {
            title: 'Не навязываем абонентскую поддержку',
            descr: 'Все сайты мы делаем так, чтобы клиент мог самостоятельно им управлять по максимуму и чтобы постоянная поддержка не требовалась',
            count: '05.'
        },
        {
            title: 'Даем гарантии',
            descr: 'Гарантированная поддержка сайта после сдачи проекта. Гарантия в правильном юридическом оформлении услуг',
            count: '06.'
        }]


    React.useEffect(() => {
        let swiperS = null;
        let mediaQuerySize = 576;

        function catalogSliderInit() {
            if (!swiperS) {
                swiperS = new Swiper('.swiperSim', {
                    modules: [Pagination],
                    slidesPerView: "auto",
                    speed: 400,
                    // spaceBetween: 30,
                    // autoHeight: true,
                    pagination: {
                        el: '.pagS',
                        type: 'bullets',
                    },
                }, []);
            }
        }

        function catalogSliderDestroy() {
            if (swiperS) {
                swiperS.destroy();
                swiperS = null;
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

        window.addEventListener('load', loadResize);
        window.addEventListener('resize', loadResize);
    });


    return (
        <div>
            <div className={'swiper swiperSim ' + cl.mySwiper}>


                <div className={'swiper-wrapper ' + cl.simpleList}>
                    {itemInfo.map((e, i) => (
                        <div className={'swiper-slide ' + cl.swipSl}  key={i}>
                            <MainSItem title={e.title} descr={e.descr} count={e.count}/>
                        </div>
                    ))}

                </div>
                <div className={'pagS ' + cl.pag}></div>


            </div>
           
        </div>
    )
}

export default MainSimpleList