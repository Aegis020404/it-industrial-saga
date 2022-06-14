import cli from "../style/MainTItem.module.css";

let initialState = [
    {img: cli.tariffImg1, title: 'Landing Page', descr: ['Создадим готовый к продвижению сайт', 'Система управления', 'Быстрый запуск'], price: '80 000', dl: 'от 20 дней'},
    {img: cli.tariffImg2, title: 'Сайт-визитка', descr: ['Эффективное решение', 'CMS от Wordpress', 'Профессиональный дизайн'], price: '100 000', dl: 'от 30 дней'},
    {img: cli.tariffImg3, title: 'Корпоративный сайт', descr: ['Решение для профессионалов', 'Эксклюзивный дизайн', 'Последующая поддержка'], price: '120 000', dl: 'от 30 дней'},
    {img: cli.tariffImg4, title: 'Сайт-каталог', descr: ['Универсальное решение','Профессиональная разработка','CMS'], price: '150 000', dl: 'от 2 месяцев'},
    {img: cli.tariffImg5, title: 'Интернет-магазин', descr: ['Профессиональная разработка','UX/UI дизайн магазина','Последующее продвижение'], price: '200 000', dl: 'от 90 дней'},
    {img: cli.tariffImg6, title: 'Веб-сервис', descr: ['Решение для профессионалов','Эксклюзивный дизайн','Последующая поддержка'], price: '300 000', dl: 'от 3 месяцев'}
]

const MainTariffReducer = (state = initialState, action) => {
    return state
}

export default MainTariffReducer