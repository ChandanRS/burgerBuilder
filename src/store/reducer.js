import * as actionTypes from './action'

const initialState = {
    ingredients : {
        salad : 0,
        bacon : 0,
        cheese : 0,
        meat : 0
    },
    totalPrice : 0
}

const INGREDIENT_PRICES = {
    salad : 5,
    cheese : 6,
    meat : 20,
    bacon : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice : state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }

         case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice : state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }

            default : return state
    }
}



export default reducer