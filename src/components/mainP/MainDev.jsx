import React, {useMemo} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cl from './../../style/MainDev.module.css'

import {connect} from "react-redux/lib";

let mapStateToProps = state => ({MainDevPage: state.MainDevPage})


const MainDev = (props) => {
    let spaceBetweenSwiper = 50;
    let state = props.MainDevPage[props.column]

    useMemo(() => {
        if (window.innerWidth < 576) {
            spaceBetweenSwiper = 10
        }
    }, [])
    return (<section className={cl.MainDev}>
            <div className={["container", cl.container].join` `}>
                <h1 className={cl.text}>Процесс разработки сайта под ключ</h1>

                <Swiper
                    navigation={{
                        prevEl: '.arrPrev', nextEl: '.arrNext',
                    }}
                    pagination={{
                        el: '.pagination', renderBullet: function (index) {
                            return `<span class="dot swiper-pagination-bullet">${index}</span>`
                        }, type: 'fraction'
                    }}
                    spaceBetween={spaceBetweenSwiper}
                    autoHeight={true}
                    modules={[Navigation, Pagination]}
                    className={cl.mySwiper}>
                    <div className={cl.controlWrap}>
                        <div className={`arrPrev ${cl.arr}`}>
                            <span className={cl.arrowPrevGray}></span>
                        </div>
                        <div className={`pagination ${cl.pagination}`}>

                        </div>
                        <div className={`arrNext ${cl.arr}`}>
                            <span className={cl.arrowNextGray}></span>
                        </div>
                    </div>
                    {state.map((obj, i) => {
                        return (<SwiperSlide key={i} className={cl.Swiper}>
                                <div className={cl.contentBlock}>

                                    <div className={cl.wrapper}>
                                        <div className={cl.stepper}>
                                            <div className={cl.step}>{i + 1} этап</div>
                                            <div className={cl.title}>{obj.title}</div>
                                        </div>
                                        <div className={cl.photoWrapBlock}>
                                            <div className={cl.photoWrap}>
                                                <span className={[cl.photo, obj.photo].join` `}></span>
                                            </div>

                                        </div>

                                        {Array.isArray(obj.lists) ? <ul className={cl.wrapList}>
                                            {obj.lists.map((list, i) => {
                                                return <div key={i}>
                                                    <li className={cl.listItem}>
                                                        <div className={cl.line}></div>
                                                        <div>{list}</div>
                                                    </li>
                                                </div>
                                            })}
                                        </ul> : typeof obj.lists === 'object' ? <div className={cl.wholeText}>
                                            <div className={cl.innerTitle}>{obj.lists.title}</div>
                                            <ul className={cl.ulContainer}>
                                                {
                                                    obj.lists.list.map((el, i)=> <li className={cl.lis} key={i}>{el}</li>)
                                                }
                                            </ul>
                                        </div> : <div className={cl.wholeText}>{obj.lists}</div>}

                                        <div className={cl.stepCount}>
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className={cl.wrapperM}>
                                        <div className={cl.stepperM}>
                                            <div className={cl.stepperBlock}>
                                                <div className={cl.stepM}>{i + 1} этап</div>
                                                <div className={cl.titleM}>{obj.title}</div>
                                                {Array.isArray(obj.lists) ?    <ul className={cl.listBlockM}>
                                                    {obj.lists.map((list, i) => {
                                                        return <div key={i}>
                                                            <li className={cl.listIteMm}>
                                                                <div className={cl.line}></div>
                                                                <div>{list}</div>
                                                            </li>
                                                        </div>
                                                    })}
                                                </ul> : typeof obj.lists === 'object' ? <div className={cl.wholeText}>
                                                    <div className={cl.innerTitle}>{obj.lists.title}</div>
                                                    <ul>
                                                        {
                                                            obj.lists.list.map((el, i)=> <li key={i} >{el}</li>)
                                                        }
                                                    </ul>
                                                </div> : <div className={cl.wholeText}>{obj.lists}</div>}
                                            </div>
                                            <div className={cl.stepCountM}>
                                                {i + 1}
                                            </div>
                                        </div>
                                        <div className={cl.photoBlockM}>
                                            <div className={cl.photoWrapM}>
                                                <span className={[cl.photoM, obj.photo].join` `}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    })}
                </Swiper>
            </div>

        </section>)

};
const MainDevContainer = connect(mapStateToProps, {})(MainDev)

export default MainDevContainer;
