import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { SET__CATEGORY } from "../../redux/actions";


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

export const Category = React.memo(() =>{

    const dispatch = useDispatch()
    const activeItem = useSelector(({category}) => category)

    const onSelectItem = item => dispatch(SET__CATEGORY(item))

    return (
      <ul>
          <li
            onClick={ () => onSelectItem( 'Все' ) }
            className={activeItem === 'Все' ? 'active' : ''}
            >Все
          </li>
          {
              category && category.map(createCategory(activeItem, onSelectItem))
          }
      </ul>
    )
})