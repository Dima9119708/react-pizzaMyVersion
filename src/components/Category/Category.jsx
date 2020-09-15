import React , { useContext , useState } from "react";
import { MainContext } from "../../App";


export const category = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']

const createCategory = (activeItem, onSelectItem) => {

    return (item,index) => {
        return <li
                  onClick={() => onSelectItem(index)}
                  className={activeItem === index ? 'active' : ''}
                  key={index + item}
               >
                { item }
        </li>
    }
}

export function Category() {

    const [activeItem, setItem] = useState('Все')
    const { setPizza } = useContext(MainContext)


    const onSelectItem = item => {
        setItem( item )
        setPizza( item )
    }

    return (
      <ul>
          <li
            onClick={ () =>
              onSelectItem( 'Все' )
            }
            className={activeItem === 'Все' ? 'active' : ''}
            >Все</li>
          {
              category && category.map(createCategory(activeItem, onSelectItem))
          }
      </ul>
    )
}