import React , { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { SET__BASKET } from "../../redux/actions";

function createType (activeType, types, fnType) {

    return ( item, index ) => {
        return (
          <li
            key={item}
            className={`
                ${ !types.includes(index) ? 'disabled' : ''}
                ${ activeType === index ? 'active' : '' }
            `}

            onClick={() => fnType(index)}
          >
              {item}
          </li>
        )
    }
}

function createSizes ( activeSize, sizes, fnSize ) {

    return ( item ) => {
        return (
          <li
            key={item}
            className={`
                ${ !sizes.includes(item) ? 'disabled' : ''}
                ${ activeSize === item ? 'active' : '' }
            `}

            onClick={() => fnSize(item)}
          >
              {item} см.
          </li>
        )
    }

}


export function Card({ id, imageUrl, name, price,sizes, types }) {

    const type = ['тонкое', 'традиционное']
    const size = [26, 30, 40]

    const [activeType, setType] = useState(types[0])
    const [activeSize, setSize] = useState(sizes[0])

    const dispatch = useDispatch()

    const basket = useSelector(({basket}) => basket || {})

    const saveCount = {}

    Object.keys(basket).forEach(item => {

        if (id === basket[item].id) {

            if (saveCount[name]) {
                saveCount[name] += basket[item].count
            }
            else {
                saveCount[name] = basket[item].count
            }
        }

    })

    const onSeleteType = (index) => {
        setType(index)
    }

    const onSeleteSize = (item) => {
        setSize(item)
    }

    const addBasket = () => {

        const formatId = id+type[activeType]+activeSize

        const cardData = {
            type : type[activeType],
            size : activeSize,
            count : basket[formatId] ? basket[formatId].count += 1 : 1,
            price : basket[formatId] ? basket[formatId].count * price : price,
            priceStatic : price,
            name,
            imageUrl,
            id
        }

        dispatch(SET__BASKET(id, formatId, cardData))
    }

    return (
      <div className="pizza-block">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{name}</h4>
          <div className="pizza-block__selector">
              <ul>
                  { type && type.map(createType(activeType, types, onSeleteType)) }
              </ul>
              <ul>
                  { size && size.map(createSizes( activeSize, sizes, onSeleteSize) ) }
              </ul>
          </div>
          <div className="pizza-block__bottom">
              <div className="pizza-block__price">от {price} ₽</div>
              <div
                onClick={addBasket}

                className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                  </svg>
                  <span

                  >
                      Добавить
                  </span>
                  { saveCount[name] ? <i>{saveCount[name]}</i> : '' }
              </div>
          </div>
      </div>
    )
}