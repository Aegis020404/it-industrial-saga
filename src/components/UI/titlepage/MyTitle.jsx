import React from 'react';
import cl from './MyTitle.module.css'
const MyTitle = ({title, classes})=>{
    return (
        <h1 className={[cl.title, classes].join` `}>{title}</h1>
    )
}
export default MyTitle