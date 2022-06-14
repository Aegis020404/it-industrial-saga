import React from "react";
import cl from './../../style/SeoStable.module.css';

const SeoStableItem = ({title, descr, img})=>{
    return (
        <li className={cl.stableItem}>
            <span className={cl.stableImgBlock}>
                {img}
            </span>
            <h4 className={cl.stableITitle}>{title}</h4>
            <p className={cl.stableIDescr}>{descr}</p>
        </li>
    )
}

export default SeoStableItem