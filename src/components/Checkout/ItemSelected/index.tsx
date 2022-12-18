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

import imgCoffe from '../../../assets/images/expresso-tradicional.png'
import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../styles/themes/defaults'

export function ItemSelected() {
  return (
    <ItemSelectedContainer>
      <Item>
        <Product>
          <img src={imgCoffe} alt="" />
          <InfoProduct>
            <span>Expresso Tradicional</span>
            <Actions>
              <Quantity>
                <DecrementButton>
                  <Minus size={16} color={defaultTheme['purple-500']} />
                </DecrementButton>
                <span>1</span>
                <IncrementButton>
                  <Plus size={16} color={defaultTheme['purple-500']} />
                </IncrementButton>
              </Quantity>
              <RemoveButton role="button" tabIndex={0}>
                <Trash size={16} color={defaultTheme['purple-500']} />
                <span>Remover</span>
              </RemoveButton>
            </Actions>
          </InfoProduct>
        </Product>
        <Price>R$ 9,90</Price>
      </Item>
    </ItemSelectedContainer>
  )
}
