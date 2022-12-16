import {
  IntroContainer,
  IntroContent,
  IntroImage,
  IntroContentTitles,
  IntroItemsContainer,
  IntroItem,
  IntroItemIcon,
} from './styles'

import coffeImage from '../../assets/images/coffe.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ReactElement } from 'react'

type itroItemType = {
  icon: ReactElement
  backgroundColor: 'yellowDark' | 'gray' | 'yellow' | 'purple'
  text: string
}
const introItens: itroItemType[] = [
  {
    icon: <ShoppingCart size={16} weight="fill" />,
    backgroundColor: 'yellowDark',
    text: 'Compra simples e segura',
  },
  {
    icon: <Package size={16} weight="fill" />,
    backgroundColor: 'gray',
    text: 'Embalagem mantém o café intacto',
  },
  {
    icon: <Timer size={16} weight="fill" />,
    backgroundColor: 'yellow',
    text: 'Entrega rápida e rastreada',
  },
  {
    icon: <Coffee size={16} weight="fill" />,
    backgroundColor: 'purple',
    text: 'O café chega fresquinho até você',
  },
]

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroContentTitles>
          <h3>Encontre o café perfeito para qualquer hora do dia</h3>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </IntroContentTitles>
        <IntroItemsContainer>
          {introItens.map((item) => (
            <IntroItem key={item.text}>
              <IntroItemIcon backgroundColor={item.backgroundColor}>
                {item.icon}
              </IntroItemIcon>

              <span>{item.text}</span>
            </IntroItem>
          ))}
        </IntroItemsContainer>
      </IntroContent>
      <IntroImage>
        <img src={coffeImage} alt="" />
      </IntroImage>
    </IntroContainer>
  )
}
