import React, { useRef, useEffect } from "react";
import Reviews from "../components/reviewsP/Reviews";
import NavPagesHead from "../components/UI/navpage/MyNavPages";

const ReviewsPage = ()=>{
    const reviewsI = useRef('')
    useEffect(()=>{
        reviewsI.current.classList.toggle('reviewsI')
    },[reviewsI])
    const infoPage = [{text: 'Отзывы'}]
    return (
        <div>
            <main ref={reviewsI} className="reviews">
                <NavPagesHead navItems={infoPage}/>
                <Reviews/>
            </main>
        </div>
    )
}

export default ReviewsPage