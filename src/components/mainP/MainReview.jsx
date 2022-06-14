import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import photoOfClient from './../../assets/img/photoOfClient.png'
import arrPrevRev from './../../assets/img/arrPrevRev.svg'
import arrNextRev from './../../assets/img/arrNextRev.svg'
import cl from './../../style/MainReview.module.css'

const MainReview = () => {
    let state = [
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },

    ]
    return (
        <section className={cl.MainReview}>
            <p className={cl.title}>98% наших клиентов довольны результатом</p>
            <div className={cl.container}>
                <div className={`arrPrevRev ${cl.arrPrevWrap}`}>
                    <span className={cl.arrPrev}></span>
                </div>

                <Swiper
                    autoHeight={true}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.arrPrevRev',
                        nextEl: '.arrNextRev',
                        disabledClass: cl.disabledMainRew
                    }}
                    pagination={{
                        el: '.paginationRev',
                    }}
                    className={cl.mySwiper}
                    modules={[Navigation, Pagination]}>
                    {state.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <div className={cl.wrapper}>
                                <div>
                                    <img src={obj.photo} alt="photo" className={cl.photo}/>
                                    <p className={cl.name}>{obj.name}</p>
                                    <p className={cl.position}>{obj.position}</p>
                                </div>
                                <div className={cl.comment}>
                                    {obj.comment}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`arrNextRev ${cl.arrNextWrap}`}>
                    <span className={cl.arrNext}></span>
                </div>
            </div>
            <div className={cl.containerM}>
                <Swiper
                    navigation={{
                        prevEl: '.arrPrevRev',
                        nextEl: '.arrNextRev',
                        disabledClass: cl.disabledMainRew
                    }}
                    autoHeight={true}
                    modules={[Navigation, Pagination]}>
                    {state.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <div className={cl.wrapper}>
                                <div className={cl.wrapperPhotoPerson}>
                                    <div className={cl.photoBlock}>
                                        <img src={obj.photo} alt="photo" className={cl.photo}/>
                                        <p className={cl.name}>{obj.name}</p>
                                    </div>
                                    <p className={cl.position}>{obj.position}</p>
                                </div>
                                <div className={cl.comment}>
                                    {obj.comment}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cl.arrBlock}>
                    <div className={`arrPrevRev ${cl.arrPrevWrap}`}>
                        <span className={cl.arrPrev}></span>
                    </div>
                    <div className={`arrNextRev ${cl.arrNextWrap}`}>
                        <span className={cl.arrNext}></span>
                    </div>
                </div>
            </div>
            <div className={`paginationRev ${cl.pagination}`}> </div>

        </section>
    );
};

export default MainReview;