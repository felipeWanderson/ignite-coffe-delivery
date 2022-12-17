import { MapPinLine } from 'phosphor-react'
import {
  AddressContainer,
  AddressHeader,
  CheckoutContainer,
  InfoOrderContainer,
  ResumeOrder,
  Title,
  Icon,
  Info,
  InfoTitle,
  InfoSubTitle,
  FormAddress,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoOrderContainer>
        <Title>Complete seu pedido</Title>
        <AddressContainer>
          <AddressHeader>
            <Icon>
              <MapPinLine size={22} />
            </Icon>
            <Info>
              <InfoTitle>Endereço de Entrega</InfoTitle>
              <InfoSubTitle>
                Informe o endereço onde deseja receber seu pedido
              </InfoSubTitle>
            </Info>
          </AddressHeader>

          <FormAddress>
            <input type="text" />
          </FormAddress>
        </AddressContainer>
      </InfoOrderContainer>

      <ResumeOrder>
        <Title>Cafés selecionados</Title>
      </ResumeOrder>
    </CheckoutContainer>
  )
}
