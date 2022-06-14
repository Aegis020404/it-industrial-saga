import React from "react";
import { Link } from "react-router-dom";
import cl from '../style/Footer.module.css';

const FooterItem = ({title, info, page, titleClass}) => {
    return (
        <div className={cl.footerIComponent}>
            {page !== undefined ? 
            <Link onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}} to={page}>{title !== 'Меню' ? <div className={[cl.footerICtitle, titleClass].join` `}>{title}</div> : <h4 className={[cl.footerICtitle, titleClass].join` `}>{title}</h4>}</Link>
            :
            title !== 'Меню' ? <div className={[cl.footerICtitle, titleClass].join` `}>{title}</div> : <h4 className={[cl.footerICtitle, titleClass].join` `}>{title}</h4>
            }
            
            <nav>
                <ul className={cl.footerIClist}>
                    {info.map(e=>
                        <li className={[cl.footerICitem, e.class].join` `} key={e.link}>
                            <Link to={e.page ? e.page : '/'} className={cl.footerIClink} onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}}>{e.link}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default FooterItem