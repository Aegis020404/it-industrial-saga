import React, { useState } from "react";
import cl from '../../style/MainQuestion.module.css';
import MyBtnFiled from "../UI/buttonback/MyBtnFiled";
import MyInput from "../UI/input/MyInput";
import MyMask from "../UI/maskinput/MyMask";
import MyModal from "../UI/modal/MyModal";
import MyTextarea from "../UI/textarea/MyTextarea";
import MyThxModal from "../UI/thxmodal/MyThxModal";


const MainQuestion = ()=>{

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: '', question: ''})

    let forServerInfo = {}

    const addModalInfo = (e)=>{
        e.preventDefault();
        setModal(true); 
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson:'',tel:'', question:''})
        console.log(forServerInfo);
    }

    const [modal, setModal] = useState(false)

    return (
        <section className={cl.question}>
            <div className={cl.questionLeftImg}></div>
            <div className={cl.questionRightImg}></div>
            <div className={['container', cl.container].join` `}>
                <div className={cl.questionContent}>
                    <h2 className={cl.questionTitle}>У вас остались вопросы?</h2>
                    <p className={cl.questionDescr}>
                        Если вы не нашли ответ на свой вопрос — свяжитесь с нами любым удобным способом и мы обязательно проконсультируем вас:
                    </p>
                    <form action="" id='question' className={cl.questionForm}>
                        <div className={cl.questionFormTop}>
                            <MyInput setInput={setModalInfo} input={modalInfo} valueInput={modalInfo.namePerson} place='Введите ваше имя' classesInput={cl.questionInput} classesPlace={cl.questionInputP}/>
                            <MyMask classesItem={cl.questionMask} value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})} />
                        </div>
                        <div className={cl.questiontextAreaBlock}>
                            <MyTextarea setTextarea={setModalInfo} textarea={modalInfo} textareaValue={modalInfo.question} place='Ваш вопрос' classesTextarea={cl.questionTextarea} classesPlace={cl.questionTextareaP}/>
                        </div>
                        <p className={cl.questionDescrForm}>Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных</p>
                        <MyBtnFiled type='submit' form='question' classes={cl.questionBtn} onClick={e=>{addModalInfo(e)}}>ЗАДАТЬ ВОПРОС</MyBtnFiled>
                        
                    </form>
                </div>
            </div>
           
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    )
}

export default MainQuestion