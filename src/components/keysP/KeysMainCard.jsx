import React, {useMemo, useState} from "react";
import MyBtns from "../UI/btnsnav/MyBtns";
import cl from './../../style/KeysMain.module.css';
import { connect } from 'react-redux/lib/exports';
import { selectBtnKeys } from "../../redux/keysNav-redux";
import KeysMainSites from "./KeysMainSites";
import KeysMainSeo from "./KeysMainSeo";
import KeysMainMobile from "./KeysMainMobile";
import KeysMainCrm from "./KeysMainCrm";

const KeysMainCard = (props)=>{
    let countPages = 4
    const [tabActive, setTabActive] = useState(0)
    const [arrClasses, setArrClasses] = useState([{class: cl.active},{class: cl.disable},{class:cl.disable}, {class:cl.disable}])
    useMemo(()=>{
        (()=>{
            setArrClasses(arrClasses.fill({class: cl.disable}))
            let active = arrClasses.map((e,i)=>i==tabActive?{class: cl.active}:e)
            setArrClasses(active)
        })()
    },[tabActive])
    return (
        <div className={cl.keysNavBlock}>
            <nav className={cl.keysNav}>
                <MyBtns arrBtns={props.state.btns} setTabActive={setTabActive} selectBtn={props.selectBtnKeys} btnsClasses={cl.keysNavList} btnClasses={cl.keysNavItem} itemSwipeClasses={cl.keysSwipeItem}/>
            </nav>
            <KeysMainSites classesTabs={arrClasses[0].class}/>
            <KeysMainSeo  classesTabs={arrClasses[1].class}/>
            <KeysMainMobile  classesTabs={arrClasses[2].class}/>
            <KeysMainCrm  classesTabs={arrClasses[3].class}/>
        </div>
    )
}

let mapStateToProps = state => ({
    state: state.keysNavPage
})
const KeysMainContainer = connect(mapStateToProps, {selectBtnKeys})(KeysMainCard)

export default KeysMainContainer