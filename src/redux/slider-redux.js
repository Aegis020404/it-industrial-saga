import cl from '../style/Slider.module.css';

let initialState = [
    {
        title: 'Разрабатываем сайты, которые приносят клиентов',
        botTitle: 'Комплексный подход к продвижению бизнеса в интернете',
        photo: cl.photo1
    },
    {
        title: 'Эффективное SEO продвижение сайтов \n' +
            'в Москве',
        botTitle: 'Выведем в ТОП и увеличим количество новых клиентов',
        photo: cl.photo2
    },
    {
        title: 'Дашборды и CRM-системы для вашего бизнеса',
        botTitle: 'Для повышения продаж и эффективности процессов',
        photo: cl.photo3
    },
]

const sliderReducer = (state = initialState, action) => {
    return state
}

export default sliderReducer