import React, {useEffect} from "react";
import cl from './../../style/MobileService.module.css';

const MobileServItem = ({title, descr, img})=> {
    useEffect(() => {})
    return (
        <div className={cl.serviceItem}>
            <div className={cl.serviceItemBlock}>
                <div className={cl.serviceImg}>{img}</div>
                <h4 className={cl.serviceItemTitle}>{title}</h4>
                <p className={cl.serviceItemDescr}>{descr}</p>
            </div>
        </div>
    )
}

export default MobileServItem