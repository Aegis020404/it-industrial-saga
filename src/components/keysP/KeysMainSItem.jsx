import React from 'react';
import cl from './../../style/KeysMain.module.css';

const KeysMainSItem = ({descr, logo, img, background, alt, classesImg})=>{
    return (
        <li className={cl.keysSitesItem}>
            <figure alt={alt} className={cl.keysSitesIFigure}>
                <div className={cl.keysSitesIImgBlock} style={{backgroundColor: background}}>
                    <div className={cl.keysSitesIImgCard}>
                        <span className={cl.keysSitesILogo}>
                            {logo}
                        </span>
                    </div>
                    <div className={[cl.keysSitesIImgCard,classesImg].join` `}>
                        <img src={img} className={cl.keysSitesIImg}/>
                    </div>
                </div>
                <figcaption className={cl.keysSitesIDescr}>{descr}</figcaption>
            </figure>
        </li>
    ) 
}

export default KeysMainSItem