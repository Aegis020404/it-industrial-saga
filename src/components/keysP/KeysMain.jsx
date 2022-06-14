import React, {useState} from "react";
import cl from './../../style/KeysMain.module.css';
import MyTitle from "../UI/titlepage/MyTitle";
import KeysMainCard from "./KeysMainCard";
import MyNavPages from './../UI/navpage/MyNavPages';

const KeysMain = ()=>{
    const [navInfoArr, setNavInfoArr] = useState(['Кейсы']);
    return (
        <section className={cl.keysMain}>
            <div className={["container", cl.cont].join` `}>
                <div className={cl.keysCont}>
                    <MyTitle title='Кейсы' classes={cl.keysTitle} />
                    <KeysMainCard setNavInfo={setNavInfoArr} />
                </div>               
            </div>
        </section>
    )
}

export default KeysMain