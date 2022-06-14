import React, { useState } from "react";
import cl from '../../style/MainTItem.module.css';
import MyBtnFiled from "./../UI/buttonback/MyBtnFiled";
import MyBtnBlank from "./../UI/buttonborder/MyBtnBlank";
import MyModal from "./../UI/modal/MyModal";
import MyMask from "../UI/maskinput/MyMask";
import MyInput from "../UI/input/MyInput";
import postRequest from "../../redux/requests";


const MainTItem = ({img, title, descr, price, dl, setModal, setTheme})=>{
    return (
        <li className={cl.tariffItem}>
            <div className={cl.tariffContent}>
                <div className={cl.tariffHeader}>
                    <span className={img}>

                    </span>
                    <h3 className={cl.tariffTitle}>{title}</h3>
                </div>
                <div className={cl.tariffCIBlock}>
                    <ul className={cl.tariffCList}>
                        <li className={cl.tariffСlause}><span className={cl.tariffCycle}></span><div className={cl.tariffClauseText}>{descr[0]}</div></li>
                        <li className={cl.tariffСlause}><span className={cl.tariffCycle}></span><div className={cl.tariffClauseText}>{descr[1]}</div></li>
                        <li className={cl.tariffСlause}><span className={cl.tariffCycle}></span><div className={cl.tariffClauseText}>{descr[2]}</div></li>
                    </ul>
                </div>
                <div className={cl.tariffPriceBlock}>
                    <div className={cl.tariffPriceContent}>
                        <span className={cl.tariffPriceinside}>
                            от
                        </span>
                        <span className={cl.tariffPrice}>
                            {price}
                        </span>
                        <span className={cl.tariffPriceRuble}>
                            руб.
                        </span>
                    </div>
                </div>
                <div className={cl.tariffTermBlock}>
                    <span className={cl.tariffTerm}>{dl}</span>
                </div>
                <div className={cl.tariffBtnBlock}>
                    {setModal !== undefined ? <MyBtnBlank classes={cl.tariffButton} onClick={e=>{e.preventDefault(); setModal(true); setTheme(title)}}>ЗАКАЗАТЬ</MyBtnBlank> : console.log(1)}
                </div>
            </div>
           
        </li>
    )
}

export default MainTItem