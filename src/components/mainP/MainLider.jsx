import React from "react";
import cl from './../../style/MainLider.module.css';

const MainLider = ()=>{
    return (
        <section className={cl.lider}>
            <div className="container">
                <div className={cl.liderContent}>
                    <div className={cl.liderLeft}>
                        <h2 className={cl.liderTitle}>Слово руководителя «IT-INDUSTRIAL»</h2>
                        <div className={cl.liderDescrBlock}>
                            <span className={cl.liderQuote}></span>
                            <p className={cl.liderDescr}>
                                <span className={cl.liderDescrB}>К нам часто приходят клиенты</span> от других студий <span className={cl.liderDescrB}>переделывать сайты</span>, потому что они не работают и клиентов не приносят. Мы не экономим, делаем сайт хорошо один раз, и он вам стабильно приносит заявки 2-3 года.
                            </p>
                        </div>
                        <div className={cl.liderInfo}>
                            <p className={cl.liderName}>Дмитрий Дмитриев</p>
                            <p className={cl.liderNameDescr}>Генеральный директор «IT-INDUSTRIAL»</p>
                        </div>
                    </div>
                    <div className={cl.liderRight}>
                        <div className={cl.liderPerson}>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainLider