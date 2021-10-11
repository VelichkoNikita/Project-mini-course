import img1 from "../Files/2.svg"
import img2 from "../Files/3.svg"
import img3 from "../Files/4.svg"

const UNBLOCK = 'UNBLOCK';

let initialState = {
    cards:
        [
            {
                id: 1,
                col: 4,
                sm: 11,
                md: 11,
                lg: 8,
                padding: 2,
                margin: 3,
                descrip: 'Тема №1',
                block: false,
                theme: 'Активация карты',
                backgroundImg: img1
            },
            {
                id: 2,
                col: 4,
                sm: 11,
                md: 11,
                lg: 8,
                padding: 2,
                margin: 3,
                descrip: 'Тема №2',
                block: true,
                theme: 'ПИН-код',
                backgroundImg: img2
            },
            {
                id: 3,
                col: 4,
                sm: 11,
                md: 11,
                lg: 8,
                margin: 3,
                padding: 2,
                descrip: 'Тема №3',
                block: true,
                theme: 'Мобильный банк',
                backgroundImg: img3
            },
        ]
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNBLOCK: {
            return {
                ...state,
                cards: state.cards.map((u, index) => {
                    if (u.id == action.index) {
                        return {
                            ...u,
                            block: false
                        }
                    }
                    return u;
                })
            }
        }
        default:
            return state;
    }
}

export const unblockSuccess = (index) => ({type: UNBLOCK, index});
export default cardReducer;