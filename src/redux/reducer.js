import {
    SET_BASKET ,
    SET_CATEGORY , SET_CLEAR_ALL ,
    SET_DECREMENT , SET_DELETE_CARD ,
    SET_INСREMENT ,
    SET_PIZZAS ,
    SET_SORT ,
    SET_STATIC_PIZZAS
} from "./constants";
import { storage } from "../Utils/utils";

const initialState = {
    category : 'Все',
    sort : 'популярности',
    ...storage()
}


const reCalc = (obj) => {

    const object = {...obj}

    object.countCards = Object.keys(object.basket).length
    object.totalCount = Object
                      .values(object.basket)
                      .reduce((acc, item) => acc += item.price, 0)

    return {...object}
}

export function reducer(state = initialState, action) {

    switch ( action.type ) {
        case SET_PIZZAS :

            return {
                ...state,
                pizzas : action.pizzas
            }

        case SET_CATEGORY :

            return {
                ...state,
                category : action.category
            }

        case SET_SORT :

            return {
                ...state,
                sort : action.sort
            }

        case SET_STATIC_PIZZAS :

            return {
                ...state,
                staticPizza : action.pizzas
            }

        case SET_BASKET :

            const basketState = {...state}

            basketState.basket = {
                ...basketState.basket,
                [action.formatId] : action.params
            }

            return {
                ...state,
                ...basketState,
                ...reCalc(basketState)
            }

        case SET_INСREMENT :

            const incSave = {...state}

            incSave.basket[action.id].count = action.INСREMENT
            incSave.basket[action.id].price = action.price


            return {
                ...state,
                ...incSave,
                ...reCalc(incSave)
            }

        case SET_DECREMENT :

            const decSave = {...state}

            decSave.basket[action.id].count = action.DECREMENT
            decSave.basket[action.id].price = action.price

            return {
                ...state,
                ...decSave,
                ...reCalc(decSave)
            }

        case SET_DELETE_CARD :

            const deleteCard = {...state}

            delete deleteCard.basket[action.key]

            return {
                ...state,
                ...deleteCard,
                ...reCalc(deleteCard)
            }

        case SET_CLEAR_ALL :

            const deleteAll = {...state}

            deleteAll.basket = {}

            return {
                ...state,
                ...deleteAll,
                ...reCalc(deleteAll)
            }

        default :

            return { ...state }
    }
}