import { useContext, useMemo } from 'react'
import { OrderContext } from '../../../contexts/OrderContext'
import { ItemSelected } from '../ItemSelected'
import {
  PaymentItem,
  PlaceOrderButton,
  Resume,
  ResumeOrderContainer,
  ResumePayment,
  Title,
} from './styled'

export function ResumeOrder() {
  const { order } = useContext(OrderContext)
  const { valueDelivery, itens, amount, subTotal } = order

  const numberFormat = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <ResumeOrderContainer>
      <Title>Cafés selecionados</Title>
      <Resume>
        {itens.map((item) => (
          <ItemSelected key={item.id} item={item} />
        ))}

        <ResumePayment>
          <PaymentItem>
            <span>Total de Itens</span>
            <span>{numberFormat(subTotal)}</span>
          </PaymentItem>
          <PaymentItem>
            <span>Entrega</span>
            <span>{numberFormat(valueDelivery)}</span>
          </PaymentItem>
          <PaymentItem emphasis>
            <span>Total</span>
            <span>{numberFormat(amount)}</span>
          </PaymentItem>
        </ResumePayment>

        <PlaceOrderButton type="submit">confirmar pedido</PlaceOrderButton>
      </Resume>
    </ResumeOrderContainer>
  )
}
