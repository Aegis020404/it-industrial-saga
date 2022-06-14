import React, { useState,useEffect, useRef,useMemo } from "react";
import cl from './../../style/KeysMainSeo.module.css';

const KeysMainSeoInput = ({inputInfo, schedule, position})=>{
    const [value, setValue]=useState(0)
    const [context, setContext] = useState(false)
    const posInputItem = useRef('')
    const [isVisible, setIsVisible] = useState(false)

    const callbackEntriesFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    const options = useMemo (()=>{
        return {
            root:null,
            rootMargin: '0px',
            threshold: 0.3
        }
    })

    useEffect(()=>{
        posInputItem.current.style.maxHeight = (inputInfo.value / ((schedule.max+20) / 100)) + '%'
    }, [value])


    useEffect(()=>{
       const observer = new IntersectionObserver(callbackEntriesFunction, options);
       const currentTarget = posInputItem.current
       if(currentTarget) observer.observe(currentTarget);
      
       
       return ()=>{
           if(currentTarget) observer.unobserve(currentTarget)
       }
    },[posInputItem,options])
   
    const changeInputItem = (value) => {
        if(posInputItem.current.classList.contains(cl.animatInput))posInputItem.current.classList.remove(cl.animatInput)
        posInputItem.current.style.maxHeight = (value / ((schedule.max+0) / 100)) + '%'
    } 

    return (
        <div className={cl.inputBlock}  onContextMenu={(e)=>{e.preventDefault();setContext(!context)}}>
            <input type='range' defaultValue={inputInfo.value} orient="vertical" min={schedule.min-30} onChange={e=>changeInputItem(e.target.value)} max={schedule.max} className={position ? cl.rangeRight : cl.rangeLeft}/>
            <span ref={posInputItem} className={isVisible ? position ? [cl.inputItemR, cl.animatInput].join` ` : [cl.inputItemL, cl.animatInput].join` ` : ''}></span>
        </div>
    )
}

export default KeysMainSeoInput