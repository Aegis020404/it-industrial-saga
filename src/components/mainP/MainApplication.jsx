import React, {useState} from "react";
import cl from '../../style/MainApplication.module.css';
import MyBtnBlank from "./../UI/buttonborder/MyBtnBlank";
import MyMask from "./../UI/maskinput/MyMask";
import MyInput from "./../UI/input/MyInput";
import MyModal from "./../UI/modal/MyModal";
import postRequest from "../../redux/requests";
import MyThxModal from "../UI/thxmodal/MyThxModal";

const MainApplication = ()=>{
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})

    let forServerInfo = {}

    const addModalInfo = (e)=>{
        e.preventDefault();
        setModal(true); 
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson:'',tel:''})
        console.log(forServerInfo);
        postRequest(forServerInfo)

    }

    const [modal, setModal] = useState(false)
    return (
        <section className={cl.application}>
            <div className={cl.applicationLeftBg}></div>
            <div className="container">
                <div className={cl.applicationContent}>
                    <div className={cl.applicationLeftBlock}>
                        <span className={cl.applicationFemaleBg}>

                        </span>
                    </div>
                    <div className={cl.applicationRightBlock}>
                        <div className={cl.applicationRightContent}>
                            <form action="" id='application'>
                                <h2 className={cl.applicationRightTitle}>Оставить заявку</h2>
                                <p className={cl.applicationRightDescr}>Заполните форму и наш менеджер свяжется с вами в течение дня, чтобы обсудить вашу задачу</p>
                                <div className={cl.applicationInputBlock}>
                                    <MyInput required place='Ваше имя' classesInput={cl.applicationInput} valueInput={modalInfo.namePerson} setInput={setModalInfo} input={modalInfo} classesPlace={cl.applicationPlace}/>
                                    <MyMask classesItem={cl.applicationMask} value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})}/>
                                </div>
                                <p className={cl.applicationBottomDescr}>Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных</p>
                                <MyBtnBlank classes={cl.applicationBtn} type='submit' form='application' onClick={(e)=>{addModalInfo(e)}}>ОТПРАВИТЬ</MyBtnBlank>
                                <MyBtnBlank classes={cl.applicationBtnM}  type='submit' form='application' onClick={(e)=>{addModalInfo(e)}}>ОСТАВИТЬ ЗАЯВКУ</MyBtnBlank>
                            </form>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.applicationRightBg}></div>
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    )
}

export default MainApplication