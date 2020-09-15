import React , { useState } from "react";

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

export function Card({ category,id, imageUrl, name, price,rating, sizes, types }) {

    const type = ['тонкое', 'традиционное']
    const [activeType, setType] = useState(types[0])

    const size = [26, 30, 40]
    const [activeSize, setSize] = useState(sizes[0])

    const onSeleteType = (index) => {
        setType(index)
    }

    const onSeleteSize = (item) => {
        setSize(item)
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
              <div className="button button--outline button--add">
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
                  <span>Добавить</span>

              </div>
          </div>
      </div>
    )
}