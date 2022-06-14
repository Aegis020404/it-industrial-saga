import React from "react";
import cl from './MyMask.module.css';
import InputMask from 'react-input-mask';

const MyMask = ({classesItem, ...props})=>{
    return (
        <InputMask required mask="+7 999 999-99-99" placeholder="+7 ___ ___-__-__" maskChar="_" className={[cl.maskInput, classesItem].join` `} {...props}/>
    )
}

export default MyMask