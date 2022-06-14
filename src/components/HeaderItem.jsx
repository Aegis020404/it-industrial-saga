import React from "react";
import cl from '../style/Header.module.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HeaderItem = ({title, info, titleClass, setHeaderNav, burgerA, page, setBurgerItem}) => {
    const changePage = (e)=>{
        document.body.scrollTo({top: 0,behavior:'smooth'})
        setBurgerItem(false)
        setHeaderNav(false)
    }
    return (
        
        <div className={cl.headerIComponent}>
            {page !== undefined ? 
                <Link to={page}>
                    <h4 className={[cl.headerICtitle, titleClass].join` `} onClick={e=>changePage(e)}>{title}</h4>
                </Link>
            :
                <h4 className={[cl.headerICtitle, titleClass].join` `} onClick={e=>changePage(e)}>{title}</h4>
            }           
            <ul className={cl.headerIClist}>
                {info.map((e, i)=>
                    <li className={[cl.headerICitem, e.class].join` `} key={e.link} >
                        <Link to={e.page} className={cl.headerIClink} onClick={e=>changePage(e)} key={i}>{e.link}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default HeaderItem