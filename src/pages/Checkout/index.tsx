import { InfoOrder } from '../../components/Checkout/InfoOrder'
import { ResumeOrder } from '../../components/Checkout/ResumeOrder'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoOrder />
      <ResumeOrder />
    </CheckoutContainer>
  )
}
