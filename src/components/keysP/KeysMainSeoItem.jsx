import React, {useRef, useState, useEffect} from 'react';
import cl from './../../style/KeysMainSeo.module.css';
import {togglePhoto} from "../../redux/keysMainSeo-redux";
import KeysMainSeoInput from './KeysMainSeoInput';
import mediumZoom from 'medium-zoom';


const KeysMainSeoItem = ({nameCompany, linkCompany, beenTopTen, becameTopTen, beenTraffic, becameTraffic, schedule, index,scheduleSet})=>{
    const [checkImg, setCheckImg] = useState(false)
    const imgItem = useRef('')
    const figureItem = useRef('')

    const figureMove = e=>{
        let rect = e.target.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top
        if(window.innerWidth >576){
            imgItem.current.style.transformOrigin = `${x}px ${y}px`
            imgItem.current.style.transform = `scale(2)`    
        }
        
    }
    const figureLeave = e=>{
        imgItem.current.style.transform = 'none'
    }
    const figureActive = (e)=>{
        if(window.innerWidth <= 576) {
            e.target.classList.toggle(cl.figureActive)
        }
    }

    return (
        <li className={cl.seoItem}>
            <div className={cl.seoItemBlock}>
                <div className={cl.seoLeftBlock}>
                    <h3 className={cl.seoItemTitle}>Продвижение «{nameCompany}»</h3>
                    <a className={cl.seoItemLink} target='_blank' href={linkCompany}>{linkCompany}</a>
                    <div className={cl.seoChangeBlock}>
                        <div className={cl.seoChangeTop}>
                            <p className={cl.seoChangeTopTitle}>Было:</p>
                            <div className={cl.seoChangeCard}>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeTopDescr}>В ТОП 10 Яндекс</p>
                                    <p className={cl.seoChangeTopCount}>{beenTopTen}</p>
                                </div>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeTopDescr}>Трафик</p>
                                    <p className={cl.seoChangeTopCount}>{beenTraffic} пос/мес</p>
                                </div>
                            </div>
                        </div>
                        <div className={cl.seoChangeBottom}>
                            <p className={cl.seoChangeBottomTitle}>Стало:</p>
                            <div className={cl.seoChangeCard}>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeBottomDescr}>В ТОП 10 Яндекс</p>
                                    <p className={cl.seoChangeBottomCount}>{becameTopTen}</p>
                                </div>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeBottomDescr}>Трафик</p>
                                    <p className={cl.seoChangeBottomCount}>{becameTraffic} пос/мес</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.seoRightBlock}>
                    <p className={cl.seoRightTopTen}>Количество запросов в ТОП-10</p>
                    <div className={cl.seoSwitchBlock}>
                        <div className={cl.seoSwitch} onClick={ e => {e.preventDefault();e.target.classList.toggle(cl.active); setCheckImg(!checkImg)}}>
                            <span className={cl.seoSwitchitem}></span>
                        </div>
                        <p className={cl.seoSwitchDescr}>Скриншот</p>
                    </div>
                    <div>
                        {checkImg ? 
                            <div className={cl.imgCard}>
                                <figure ref={figureItem} className={cl.imgBlock} onClick={e=>figureActive(e)} onMouseMove={e=>figureMove(e)} onMouseLeave={e=>figureLeave(e)}>
                                    <img ref={imgItem} src={schedule[1].img} className={cl.img} id='graph'/>
                                </figure>
                               
                            </div>  
                        :
                            <div className={cl.seoRightCard}>
                                <div className={cl.seoCountBlock}>
                                    <ul className={cl.seoCountList}>
                                            {schedule[0].numbers.map((e, i)=><li className={cl.seoCountItem} key={i}>{e}</li>)}
                                    </ul>
                                </div>
                                <div className={cl.seoGraphBlock}>
                                    <div className={cl.seoLeftGraph}>
                                        <div className={cl.seoGraphTop}>
                                            <ul className={cl.seoGraphRightL}>
                                                {schedule[0].monthsGrey.map((e, i)=><li key={i} className={cl.seoGraphItem}>
                                                    <KeysMainSeoInput  schedule={schedule[0]} inputInfo={e} position={false}/>
                                                    <p className={cl.seoGraphNameM}>{e.name}</p>
                                                </li>)}
                                                
                                            </ul>
                                        </div>
                                        <div className={cl.seoGraphBottom}>БЫЛО</div>
                                    </div>
                                    <div className={cl.sepRightGraph}>
                                        <div className={cl.seoGraphTop}>
                                            <ul className={cl.seoGraphRightR}>
                                                {schedule[0].monthsPink.map((e,i)=><li key={i} className={cl.seoGraphItem}>
                                                    <KeysMainSeoInput  schedule={schedule[0]} inputInfo={e} position={true}/>
                                                    <p className={cl.seoGraphNameM}>{e.name}</p>
                                                </li>)}
                                            </ul>
                                        </div>
                                        <div className={cl.seoGraphBottom}>СТАЛО</div>
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </li>
    )
}

export default KeysMainSeoItem