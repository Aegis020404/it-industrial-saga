const SELECT_BTN = 'SELECT_BTN'

let initialState = {
    btns: [{
        text: 'Разработка сайтов', selected: true
    }, {
        text: 'SEO-продвижение', selected: false
    }, {
        text: 'Мобильные приложения', selected: false
    }, {
        text: 'CRM', selected: false
    },
    ]
}

const keysMainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BTN: {
            return {
                ...state, btns:[...state.btns.map((el,i)=>i==action.key? {...el,selected: true } : {...el, selected: false})]
                }
            }
        }
    return state
    }

export const selectBtnKeys = (key) => ({
    type: SELECT_BTN, key
})

export default keysMainReducer