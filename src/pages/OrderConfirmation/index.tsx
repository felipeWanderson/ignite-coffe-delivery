import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryImage from '../../assets/images/delivery.svg'
import {
  Info,
  OrderConfirmationContainer,
  OrderInfo,
  OrderInfoContainer,
  Subtitle,
  Title,
  Text,
  ImageDelivey,
  GradientBackground,
  InfoIcon,
} from './styled'

export function OrderConfirmation() {
  return (
    <OrderConfirmationContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
      <OrderInfoContainer>
        <GradientBackground>
          <OrderInfo>
            <Info>
              <InfoIcon backgroundColor="purple">
                <MapPin size={16} weight="fill" color="#FFF" />
              </InfoIcon>
              <Text>
                <span>
                  Emtrega em <strong>Rua Quarenta e Seis, 21</strong>
                </span>
                <span>São Raimundo - São Luís - MA</span>
              </Text>
            </Info>
            <Info>
              <InfoIcon backgroundColor="yellow">
                <Timer size={16} weight="fill" color="#FFF" />
              </InfoIcon>
              <Text>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </Text>
            </Info>
            <Info>
              <InfoIcon backgroundColor="yellowDark">
                <CurrencyDollar size={16} weight="fill" color="#FFF" />
              </InfoIcon>
              <Text>
                <span>Pagamento na Entrega</span>
                <strong>Cartão de Crédito</strong>
              </Text>
            </Info>
          </OrderInfo>
        </GradientBackground>
        <ImageDelivey>
          <img src={deliveryImage} alt="" />
        </ImageDelivey>
      </OrderInfoContainer>
    </OrderConfirmationContainer>
  )
}
