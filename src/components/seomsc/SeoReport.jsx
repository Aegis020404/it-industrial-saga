import React from "react";
import cl from './../../style/SeoReport.module.css'
import SeoReportItem from "./SeoReportItem";

const SeoReport = ()=>{
    const infoArr = ['Отчет вы получаете в электронном виде на почту или в мессенджер.', 'Наш SEO-специалист всегда на связи и готов дать пояснения и ответить на вопросы по отчету, если они есть.', 'Вы видите, как меняются позиции у фраз. И совпадают ли прогнозы по трафику и конверсии с реальными показателями.', 'Вы платите только за фразы в ТОПе']
    return (
        <section className={cl.reportSection}>
            <div className="container">
                <h2 className={cl.reportTitle}>Каждый месяц мы будем предоставлять вам подробный отчет о работе</h2>
                <div className={cl.reportListBLock}>
                    <ul className={cl.reportList}>
                        {infoArr.map((e, i)=><SeoReportItem text={e} key={i} />)}
                    </ul>
                </div>
                <div className={cl.reportResult}>
                    <div className={cl.reportImgRes}>
                    </div>
                    <div className={cl.reportMonth}>
                        <span className={cl.reportMCount}>6</span>
                        <span className={cl.reportMMonth}>мес</span>
                    </div>
                    <div className={cl.reportResText}>
                        <h4 className={cl.reportResTitle}>Результаты продвижения вы увидите через 6 месяцев</h4>
                        <p className={cl.reportResDescr}>Несколько месяцев занимают подготовительные работы, и ещё сктолько же, чтобы поисковые системы смогла оценить и проанализировать ваш сайт</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoReport