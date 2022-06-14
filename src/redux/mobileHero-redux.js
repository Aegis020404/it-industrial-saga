import cl from "../style/MobileHero.module.css";

let initialState = {
    mobile: {
        title: 'Разработка мобильных приложений в Москве',
        descr: 'Аналитика, дизайн и разработка цифровых решений для бизнеса',
        classesimg: cl.phoneHand,
        grid: cl.gridM
    },
    crm: {
        title: 'Разработка CRM-систем в Москве',
        descr: 'Учет, контроль и автоматизация бизнеса',
        classesimg: cl.photoCRM,
        grid: cl.grid
    },
    seo: {
        title: 'SEO продвижение сайтов в Москве',
        descr: 'Увеличим поток целевых заявок из Яндекса и Google',
        classesimg: cl.photoSEO

    },
    marketPlace: {
        title: 'Продвижение в маркетплейсах',
        descr: '',
        classesimg: cl.marketPlace

    }
}


export function mobileHeroReducer(state = initialState, action) {
    return state
}