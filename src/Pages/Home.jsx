import { category , Category } from "../components/Category/Category";
import { Sort } from "../components/Sort/Sort";
import React , { useContext } from "react";
import { MainContext } from "../App";
import { Card } from "../components/PizzasCard/Card";


function createCard(item, index) {
    return (
      <Card
        key={item.id + '' + index}
        {...item}
      />
    )
}

export function Home() {

    let { currentPizza, getPizzas } = useContext(MainContext)

    const title = () => typeof currentPizza === 'number' ? category[currentPizza] : currentPizza

    return (
      <div className="container">
          <div className="content__top">
              <div className="categories">

                  <Category />

              </div>

              <Sort />

          </div>

          <h2 className="content__title">{title()} пиццы</h2>

          <div className="content__items">

              { getPizzas && getPizzas.map(createCard)}


          </div>
      </div>
    )
}