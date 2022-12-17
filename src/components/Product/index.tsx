import {
  AddToCartButton,
  Buy,
  BuyAction,
  DecrementButton,
  IncrementButton,
  ProductContainer,
  ProductDescription,
  ProductName,
  ProductPrice,
  Quantity,
  Tag,
  TagsContainer,
} from './styles'
import imgCoffe from '../../assets/images/expresso-tradicional.png'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function Product() {
  return (
    <ProductContainer>
      <img src={imgCoffe} alt="" />
      <TagsContainer>
        <Tag>
          <span>Tradicional</span>
        </Tag>
      </TagsContainer>
      <ProductName>Expresso Tradicional</ProductName>
      <ProductDescription>
        O tradicional café feito com água quente e grãos moídos
      </ProductDescription>
      <Buy>
        <ProductPrice>
          <span>R$</span>
          <strong>9,90</strong>
        </ProductPrice>

        <BuyAction>
          <Quantity>
            <DecrementButton>
              <Minus size={14} />
            </DecrementButton>
            <span>1</span>
            <IncrementButton>
              <Plus size={14} />
            </IncrementButton>
          </Quantity>

          <AddToCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCartButton>
        </BuyAction>
      </Buy>
    </ProductContainer>
  )
}
