import React , { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { Basket } from "./Basket";
import { useSelector } from "react-redux";
import { storage } from "../Utils/utils";

export function Main() {

    const state = useSelector((state) => state || {})

    const { basket = {}, saveId, countCards, totalCount, } = state

    useEffect(() => {

        storage({
            basket,
            saveId,
            countCards,
            totalCount,
        })

    }, [basket, saveId, countCards,totalCount])

    return (
      <div className="wrapper">

          <Header />

          <div className="content">

              <Route exact path={'/'} >
                  <Home />
              </Route>

              <Route  path={'/card'} component={Basket}/>

          </div>
      </div>
    )
}