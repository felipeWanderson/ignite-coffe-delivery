import { createContext, ReactNode, useMemo, useState } from 'react'
import { orders } from '../data'

type Product = {
  id: string
  image_url: string
  tags: string[]
  title: string
  description: string
  price: number
  stock: number
}

type ProductItem = {
  id: string
  image_url: string
  tags: string[]
  title: string
  description: string
  priceUnit: number
  stock: number
  quantity: number
  price: number
}

interface ShippingAddress {
  zipCode: string
  name: string
  address1: string
  address2: string
  address3: string
  neighborhood: string
  city: string
  state: string
}

export type Order = {
  id: string
  status: string
  itens: ProductItem[] | []
  shippingAddress: ShippingAddress
  paymentMethod: string
  subTotal: number
  valueDelivery: number
  amount: number
}

interface OrderContextType {
  order: Order
  quantityItensInCart: number
  calculatedSubTotalAmount: number
  calculatedAmount: number
  selectedPaymetMethod: string
  addToCart: (product: Product, quantity: number) => void
  removeItemToOrder: (product: Product) => void
  incrementQuantityItemInCart: (item: ProductItem) => void
  decrementQuantityItemInCart: (item: ProductItem) => void
  handleSelectedPaymentMethod: (method: string) => void
  updateShippingAddress: (address: ShippingAddress) => void
  updateOrder: (order: Order) => void
  finishedOrder: (order: Order) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState({
    id: new Date().getTime().toString(),
    status: 'INITIAL',
    itens: [],
    shippingAddress: {} as ShippingAddress,
    paymentMethod: 'credit_card',
    subTotal: 0,
    valueDelivery: 3.5,
    amount: 0,
  } as Order)

  const [selectedPaymetMethod, setSelectedPaymentMethod] =
    useState('credit_card')

  const addToCart = (product: Product, quantity: number) => {
    const productItem: ProductItem = {
      ...product,
      priceUnit: product.price,
      quantity,
      price: product.price * quantity,
    }
    const itens = [...order.itens, productItem]
    setOrder((prevState) => ({
      ...prevState,
      itens,
    }))
  }

  const removeItemToOrder = (product: Product) => {
    const { itens } = order
    const itensInCart = itens.filter((itens) => itens.id !== product.id)
    setOrder((prevState) => ({
      ...prevState,
      itens: itensInCart,
    }))
  }

  const incrementQuantityItemInCart = (item: ProductItem) => {
    const orderItens = order.itens.map((orderItem) => {
      if (orderItem.id === item.id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
          price: (orderItem.quantity + 1) * orderItem.priceUnit,
        }
      }

      return orderItem
    })

    setOrder((prevState) => ({
      ...prevState,
      itens: orderItens,
    }))
  }
  const decrementQuantityItemInCart = (item: ProductItem) => {
    const orderItens = order.itens.map((orderItem) => {
      if (orderItem.id === item.id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1,
          price: (orderItem.quantity - 1) * orderItem.priceUnit,
        }
      }

      return orderItem
    })

    setOrder((prevState) => ({
      ...prevState,
      itens: orderItens,
    }))
  }

  const handleSelectedPaymentMethod = (method: string) => {
    setSelectedPaymentMethod(method)
    setOrder((prevState) => ({
      ...prevState,
      paymentMethod: method,
    }))
  }
  const quantityItensInCart = useMemo(() => {
    return order.itens
      .map((item) => item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }, [order.itens])

  const calculatedSubTotalAmount = useMemo(() => {
    const subTotal = order.itens
      .map((item) => item.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    setOrder((prevState) => ({
      ...prevState,
      subTotal,
    }))
    return subTotal
  }, [order.itens])
  const calculatedAmount = useMemo(() => {
    const amount = calculatedSubTotalAmount + order.valueDelivery
    setOrder((prevState) => ({
      ...prevState,
      amount,
    }))
    return amount
  }, [calculatedSubTotalAmount, order.valueDelivery])

  const updateShippingAddress = (address: ShippingAddress) => {
    setOrder((prevState) => ({
      ...prevState,
      shippingAddress: address,
    }))
  }

  const updateOrder = (order: Order) => {
    setOrder((prevState) => ({
      ...prevState,
      ...order,
    }))
  }

  const finishedOrder = (order: Order) => {
    orders.push(order)
    setOrder({
      id: new Date().getTime().toString(),
      status: 'INITIAL',
      itens: [],
      shippingAddress: {} as ShippingAddress,
      paymentMethod: 'credit_card',
      subTotal: 0,
      valueDelivery: 3.5,
      amount: 0,
    } as Order)
    handleSelectedPaymentMethod('credit_card')
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addToCart,
        quantityItensInCart,
        removeItemToOrder,
        calculatedAmount,
        calculatedSubTotalAmount,
        decrementQuantityItemInCart,
        incrementQuantityItemInCart,
        selectedPaymetMethod,
        handleSelectedPaymentMethod,
        updateShippingAddress,
        updateOrder,
        finishedOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
