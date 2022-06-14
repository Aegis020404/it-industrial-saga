import React from 'react';
import cl from './../../style/Reviews.module.css';
import photoOfClient from './../../assets/img/photoOfClient.png'
import ReviewsItem from './ReviewsItem';
import MyTitle from './../UI/titlepage/MyTitle';

const Reviews = ()=>{
    const reviewsInfo = [
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        },
        {
            photo: photoOfClient,
            name: 'Юлия Орлова',
            position: 'Руководитель компании Эковтор',
            comment: <div>Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в
                прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор»
                разработанный командой IT-INDUSTRIAL.<br/><br/> Наше творческое сотрудничество явило современный, яркий и
                интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных
                сотрудников.</div>
        }]
    return (
        <section className={cl.reviewsSection}>
            <div className={["container", cl.container].join` `}>
                <div className={cl.reviewsCont}>
                    <MyTitle title='Отзывы' classes={cl.reviewsTitle}></MyTitle>
                    <div className={cl.reviewsListBlock}>
                        <ul className={cl.reviewsList}>
                        {reviewsInfo.map((review, i) => <ReviewsItem key={i} imgPerson={review.photo} namePerson={review.name} commentPerson={review.comment} positionPerson={review.position}/>)}
                        </ul>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Reviews