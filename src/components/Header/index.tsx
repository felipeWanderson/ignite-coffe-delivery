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

export function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <img src={logo} alt="" />
      </ImageContainer>

      <ActionsContainer>
        <GeoLocalizationButton>
          <MapPin size={22} weight="fill" />
          <span>São Luís, MA</span>
        </GeoLocalizationButton>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <Notification>3</Notification>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
