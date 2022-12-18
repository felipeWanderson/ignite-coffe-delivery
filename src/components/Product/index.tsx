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
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

interface ProductData {
  id: string
  image_url: string
  tags: string[]
  title: string
  description: string
  price: number
  stock: number
}

interface ProductProps {
  data: ProductData
}

export function Product({ data }: ProductProps) {
  const numerFormat = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
      .format(value)
      .replace('R$', '')
      .trim()
  }
  return (
    <ProductContainer>
      <img src={data.image_url} alt="" />
      <TagsContainer>
        {data.tags.map((tag) => (
          <Tag key={tag}>
            <span>{tag}</span>
          </Tag>
        ))}
      </TagsContainer>
      <ProductName>{data.title}</ProductName>
      <ProductDescription>{data.description}</ProductDescription>
      <Buy>
        <ProductPrice>
          <span>R$</span>
          <strong>{numerFormat(data.price)}</strong>
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
