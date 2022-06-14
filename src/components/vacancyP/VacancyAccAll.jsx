import React, { useRef, useEffect } from "react";
import cl from './../../style/VacancyAcc.module.css';
import './../../style/acc.css';
import VacancyAccItem from "./VacancyAccItem";



const VacancyAccAll = ({itemList, classesItem, classesBlock, classesDescr})=>{
   
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
        <div>
            {itemList.map((e,i)=><VacancyAccItem key={i} handleChange={handleChange} expanded={expanded} title={e.title} descr={e.descr} whatDo={e.whatdo} info={e.list} check={'panel' + (i + 1)}/>)}
        </div>
    )
}

export default VacancyAccAll