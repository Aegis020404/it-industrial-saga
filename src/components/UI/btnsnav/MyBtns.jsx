import React from 'react';
import cl from './MyBtns.module.css';
import {Swiper} from "swiper";

const MyBtns = ({arrBtns, selectBtn, btnsClasses, btnClasses, setTabActive,itemSwipeClasses}) => {
    React.useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 900;

        function catalogSliderInit() {
            if (!swiper) {
                swiper = new Swiper('.swiperBtnsCase', {
                    slidesPerView: 'auto',
                    speed: 400,
                    spaceBetween: 10,
                })
            }
        }

        function catalogSliderDestroyd() {
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
                catalogSliderDestroyd()
            }
        }
        window.addEventListener('load', loadResize);
        window.addEventListener('resize', loadResize);

    });

            return (

                // <div className={[cl.btns, btnsClasses].join` `}>
                <div className="swiperBtnsCase swiper ">
                    <div className={"swiper-wrapper " + [cl.btns, btnsClasses].join` `}>
                        {arrBtns.map((el, i) => (
                            <div className={"swiper-slide " + cl.swipeSl + ' ' + itemSwipeClasses} key={i}>
                                <button
                                    className={el.selected ? [cl.btn, cl.btnSelected, btnClasses].join` ` : [btnClasses, cl.btn].join` `}
                                    key={i} my_key={i}
                                    onClick={(e, i) => {
                                        selectBtn(e.target.getAttribute('my_key'))
                                        setTabActive(e.target.getAttribute('my_key'))
                                        e.preventDefault();
                                    }}>
                                    {el.text}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-scrollbar"></div>
                </div>

                // </div>
            )
        }


        export default MyBtns