import React, { useMemo, useRef, useEffect, useState } from "react";
import cl from '../../style/MainQuiz.module.css';

const MainQItem = ({name, count, subtitle, setQuizItems, quizItems, countArr, arrItems, setArrItems, price})=>{
    
    const checkChange = useRef(false)
    const subtitleItem = useRef(false)
    const listItem = useRef(false)
   
  
    // useEffect(()=>{setValue(true); setValueInput(checkChange.current.checked)},[value])

    const changeItems = (e)=>{
        e.preventDefault()
        checkChange.current.checked = true
        setQuizItems({...quizItems, keyNow: {subtitle: subtitleItem.current, item: listItem.current, count: count, countArr: countArr, price: price}})
        
       setArrItems([...arrItems, [listItem.current, count, subtitleItem.current]])
    }


    const dataInfo = {'data-count-group':count, 'data-count-item':countArr}
    
    return (
        <li ref={listItem} {...dataInfo} className={cl.quizSectionItem} onClick={e=>changeItems(e)}>
            <div className={cl.quizContentCard}>
                <div className={cl.quizPointBlock}>
                    <input ref={checkChange} type="radio" name={name} defaultChecked={false}  className={cl.quizRadio}/>
                    <div className={cl.radioHelper}></div>
                </div>
                <p ref={subtitleItem} className={cl.quizSectionText}>{subtitle}</p>
            </div>
        </li>
    )
}

export default MainQItem