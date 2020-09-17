export function sortPizzas(getPizzas, currPizza, popupItem) {

    const items = []

    if(currPizza === 'Все') {
        items.push(...popupSortLogic(popupItem, getPizzas))
    }
    else if (typeof currPizza === 'number') {

        const pizzas = getPizzas.reduce((acc,item) => {

            if (currPizza === item.category) {
                acc.push(item)
            }

            return acc
        },[])
        items.push(...popupSortLogic(popupItem, pizzas))
    }

    return items
}

function popupSortLogic(popupItem, array) {

    if ( popupItem === 'популярности') {
        return [ ...array.sort((a,b) => b.rating - a.rating ) ]
    }
    else if ( popupItem === 'цене' ) {
        return [ ...array.sort((a,b) => b.price - a.price )]
    }
    else if ( popupItem === 'алфавиту') {

        return array.sort((a, b) => a.name < b.name ? - 1 : Number(a.name > b.name))

    }
}

export function storage(value) {

    if (value) {
        return localStorage.setItem('react-pizza', JSON.stringify(value))
    }

    return JSON.parse( localStorage.getItem('react-pizza') )
}
