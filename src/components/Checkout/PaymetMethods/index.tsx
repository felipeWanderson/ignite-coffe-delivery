import { Bank, CreditCard, Money } from 'phosphor-react'
import { Method, PaymentMethodsContainer } from './styled'
import { defaultTheme } from '../../../styles/themes/defaults'
import { useContext } from 'react'
import { OrderContext } from '../../../contexts/OrderContext'
import { CASH, CREDIT_CARD, DEBIT_CARD } from '../../../contants'

export function PaymentMethods() {
  const { selectedPaymetMethod, handleSelectedPaymentMethod } =
    useContext(OrderContext)
  return (
    <PaymentMethodsContainer>
      <Method
        type="button"
        onClick={() => handleSelectedPaymentMethod(CREDIT_CARD)}
        selected={selectedPaymetMethod === CREDIT_CARD}
      >
        <CreditCard size={16} color={defaultTheme['purple-700']} />
        cartão de crédito
      </Method>
      <Method
        type="button"
        onClick={() => handleSelectedPaymentMethod(DEBIT_CARD)}
        selected={selectedPaymetMethod === DEBIT_CARD}
      >
        <Bank size={16} color={defaultTheme['purple-700']} />
        cartão de débito
      </Method>
      <Method
        type="button"
        onClick={() => handleSelectedPaymentMethod(CASH)}
        selected={selectedPaymetMethod === CASH}
      >
        <Money size={16} color={defaultTheme['purple-700']} />
        dinheiro
      </Method>
    </PaymentMethodsContainer>
  )
}
