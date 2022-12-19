import {
  HeaderContainer,
  ImageContainer,
  ActionsContainer,
  GeoLocalizationButton,
  Notification,
} from './styles'

import logo from '../../assets/images/logo-coffe-delivey.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { quantityItensInCart = 0 } = useContext(OrderContext)
  return (
    <HeaderContainer>
      <ImageContainer to="/">
        <img src={logo} alt="" />
      </ImageContainer>

      <ActionsContainer>
        <GeoLocalizationButton>
          <MapPin size={22} weight="fill" />
          <span>São Luís, MA</span>
        </GeoLocalizationButton>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {quantityItensInCart > 0 && (
            <Notification>{quantityItensInCart}</Notification>
          )}
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
