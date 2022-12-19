import {
  Actions,
  DecrementButton,
  IncrementButton,
  InfoProduct,
  Item,
  ItemSelectedContainer,
  Price,
  Product,
  Quantity,
  RemoveButton,
} from './styled'

import imgCoffe from '../../../assets/images/coffe-expresso-tradicional.png'
import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../styles/themes/defaults'
import { OrderContext } from '../../../contexts/OrderContext'
import { useContext, useState } from 'react'

type ProductItem = {
  id: string
  image_url: string
  tags: string[]
  title: string
  description: string
  priceUnit: number
  stock: number
  quantity: number
  price: number
}

interface ItemSelectedProps {
  item: ProductItem
}

export function ItemSelected({ item }: ItemSelectedProps) {
  const {
    removeItemToOrder,
    incrementQuantityItemInCart,
    decrementQuantityItemInCart,
  } = useContext(OrderContext)

  const numberFormat = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  const isDisabledIncremetButton = item.quantity === item.stock
  const isDisabledDecremetButton = item.quantity === 1

  return (
    <ItemSelectedContainer>
      <Item>
        <Product>
          <img src={item.image_url} alt="" />
          <InfoProduct>
            <span>{item.title}</span>
            <Actions>
              <Quantity>
                <DecrementButton
                  disabled={isDisabledDecremetButton}
                  onClick={() => decrementQuantityItemInCart(item)}
                >
                  <Minus size={16} color={defaultTheme['purple-500']} />
                </DecrementButton>
                <span>{item.quantity}</span>
                <IncrementButton
                  disabled={isDisabledIncremetButton}
                  onClick={() => incrementQuantityItemInCart(item)}
                >
                  <Plus size={16} color={defaultTheme['purple-500']} />
                </IncrementButton>
              </Quantity>
              <RemoveButton
                role="button"
                tabIndex={0}
                onClick={() => removeItemToOrder(item)}
              >
                <Trash size={16} color={defaultTheme['purple-500']} />
                <span>Remover</span>
              </RemoveButton>
            </Actions>
          </InfoProduct>
        </Product>
        <Price>{numberFormat(item.price)}</Price>
      </Item>
    </ItemSelectedContainer>
  )
}
