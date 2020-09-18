import React , { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Route, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { Basket } from "./Basket";
import { useSelector } from "react-redux";
import { storage } from "../Utils/utils";
import { Animate } from "../components/Animate/Animate";

export function Main() {

    const { pathname } = useLocation()

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

    useEffect(() => {

        window.scrollTo({
            top : 0,
            behavior: "smooth"
        })

    }, [pathname])

    return (
      <div className="wrapper">

          <Header />

          <div className="content">

              <Route exact path={'/'} >
                  <Animate className="animate-start">
                      <Home />
                  </Animate>
              </Route>

              <Route  path={'/card'} >
                  <Animate className="animate-start">
                     <Basket />
                  </Animate>
              </Route>

          </div>
      </div>
    )
}