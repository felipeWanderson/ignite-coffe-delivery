import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import deliveryImage from '../../assets/images/delivery.svg'
import { CASH, CREDIT_CARD, DEBIT_CARD } from '../../contants'
import { Order } from '../../contexts/OrderContext'
import { orders } from '../../data'
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
  const { id: orderId } = useParams()
  const order = useMemo(() => {
    return orders.find((order) => order.id === orderId) || ({} as Order)
  }, [orderId])
  const { shippingAddress, paymentMethod } = order

  const paymentMethodText = useMemo(() => {
    switch (paymentMethod) {
      case CREDIT_CARD:
        return 'Cartão de Credito'
      case CASH:
        return 'Dinheiro'
      case DEBIT_CARD:
        return 'Cartão de Débito'

      default:
        break
    }
  }, [paymentMethod])

  return (
    <OrderConfirmationContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>{`Agora é só aguardar ${shippingAddress?.name}, que logo o café chegará até você`}</Subtitle>
      <OrderInfoContainer>
        <GradientBackground>
          <OrderInfo>
            <Info>
              <InfoIcon backgroundColor="purple">
                <MapPin size={16} weight="fill" color="#FFF" />
              </InfoIcon>
              <Text>
                <span>
                  Emtrega em{' '}
                  <strong>{`${shippingAddress?.address1}, ${
                    shippingAddress?.address2
                  } ${
                    shippingAddress?.address3 &&
                    `, ${shippingAddress?.address3}`
                  }`}</strong>
                </span>
                <span>{`${shippingAddress?.neighborhood} - ${shippingAddress?.city} - ${shippingAddress?.state}`}</span>
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
                <strong>{paymentMethodText}</strong>
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
