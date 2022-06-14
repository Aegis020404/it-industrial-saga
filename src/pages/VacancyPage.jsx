import React, { useEffect, useRef } from 'react';
import NavPagesHead from '../components/UI/navpage/MyNavPages';
import VacancyAcc from '../components/vacancyP/VacancyAcc';

const VacancyPage = ()=>{
    const vacancyI = useRef('')
    useEffect(()=>{
        vacancyI.current.classList.toggle('vacancyI')
    },[vacancyI])
    const infoPage = [{text: 'Вакансии'}]
    return (
        <div>
            <main ref={vacancyI} className='vacancy'>
                <NavPagesHead navItems={infoPage}/>
                <VacancyAcc/>
            </main>
        </div>
    )
}

export default VacancyPage