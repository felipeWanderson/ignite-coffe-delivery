import { InfoOrder } from '../../components/Checkout/InfoOrder'
import { ResumeOrder } from '../../components/Checkout/ResumeOrder'
import { CheckoutContainer } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useContext, useMemo } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { useNavigate } from 'react-router-dom'

const createNewOrderValidationSchema = zod.object({
  shippingAddress: zod
    .object({
      zipCode: zod.string(),
      name: zod.string(),
      address1: zod.string(),
      address2: zod.string(),
      address3: zod.string().optional(),
      neighborhood: zod.string(),
      city: zod.string(),
      state: zod.string(),
    })
    .required(),
})

type NewOrderFormData = zod.infer<typeof createNewOrderValidationSchema>

export function Checkout() {
  const { order, updateOrder, finishedOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const shippingAddress = useMemo(() => {
    return order.shippingAddress
  }, [order])
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(createNewOrderValidationSchema),
    values: {
      shippingAddress,
    },
  })

  const {
    handleSubmit,
    formState: { isValid },
  } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    if (!isValid) {
      alert('Erro ao fechar o pedido!')
      return
    }

    updateOrder({
      ...order,
      status: 'FINISHED',
      shippingAddress: data?.shippingAddress,
    })

    finishedOrder({
      ...order,
      status: 'FINISHED',
      shippingAddress: data?.shippingAddress,
    })

    navigate(`/checkout/order-confirmation/${order.id}`)
  }
  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FormProvider {...newOrderForm}>
          <InfoOrder />
          <ResumeOrder />
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
