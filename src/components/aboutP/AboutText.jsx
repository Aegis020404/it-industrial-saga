import React from "react";
import cl from './../../style/AboutText.module.css';

const AboutText = ()=>{
    return (
        <section className={cl.aboutSection}>
             <div className={cl.aboutBackImg}></div>
            <div className={["container", cl.container].join` `}>
                <div className={cl.aboutCont}>
                    <h1 className={cl.aboutTitle}>О компании</h1>
                    <div className={cl.aboutContent}>
                        <div className={cl.aboutTextCard}>
                            <p className={cl.aboutText}>
                            «IT-INDUSTRIAL» — коллектив специалистов, каждый из которых имеет большой опыт работы в разных по сложности и объему проектах и (не скромно) профессионал своего дела. Мы не накладываем никаких рамок на наших сотрудников и не давим на них авторитетом и бессмысленными правилами. 
                            <br /><br />
                            <span>Высокий уровень имеющейся квалификации, умение работать и постоянно учиться новому — вот те качества, которые мы ценим в профессионалах.</span>
                            <br /><br />
                            Наших специалистов отличают не только дипломы и регалии (которые, конечно есть), а блеск в глазах и влюбленность в то, чем они заняты. 
                            <br /><br />
                            Каждый участник нашей команды не просто умеет делать свою работу хорошо, а искренне хочет делать ее именно так. Такой подход гарантирует успех проекта, ведь в него вкладывается душа.

                            </p>
                        </div>
                        <div className={cl.countCard}>
                            <div className={cl.countTopCard}>
                                <span className={cl.count}>100+</span>
                                <p className={cl.countDescr}>Cайтов разработано</p>
                            </div>
                            <div className={cl.countBottomCard}>
                                <span className={cl.count}>150+</span>
                                <p className={cl.countDescr}>Сайтов выведено в ТОП</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutText