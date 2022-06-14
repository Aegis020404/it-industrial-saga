import React from "react";
import cl from './../../style/SeoMonth.module.css';

const SeoMonthItem = ({title, descr})=>{
    return (
        <li className={cl.monthItem}>
            <h4 className={cl.monthITitle}>{title}</h4>
            <p className={cl.monthIDescr}>{descr}</p>
        </li>
    )
}

export default SeoMonthItem