import React from "react";
import cl from '../../style/MainResult.module.css'

const MainResult = ()=>{
    return (
        <section className={cl.resultSection}>
            <div className="container">
                <div className={cl.resultContent}>
                    <div className={cl.resultTitleBlock}>
                        <h2 className={cl.resultTitle}>Мы&nbsp;не&nbsp;работаем по&nbsp;шаблонам, а&nbsp;работаем на&nbsp;результа</h2>
                    </div>
                    <div className={cl.resultListBlock}>
                        <ul className={cl.resultList}>
                        <li className={cl.resultItem}>
                            <div className={cl.resultImgBlock}>
                                <span className={[cl.resultImg, cl.calendarImg].join` `}></span>
                            </div>
                            <h3 className={cl.resultItemTitle}>Называем реальные сроки истоимость</h3>
                            <p className={cl.resultItemDescr}>Которые прописаны в&nbsp;договоре и&nbsp;не&nbsp;меняются в&nbsp;процессе работ</p>
                        </li>
                        <li className={cl.resultItem}>
                            <div className={cl.resultImgBlock}>
                                <span className={[cl.resultImg, cl.contractImg].join` `}></span>
                            </div>
                            <h3 className={cl.resultItemTitle}>Делаем только&nbsp;то, что вам выгодно</h3>
                            <p className={cl.resultItemDescr}>Не&nbsp;навязываем дополнительные услуги, не&nbsp;имитируем бурную деятельность</p>
                        </li>
                        <li className={cl.resultItem}>
                            <div className={cl.resultImgBlock}>
                                <span className={[cl.resultImg, cl.searchImg].join` `}></span>
                            </div>
                            <h3 className={cl.resultItemTitle}>Тестируем и&nbsp;дорабатываем</h3>
                            <p className={cl.resultItemDescr}>После создания сайта следим за&nbsp;рекламной кампанией. Если нужно&mdash; дорабатываем лэндинг или переписываем объявления</p>
                        </li>
                        <li className={cl.resultItem}>
                            <div className={cl.resultImgBlock}>
                                <span className={[cl.resultImg, cl.gearsImg].join` `}></span>
                            </div>
                            <h3 className={cl.resultItemTitle}>Не&nbsp;навязываем технологиии</h3>
                            <p className={cl.resultItemDescr}>Работаем c&nbsp;разными CMS, на&nbsp;которых можно реализовать любые решения для клиента</p>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainResult