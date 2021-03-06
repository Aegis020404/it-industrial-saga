import React from "react";
import cl from './MyNavLink.module.css';

const MyNavLink = ({children,classes, ...props})=>{
    return (
        <span {...props} className={[cl.myLink, classes].join` `}  >{children}</span>
    )
}

export default MyNavLink