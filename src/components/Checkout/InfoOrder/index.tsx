import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormAddress } from '../../Forms/FormAddress'

import { defaultTheme } from '../../../styles/themes/defaults'

import {
  Container,
  Header,
  Icon,
  InfoOrderContainer,
  Title,
  Info,
  InfoTitle,
  InfoSubTitle,
} from './styled'
import { PaymentMethods } from '../PaymetMethods'

export function InfoOrder() {
  return (
    <InfoOrderContainer>
      <Title>Complete seu pedido</Title>
      <Container>
        <Header>
          <Icon>
            <MapPinLine size={22} color={defaultTheme['yellow-700']} />
          </Icon>
          <Info>
            <InfoTitle>Endereço de Entrega</InfoTitle>
            <InfoSubTitle>
              Informe o endereço onde deseja receber seu pedido
            </InfoSubTitle>
          </Info>
        </Header>

        <FormAddress />
      </Container>

      <Container>
        <Header>
          <Icon>
            <CurrencyDollar size={22} color={defaultTheme['purple-700']} />
          </Icon>
          <Info>
            <InfoTitle>Pagamento</InfoTitle>
            <InfoSubTitle>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </InfoSubTitle>
          </Info>
        </Header>

        <PaymentMethods />
      </Container>
    </InfoOrderContainer>
  )
}
