import React, {useState} from "react";
import MyBtnBlank from "./../UI/buttonborder/MyBtnBlank";
import cl from '../../style/MainOther.module.css';

const MainOItem = ({title, img, setModalItem})=>{

    const [modal, setModal] = useState(false)

    return (
        <li className={cl.otherItem}>
            <h3 className={cl.otherItemTitle}>{title}</h3>
            <img className={cl.otherItemImgBlock} src={img}/>
            <MyBtnBlank classes={cl.otherItemBtn} onClick={e=>{e.preventDefault(e); setModalItem(true)}}>ЗАКАЗАТЬ</MyBtnBlank>
        </li>
    )
}

export default MainOItem