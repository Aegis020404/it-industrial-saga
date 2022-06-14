import React, {useState} from 'react';
import cl from './../style/HeroSection.module.css';
import MyBtnBlank from './UI/buttonborder/MyBtnBlank';
import MyModal from './UI/modal/MyModal';
import MyThxModal from './UI/thxmodal/MyThxModal';

const HeroSection = ({title, descr, classesImg, gridCl})=>{
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    return (
        <section className={cl.section}>
        <div className="container">
            <div className={[cl.content, gridCl].join` `}>
                <div className={cl.left}>
                    <h1 className={cl.title}>{title}</h1>
                    <p className={cl.descr}>{descr}</p>
                    <MyBtnBlank classes={cl.btn} onClick={e => {
                        e.preventDefault(e);
                        setModal(true)
                    }}>получить консультацию</MyBtnBlank>
                </div>
                <div className={cl.right}>
                    <div className={[cl.img,classesImg].join` `}></div>
                </div>
            </div>
        </div>
        <MyModal visible={modal} setVisible={setModal} title='Оставить заявку' setThx={setThxModal}/>
        <MyThxModal visible={thxModal} setVisible={setThxModal} />
    </section>
    )
}

export default HeroSection