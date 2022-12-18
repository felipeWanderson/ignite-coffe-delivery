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
  return (
    <ResumeOrderContainer>
      <Title>Cafés selecionados</Title>
      <Resume>
        <ItemSelected />
        <ItemSelected />

        <ResumePayment>
          <PaymentItem>
            <span>Total de Itens</span>
            <span>R$ 29,70</span>
          </PaymentItem>
          <PaymentItem>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </PaymentItem>
          <PaymentItem emphasis>
            <span>Total</span>
            <span>R$ 33,20</span>
          </PaymentItem>
        </ResumePayment>

        <PlaceOrderButton to="/checkout/order-confirmation">
          confirmar pedido
        </PlaceOrderButton>
      </Resume>
    </ResumeOrderContainer>
  )
}
