import React from "react";
import emptyCard from '../../assets/img/empty-cart.png'
import { Link } from "react-router-dom";

export function BasketEmpty() {
    return (
      <div className="container container--cart">
          <div className="cart cart--empty">

              <h2>Корзина пустая <span role="img" aria-label="Empty cart">😕</span> </h2>

              <p>Вероятней всего, вы не заказывали ещё пиццу. </p>
              <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>


              <img src={emptyCard} alt="Empty cart" />

              <Link to={'/'} >
                  <button className="button button--black">
                      <span>Вернуться назад</span>
                  </button>
              </Link>

          </div>
      </div>
    )
}