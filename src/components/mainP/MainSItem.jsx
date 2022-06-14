import React from "react";
import cl from '../../style/MainSimple.module.css';

const MainSItem = ({title, descr, count})=>{
    return (
        <li className={cl.simpleItem}>
            <div className={cl.simpleCount}>
                {count}
            </div>
            <h3 className={cl.simpleItemTitle}>{title}</h3>
            <p className={cl.simpleItemDescr}>{descr}</p>
        </li>
    )
}

export default MainSItem