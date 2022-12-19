import { Bank, CreditCard, Money } from 'phosphor-react'
import { Method, PaymentMethodsContainer } from './styled'
import { defaultTheme } from '../../../styles/themes/defaults'
import { useContext } from 'react'
import { OrderContext } from '../../../contexts/OrderContext'

export function PaymentMethods() {
  const { selectedPaymetMethod, handleSelectedPaymentMethod } =
    useContext(OrderContext)
  return (
    <PaymentMethodsContainer>
      <Method
        type="button"
        onClick={() => handleSelectedPaymentMethod('credit_card')}
        selected={selectedPaymetMethod === 'credit_card'}
      >
        <CreditCard size={16} color={defaultTheme['purple-700']} />
        cartão de crédito
      </Method>
      <Method
        type="button"
        onClick={() => handleSelectedPaymentMethod('debit')}
        selected={selectedPaymetMethod === 'debit'}
      >
        <Bank size={16} color={defaultTheme['purple-700']} />
        cartão de débito
      </Method>
      <Method
        type="button"
        onClick={() => handleSelectedPaymentMethod('cash')}
        selected={selectedPaymetMethod === 'cash'}
      >
        <Money size={16} color={defaultTheme['purple-700']} />
        dinheiro
      </Method>
    </PaymentMethodsContainer>
  )
}
