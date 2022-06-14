import ecoSchedule from "../assets/img/keys-seo-eco.svg";
import stroySchedule from "../assets/img/keys-seo-stroy.svg";
import veniSchedule from "../assets/img/key-seo-veni.svg";
import autoSchedule from "../assets/img/keys-seo-auto.svg";
import llumarSchedule from "../assets/img/keys-seo-lumar.svg";
import graffik1 from "../assets/img/graffik1-3.png";

const initialState = [{
    nameCompany: 'Эковтор',
    linkCompany: 'ec-vtor.ru',
    changeSeo: {
        beenChange: {topTen: '67 запросов', traffic: '312'},
        becameChange: {topTen: '453 запроса', traffic: '1 600'}
    },
    schedule: [{numbers: [550,500,450,400,350,300,250,200,150,100,50], max:550, min:50, monthsGrey: [{name:'ДЕК',value:80},{name:'ЯНВ',value:80},{name:'ФЕВ',value:45},{name:'МАР',value:130},{name:'АПР',value:150}], monthsPink: [{name:'МАЙ',value:250},{name:'ИЮНЬ',value:280},{name:'ИЮЛЬ',value: 350},{name:'АВГ',value:410}]}, {img: graffik1}],
},
    {
        nameCompany: 'Строймат',
        linkCompany: 'строй-мат.рф',
        changeSeo: {
            beenChange: {topTen: '23 запроса', traffic: '200'},
            becameChange: {topTen: '550 запросов', traffic: '400'}
        },
        schedule: [{numbers: [550,500,450,400,350,300,250,200,150,100,50], max:550, min:50, monthsGrey: [{name:'ДЕК',value:80},{name:'ЯНВ',value:80},{name:'ФЕВ',value:45},{name:'МАР',value:130},{name:'АПР',value:150}], monthsPink: [{name:'МАЙ',value:250},{name:'ИЮНЬ',value:280},{name:'ИЮЛЬ',value: 350},{name:'АВГ',value:410}]}, {img: graffik1}],
    },
    {
        nameCompany: 'Вениколор',
        linkCompany: 'venicolor.ru',
        changeSeo: {
            beenChange: {topTen: '5 запросов', traffic: '50'},
            becameChange: {topTen: '453 запроса', traffic: '2 300'}
        },
        schedule: [{numbers: [550,500,450,400,350,300,250,200,150,100,50], max:550, min:50, monthsGrey: [{name:'ДЕК',value:80},{name:'ЯНВ',value:80},{name:'ФЕВ',value:45},{name:'МАР',value:130},{name:'АПР',value:150},{name:'МАЙ',value:70}], monthsPink: [{name:'ИЮНЬ',value:175},{name:'ИЮЛЬ',value: 320},{name:'АВГ',value:460}]}, {img: graffik1}],
    },
    {
        nameCompany: 'Автоэстетика',
        linkCompany: 'autoestetica-msk.ru',
        changeSeo: {
            beenChange: {topTen: '5 запросов', traffic: '50'},
            becameChange: {topTen: '453 запроса', traffic: '2 300'}
        }, 
        schedule: [{numbers: [550,500,450,400,350,300,250,200,150,100,50], max:550, min:50, monthsGrey: [{name:'ДЕК',value:80},{name:'ЯНВ',value:80},{name:'ФЕВ',value:45}], monthsPink: [{name:'МАР',value:250},{name:'АПР',value:225},{name:'МАЙ',value:210},{name:'ИЮНЬ',value:280},{name:'ИЮЛЬ',value: 300},{name:'АВГ',value:430}]}, {img: graffik1}]
    },
    {
        nameCompany: 'Люмар',
        linkCompany: 'lumar.ru',
        changeSeo: {
            beenChange: {topTen: '20 запросов', traffic: '50'},
            becameChange: {topTen: '4000 запроса', traffic: '1 800'}
        },
        schedule: [{numbers: [5000,4500,4000,3500,3000,2500,2000,1500,1000,500,0], max:5000, min:0, monthsGrey: [{name:'ДЕК',value:1350},{name:'ЯНВ',value:1100},{name:'ФЕВ',value:950},{name:'МАР',value:1150},{name:'АПР',value:1300}], monthsPink: [{name:'МАЙ',value:3200},{name:'ИЮНЬ',value:3000},{name:'ИЮЛЬ',value: 3300},{name:'АВГ',value:3900}]}, {img: graffik1}]
    }]

export function KeysMainSeoReducer(state = initialState, action) {
 return state
}

