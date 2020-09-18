import { category , Category } from "../components/Category/Category";
import { Sort } from "../components/Sort/Sort";
import React , { useEffect } from "react";
import { Card } from "../components/PizzasCard/Card";
import { useDispatch , useSelector } from "react-redux";
import { SET__PIZZAS } from "../redux/actions";
import { sortPizzas } from "../Utils/utils";


function createCard(item, index) {
    return (
      <Card
        key={item.id + '' + index}
        {...item}
      />
    )
}

export function Home() {

    const dispatch = useDispatch()
    const state = useSelector((state) => state || {})

    const { staticPizza = [],
            category : currentCategory,
            sort,
            pizzas : getPizzas } = state


    useEffect(() => {
        dispatch(SET__PIZZAS(sortPizzas(staticPizza,currentCategory, sort)))
    }, [dispatch, staticPizza, currentCategory, sort])

    const title = () => typeof currentCategory === 'number'
                        ? category[currentCategory]
                        : currentCategory

    return (
      <div className="container ">
          <div className="content__top">
              <div className="categories">

                  <Category />

              </div>

              <Sort />

          </div>

          <h2 className="content__title">{title()} пиццы</h2>

          <div className="content__items">
                { getPizzas && getPizzas.map(createCard) }
          </div>

      </div>
    )
}