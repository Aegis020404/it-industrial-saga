import React from "react";
import cl from './../../style/SeoMonth.module.css';
import SeoMonthItem from "./SeoMonthItem";
import seoImg from './../../assets/img/seo-month.png';

const SeoMonth = ()=>{
    const infoArr = [{title: 'Работа с семантикой', descr:'Оцениваем потенциал каждой фразы, собираем дополнительные поисковые фразы, анализируем их продвижение в топ'},
    {title: 'Ссылочная оптимизация', descr: 'Проводим анализ ссылочного профиля, чистим его. Отбираем ресурсы для покупки ссылок на ваш сайт и проверяем их по более 15 параметрам'},
    {title: 'Поведенческая оптимизация', descr: 'Анализируем поведение клиентов на сайте, дорабатываем его с точки зрения удобства для пользователей. Отслеживаем изменения после каждого апдейта Яндекса и Google, при необходимости корректируем стратегию, вносим правки'},
    {title: 'Техническая оптимизация', descr: 'Анализ страниц в индексе, отслеживание и оперативная чистка дублей, грамотная перелинковка. Это основа, без которой продвижение не возможно'},
    {title: 'Контентная оптимизация', descr: 'Составляем техническое задание, пишем уникальные, конкурентные  тексты для вашего сайта.'}]
    return (
        <section className={cl.monthSection}>
            <div className="container">
                <h2 className={cl.monthTitle}>Ежемесячно SEO оптимизатор выполняет следующие работы</h2>
                <div className={cl.monthContent}>
                    <div className={cl.monthLeft}>
                        <ul className={cl.monthLeftList}>
                            {infoArr.map((e, i)=><SeoMonthItem key={i} title={e.title} descr={e.descr}/>)}
                        </ul>
                    </div>
                    <div className={cl.monthRight}>
                        <div className={cl.monthRightImg}>
                            <img src={seoImg} alt="web-google"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoMonth