import React , { useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from "react-redux";
import { SET__PIZZAS , SET__STATIC__PIZZA } from "./redux/actions";
import { Main } from "./Pages/Main";


function App() {

  const dispatch = useDispatch()

  useEffect( () => {

     axios.get('/db.json')
          .then(({data}) => {
              dispatch(SET__STATIC__PIZZA(data.pizzas))
              dispatch(SET__PIZZAS(data.pizzas))
          })

  }, [dispatch])

  return (
      <div className="App">
        <Main />
      </div>
  );
}

export default App;
