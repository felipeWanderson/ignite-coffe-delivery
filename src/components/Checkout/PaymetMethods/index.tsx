import { Bank, CreditCard, Money } from 'phosphor-react'
import { Method, PaymentMethodsContainer } from './styled'
import { defaultTheme } from '../../../styles/themes/defaults'

export function PaymentMethods() {
  return (
    <PaymentMethodsContainer>
      <Method type="button">
        <CreditCard size={16} color={defaultTheme['purple-700']} />
        cartão de crédito
      </Method>
      <Method type="button">
        <Bank size={16} color={defaultTheme['purple-700']} />
        cartão de débito
      </Method>
      <Method type="button" selected>
        <Money size={16} color={defaultTheme['purple-700']} />
        dinheiro
      </Method>
    </PaymentMethodsContainer>
  )
}
