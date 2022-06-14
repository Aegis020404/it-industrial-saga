import React from "react";
import cl from './../../style/Reviews.module.css';

const ReviewsItem = ({imgPerson, namePerson, positionPerson, commentPerson})=>{
    return (
        <li className={cl.reviewsItem}>
            <div className={cl.reviewsLeft}>
                <div className={cl.reviewsImgCard}>
                    <div className={cl.reviewsImgBlock}>
                        <img src={imgPerson} alt="Personality image"  className={cl.reviewsImg}/>
                    </div>
                    <h4 className={cl.reviewsTitleItem}>{namePerson}</h4>
                </div>
                <p className={cl.reviewsDescrItem}>{positionPerson}</p>
            </div>
            <div className={cl.reviewsRight}>
                <div className={cl.reviewsDescr}>{commentPerson}</div>
            </div>
        </li>
    )
}

export default ReviewsItem