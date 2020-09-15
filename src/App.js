import React , { useEffect , useState } from 'react';
import { Home } from "./Pages/Home";
import { Header } from "./components/Header/Header";
import axios from 'axios'
import { sort } from "./Utils/utils";


export const MainContext = React.createContext()


function App() {

  const [currentPizza, setPizza] = useState('Все')
  const [activePopupItem, setPopupItem] = useState('популярности')
  const [getPizzas, setPizzas] = useState([])
  const [staticPizzas, setStaticPizzas] = useState([])

  useEffect(() => {
    setPizzas(sort(staticPizzas, currentPizza, activePopupItem))
  }, [staticPizzas,currentPizza, activePopupItem])

  useEffect( () => {

     axios.get('/db.json')
          .then(({data}) => {
            setStaticPizzas(data.pizzas)
            setPizzas(data.pizzas)
          })

  }, [])

  return (
    <MainContext.Provider value={
      {
        currentPizza,
        setPizza,
        getPizzas,
        activePopupItem,
        setPopupItem
      }
    }>

      <div className="App">
        <div className="wrapper">

          <Header />

          <div className="content">

            <Home />

          </div>
        </div>
      </div>

    </MainContext.Provider>
  );
}

export default App;
