import React, { useEffect, useMemo, useRef, useState } from 'react';
import cl from '../../style/MainQuiz.module.css';
import MainQItem from './MainQItem';
import MyModal from '../UI/modal/MyModal';
import MyMask from '../UI/maskinput/MyMask';
import MyInput from '../UI/input/MyInput';
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';
import MyBtnFiled from '../UI/buttonback/MyBtnFiled';
import MyThxModal from '../UI/thxmodal/MyThxModal';

const MainQuiz = ()=>{

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: '', theme: '', task: '', oldSite: '', text: '', totalPrice: 0})
    const [pricesInfo, setPricesInfo] = useState({theme:0,task: 0,oldSite: 0,text: 0});
    let forServerInfo = {}

    const addModalInfo = (e)=>{
        e.preventDefault();
        setModal(true); 
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson:'',tel:''})
    }

    const [arrItems, setArrItems] = useState([])

    const firstSection = useRef(false)
    const secondSection = useRef(false)
    const thirdSection = useRef(false)
    const fourthSection = useRef(false)
    const resultSection = useRef(false)

    const [modal, setModal] = useState(false)

    const [modalS, setModalS] = useState(false)
    const mainQuiz = useRef(false)

    const firstPag = useRef(false);
    const secondPag = useRef(false);
    const thirdPag = useRef(false);
    const fourthPag = useRef(false);

    const numberMask = useRef(false)

    const [activePage, setActivePage] = useState('')
    const [checkInputSite, setCheckInputSite] = useState('')

    const [quizItems, setQuizItems] = useState({last: {subtitle: 0, item: 0, count: -1, countArr: -1, price: 0}, keyNow: {subtitle: 0, item: 0, count: 0, countArr: 0, price: 0}})
 

    const [checkItem, setCheckItem] = useState(false)

    const pagArr = [firstPag, secondPag, thirdPag, fourthPag];
    const refsArr = [firstSection, secondSection, thirdSection, fourthSection];

    const itemChekArr = [[{subtitle: 'Лендинг', name: 'a', price: 80000},{subtitle: 'Многостраничный', name: 'a', price: 150000},{subtitle: 'Интернет-магазин', name: 'a', price: 200000},{subtitle: 'Другое', name: 'a', price: 140000}],
    [{subtitle: 'Продавать товар/услугу', name: 'b', price: 15000},{subtitle: 'Продавать несколько товаров/услуг', name: 'b', price: 35000},{subtitle: 'Презентовать компанию', name: 'b', price: 25000},{subtitle: 'Всё вместе/Другое', name: 'b', price: 50000}],
    [{subtitle: 'Да', name: 'c', price: 15000},{subtitle: 'Нет, нужно разработать сайт с нуля', name: 'c', price: 30000}]]

    const changePageAndPagination = (e, n)=>{
        e.preventDefault()
        refsArr.find(e=>e.current.classList.contains(cl.quizTabsActive)).current.classList.remove(cl.quizTabsActive)
        pagArr.find(e=>e.current.classList.contains(cl.quizActiveP)).current.classList.remove(cl.quizActiveP)
        if (4 < n) {
            mainQuiz.current.classList.add(cl.quizNone) 
            resultSection.current.classList.add(cl.resultSectionActive)
        }
        else {
            refsArr[n-1].current &&  refsArr[n-1].current.classList.add(cl.quizTabsActive) 
            setActivePage(refsArr[n-1].current)
            pagArr[n-1].current && pagArr[n-1].current.classList.add(cl.quizActiveP)
        }
    }

    useEffect(()=>{
        refsArr[0].current.classList.add(cl.quizTabsActive)
        pagArr[0].current.classList.add(cl.quizActiveP)
        setActivePage(firstSection.current)
    }, [firstSection, numberMask])

    const setActiveItemsLast = (titleI, itemI)=>{
        let removeClassItem = arrItems.filter(e=>e[1] === quizItems.keyNow.count && e[0].classList.contains(cl.quizSectionItemActive))
        if(quizItems.keyNow.count === quizItems.last.count || !quizItems.last.count) {
            titleI.classList.remove(cl.quizCheckboxTextActive);
            itemI.classList.remove(cl.quizSectionItemActive);
        }
        if((quizItems.keyNow.count !== quizItems.last.count || quizItems.last.count) && removeClassItem[0] !== undefined && removeClassItem[0][0].classList.contains(cl.quizSectionItemActive)) {
          removeClassItem[0][0].classList.remove(cl.quizSectionItemActive)
          removeClassItem[0][2].classList.remove(cl.quizCheckboxTextActive)
        }
    }

    const setActiveItemsNow = (titleI, itemI)=>{
            titleI.classList.add(cl.quizCheckboxTextActive);
            itemI.classList.add(cl.quizSectionItemActive);
    }



    useMemo(()=>{
        if(quizItems.last.item && quizItems.last.subtitle) { setActiveItemsLast(quizItems.last.subtitle, quizItems.last.item)}
        //  setActiveItems(quizItems.last.subtitle, quizItems.last.item, quizItems.last.count, quizItems.last.countArr)
        if(quizItems.keyNow.item && quizItems.keyNow.subtitle) { setActiveItemsNow(quizItems.keyNow.subtitle, quizItems.keyNow.item)}
        //  setActiveItems(quizItems.keyNow.subtitle, quizItems.keyNow.item, quizItems.keyNow.count, quizItems.keyNow.countArr)
        quizItems.last.item = quizItems.keyNow.item 
        quizItems.last.subtitle = quizItems.keyNow.subtitle
        quizItems.last.count = quizItems.keyNow.count
        quizItems.last.countArr = quizItems.keyNow.countArr
        if(quizItems.keyNow.count-1 === 0) {setModalInfo({...modalInfo, theme: quizItems.keyNow.subtitle.innerText});  setPricesInfo({...pricesInfo, theme: quizItems.keyNow.price})}
        if(quizItems.keyNow.count-1 === 1)  {setModalInfo({...modalInfo, task: quizItems.keyNow.subtitle.innerText}); setPricesInfo({...pricesInfo, task: quizItems.keyNow.price})}
        if(quizItems.keyNow.count-1 === 3)  {setModalInfo({...modalInfo, text: quizItems.keyNow.subtitle.innerText}); setPricesInfo({...pricesInfo, text: quizItems.keyNow.price})}
        activePage && [...[...activePage.children].find(e=>e.classList.contains(cl.quizBtnBlock)).children].find(e=>e.classList.contains(cl.quizSectionBtnNext)).classList.add(cl.quizSectionBtnActive)
       
    },[quizItems.keyNow])
    useMemo(()=>{
        if((checkItem && !checkInputSite)||(checkInputSite && !checkItem)) {activePage && [...[...activePage.children].find(e=>e.classList.contains(cl.quizBtnBlock)).children].find(e=>e.classList.contains(cl.quizSectionBtnNext)).classList.add(cl.quizSectionBtnActive)}
        else{activePage && [...[...activePage.children].find(e=>e.classList.contains(cl.quizBtnBlock)).children].find(e=>e.classList.contains(cl.quizSectionBtnNext)).classList.remove(cl.quizSectionBtnActive)}
    },[checkItem, checkInputSite])


    const countTotalPrice = ()=>{
        const totalPrice = []
        for (let i in pricesInfo) totalPrice.push(pricesInfo[i])
        setModalInfo({...modalInfo, totalPrice:  totalPrice.reduce((e,ac)=> e + ac, 0).toString().split``.map((e,i,arr)=>(~~(arr.length/2)-1==i?`${e} `:e))})
       
    }
    

    return (
        <section className={cl.quizSection}>
            <div className="container" ref={mainQuiz}>
                <div className={cl.quizSectionBlock} ref={mainQuiz}>
                    <div className={cl.quizHeading}>
                        <h2 className={cl.quizTitle}>Рассчитать стоимость вашего сайта?</h2>
                        <p className={cl.quizDescr}>Ответьте на 4 вопроса, и получите расчет стоимости в 2-х вариантах бюджета</p>
                    </div>
                    <div className={cl.quizPagination}>
                        <ul className={cl.quizPLisy}>
                            <li className={cl.quizPItem}>
                                <div className={cl.quizPBlock} >
                                {/* <div className={cl.quizPBlock} onClick={e=>changePageAndPagination(e,1)}> */}
                                    <div className={cl.quizPCountBlock} ref={firstPag}>
                                        <span className={cl.quizPCount} ref={firstPag}>1</span>
                                    </div>
                                    <div className={cl.quizStepBlock}>
                                        <p className={cl.quizStep}>ШАГ 1</p>
                                    </div>
                                </div>
                            </li>
                            <li className={cl.quizLineItem}>
                                <div className={cl.quizLine}></div>
                            </li>
                            <li className={cl.quizPItem}>
                                {/* <div className={cl.quizPBlock} onClick={e=>changePageAndPagination(e,2)}> */}
                                <div className={cl.quizPBlock}>
                                    <div className={cl.quizPCountBlock} ref={secondPag}>
                                    <span className={cl.quizPCount} ref={secondPag}>2</span>
                                </div>
                                <div className={cl.quizStepBlock}>
                                    <p className={cl.quizStep}>ШАГ 2</p>
                                </div>
                                </div>
                            </li>
                            <li className={cl.quizLineItem}>
                                <div className={cl.quizLine}></div>
                            </li>
                            <li className={cl.quizPItem}>
                                <div className={cl.quizPBlock}>
                                {/* <div className={cl.quizPBlock} onClick={e=>changePageAndPagination(e,3)}> */}
                                    <div className={cl.quizPCountBlock} ref={thirdPag}>
                                    <span className={cl.quizPCount} ref={thirdPag}>3</span>
                                </div>
                                <div className={cl.quizStepBlock}>
                                    <p className={cl.quizStep}>ШАГ 3</p>
                                </div>
                                </div>
                            </li>
                            <li className={cl.quizLineItem}>
                                <div className={cl.quizLine}></div>
                            </li>
                            <li className={cl.quizPItem}>
                                {/* <div className={cl.quizPBlock} onClick={e=>changePageAndPagination(e,4)}> */}
                                <div className={cl.quizPBlock} >
                                    <div className={cl.quizPCountBlock} ref={fourthPag}>
                                    <span className={cl.quizPCount} ref={fourthPag}>4</span>
                                </div>
                                <div className={cl.quizStepBlock}>
                                    <p className={cl.quizStep}>ШАГ 4</p>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div  className={cl.quizTabs} ref={firstSection}>
                        <h3 className={cl.quizSectionTitle}>Какой сайт вам нужен?</h3>
                        <ul className={cl.quizSectionListFour}>
                            {itemChekArr[0].map((e,i,arr) => {
                                return (<MainQItem subtitle={e.subtitle} price={e.price} arrItems={arrItems} setArrItems={setArrItems} name={e.name} count={1} setQuizItems={setQuizItems} quizItems={quizItems} key={e.subtitle} countArr={i+1} />)
                            })}
                        </ul>
                        <div className={cl.quizBtnBlock}>
                            <MyBtnBlank classes={cl.quizSectionBtnNext} onClick={e=>changePageAndPagination(e,2)} id='n-1'>Далее</MyBtnBlank>
                        </div>
                    </div>
                    <div className={cl.quizTabs} ref={secondSection}>
                        <h3 className={cl.quizSectionTitle}>Какие задачи должен решать сайт?</h3>
                        <ul className={cl.quizSectionListFour}>
                            {itemChekArr[1].map((e,i) => {
                                return (<MainQItem subtitle={e.subtitle} price={e.price} arrItems={arrItems} setArrItems={setArrItems} name={e.name} count={2} setQuizItems={setQuizItems} quizItems={quizItems} key={e.subtitle} countArr={i+1} />)
                            })}
                        </ul>
                        <div className={cl.quizBtnBlock}>
                            <button className={cl.quizSectionBtnBack} onClick={e=>changePageAndPagination(e,1)} id='b-2'>Назад</button>
                            <MyBtnBlank classes={cl.quizSectionBtnNext} onClick={e=>changePageAndPagination(e,3)} id='n-2'>Далее</MyBtnBlank>
                        </div>
                    </div>
                    <div className={cl.quizTabs} ref={thirdSection}>
                        <h3 className={[cl.quizSectionTitle, cl.quizInputBlockSite].join` `}>Есть ли у вас старый сайт?</h3>
                        <div className={cl.quizSectionIBlock}>
                            <MyInput classesInput={cl.inputItem} classesPlace={cl.modalPlace} setCheckInputSite={setCheckInputSite} onClick={e=>setPricesInfo({...pricesInfo, oldSite: 5000})}  type="email"  place='Оставьте ссылку на ваш сайт'/>
                            <div className={cl.quizCheckBlock} onClick={e=>{e.target.classList.toggle(cl.quizCheckBoxActive); setCheckItem(!checkItem); setModalInfo({...modalInfo, oldSite: 'нет'}); setPricesInfo({...pricesInfo, oldSite: 10000})}}>
                                <div className={cl.quizCheckBlock} >
                                    <span className={cl.quizCheckBox}>
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.78256 7.83997L0.635742 4.69315L2.0351 3.29379L3.78256 5.0462L8.67684 0.146973L10.0762 1.54633L3.78256 7.83997Z" fill="#F84263"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className={cl.quizCheckboxText}>Нет сайта</span>
                            </div>
                        </div>
                        <div className={cl.quizBtnBlock}>
                            <button className={cl.quizSectionBtnBack} onClick={e=>changePageAndPagination(e,2)} id='b-3'>Назад</button>
                            <MyBtnBlank classes={cl.quizSectionBtnNext} onClick={e=>changePageAndPagination(e,4)} id='n-3'>Далее</MyBtnBlank>
                        </div>
                    </div>
                    <div className={cl.quizTabs} ref={fourthSection}>
                        <h3 className={cl.quizSectionTitle}>Есть ли у вас тексты для сайта?</h3>
                        <ul className={cl.quizSectionListTwo}>
                            {itemChekArr[2].map((e,i) => {
                                return (<MainQItem subtitle={e.subtitle} price={e.price} arrItems={arrItems} setArrItems={setArrItems} name={e.name} count={4} setQuizItems={setQuizItems} quizItems={quizItems} key={e.subtitle} countArr={i+1}/>)
                            })}
                        </ul>
                        <div className={cl.quizBtnBlock}>
                            <button className={cl.quizSectionBtnBack} onClick={e=>changePageAndPagination(e,3)} id='b-4'>Назад</button>
                            <MyBtnBlank classes={cl.quizSectionBtnNext} onClick={e=>{changePageAndPagination(e,5); countTotalPrice()}} id='n-4'>Далее</MyBtnBlank>
                        </div>
                    </div>
                </div>
                <div className={cl.btnMBlock}>
                    <MyBtnBlank classes={cl.btnMobile} onClick={(e)=>{e.preventDefault();setModalS(true); }}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</MyBtnBlank>
                </div>
              
            </div>
            <div className={cl.resultSection} ref={resultSection}>
                <div className='container'>
                    <form id='quiz' action="">
                        <h3 className={cl.resultTitle}>
                            Примерная стоимость
                        </h3>
                        <p className={cl.resultCountBlock}>
                            <span className={cl.resultCount}>{modalInfo.totalPrice}</span> руб.
                        </p>
                        <p className={cl.resultDescr}>Давайте обсудим детали проекта и рассчитаем точную стоимость?</p>
                        <div className={cl.resultInputBlock}>
                            <MyInput setInput={setModalInfo} input={modalInfo} valueInput={modalInfo.namePerson} required place='Введите ваше имя' classesInput={cl.input} classesPlace={cl.place}/>
                            <MyMask value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})} classesItem={cl.maskQuiz}></MyMask>
                        </div>
                        <span className={cl.resultHelper}>Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных</span>
                        <div className={cl.resultBtnBlock}>
                            <MyBtnBlank type='submit' form='quiz' classes={cl.resultButton} onClick={(e)=>{addModalInfo(e)}} >Обсудить детали проекта</MyBtnBlank>
                            
                        </div>
                    </form>
                </div>
            </div>
            <MyModal visible={modalS} setVisible={setModalS} title='Полуичть консультацию'/>
                <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    )
}

export default MainQuiz