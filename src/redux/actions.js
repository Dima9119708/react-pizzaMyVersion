import {
    SET_BASKET ,
    SET_CATEGORY , SET_CLEAR_ALL ,
    SET_DECREMENT , SET_DELETE_CARD ,
    SET_INСREMENT ,
    SET_PIZZAS ,
    SET_SORT ,
    SET_STATIC_PIZZAS
} from "./constants";

export const SET__STATIC__PIZZA = (pizzas) => ({
    type: SET_STATIC_PIZZAS,
    pizzas
})

export const SET__PIZZAS = (pizzas) => ({
    type : SET_PIZZAS,
    pizzas,
})

export const SET__CATEGORY = (category) => ({
    type : SET_CATEGORY,
    category
})

export const SET__SORT = (sort) => ({
    type : SET_SORT,
    sort
})

export const SET__BASKET = (id,formatId,params) => ({
    type : SET_BASKET,
    id,
    formatId,
    params,
})

export const SET__INСREMENT = (INСREMENT, id, price, cardID) => {

    return {
        type : SET_INСREMENT,
        INСREMENT,
        id,
        price,
        cardID
    }
}

export const SET__DECREMENT = (DECREMENT, id, price, cardID) => {

    return {
        type : SET_DECREMENT,
        DECREMENT,
        id,
        price,
        cardID
    }
}

export const SET__DELETE__CARD = (key, id) => {
    return {
        type : SET_DELETE_CARD,
        key,
        id
    }
}

export const SET__CLEAR__ALL = () => {
    return { type : SET_CLEAR_ALL }
}