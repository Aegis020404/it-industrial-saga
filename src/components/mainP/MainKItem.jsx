import React from "react";
import cl from '../../style/MainKeys.module.css';

const MainKItem = ({count, infoArr})=>{
    return (
        <li className={cl.keysItem}>
            {count === 2 ?  
                <div className={cl.keysIContentS}>
                    <figure  alt={infoArr[0].alt} className={cl.keysILeft}>
                        {infoArr[0].classes == cl.imgEva ?  <div className={cl.evaBlock}>
                            <img src={infoArr[0].img[0]} alt="logo Ekovtor" className={[cl.evaLogo].join` `}/>
                            <img src={infoArr[0].img[1]} alt="female Ekovtor" className={[cl.femaleimgSort].join` `}/>
                            <img src={infoArr[0].img[2]} className={[cl.ekoM].join` `}/>
                        </div>
                        :   <img src={infoArr[0].img} className={[cl.keysImg, infoArr[0].classes].join` `}/>}
                        <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                    </figure>
                    <figure alt={infoArr[1].alt} className={cl.keysIRight}>
                        {infoArr[1].classes == cl.imgMiniPad ? 
                        <div className={cl.padBlock}>
                            <img src={infoArr[1].img}  className={[infoArr[1].classes].join` `}/>
                        </div>
                        :  <img src={infoArr[1].img}  className={[cl.keysImg, infoArr[1].classes].join` `}/>}
                        <figcaption className={cl.keysIDescr}>{infoArr[1].descr}</figcaption>
                    </figure>
                </div>
            :  
                <figure  alt={infoArr[0].alt}  className={cl.keysIContentF}>
                    <div className={cl.keysImgBlockF}>
                    <img src={infoArr[0].img[0]}className={[cl.keysImg, infoArr[0].classes[0]].join` `}/>
                    <img src={infoArr[0].img[1]}className={[cl.keysImg, infoArr[0].classes[1]].join` `}/>
                    </div>
                    <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                </figure>
            }
        </li>
    )
}

export default MainKItem