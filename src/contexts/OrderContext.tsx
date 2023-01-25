import { createContext, ReactNode, useMemo, useReducer, useState } from 'react'
import { CREDIT_CARD, ORDER_INITIAL } from '../contants'
import { orders } from '../data'
import {
  addToCartAction,
  decrementQuantityItemInCartAction,
  finishedOrderAction,
  incrementQuantityItemInCartAction,
  initialOrder,
  removeItemToOrderAcion,
  SelectedPaymentMethodAction,
  updateShippingAddressAction,
} from '../reducers/orders/action'
import { orderReducer } from '../reducers/orders/reducer'

type Product = {
  id: string
  image_url: string
  tags: string[]
  title: string
  description: string
  price: number
  stock: number
}

export type ProductItem = {
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

export interface ShippingAddress {
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
  selectedPaymetMethod: string
  addToCart: (product: Product, quantity: number) => void
  removeItemToOrder: (product: Product) => void
  incrementQuantityItemInCart: (item: ProductItem) => void
  decrementQuantityItemInCart: (item: ProductItem) => void
  handleSelectedPaymentMethod: (method: string) => void
  updateShippingAddress: (address: ShippingAddress) => void
  finishedOrder: (order: Order) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispach] = useReducer(orderReducer, {
    order: {
      id: new Date().getTime().toString(),
      status: ORDER_INITIAL,
      itens: [],
      shippingAddress: {} as ShippingAddress,
      paymentMethod: CREDIT_CARD,
      subTotal: 0,
      valueDelivery: 3.5,
      amount: 0,
    } as Order,
    selectedPaymetMethod: CREDIT_CARD,
  })

  const { order, selectedPaymetMethod } = orderState

  const addToCart = (product: Product, quantity: number) => {
    const productItem: ProductItem = {
      ...product,
      priceUnit: product.price,
      quantity,
      price: product.price * quantity,
    }

    dispach(addToCartAction(productItem))
  }

  const removeItemToOrder = (product: Product) => {
    dispach(removeItemToOrderAcion(product.id))
  }

  const incrementQuantityItemInCart = (item: ProductItem) => {
    dispach(incrementQuantityItemInCartAction(item))
  }
  const decrementQuantityItemInCart = (item: ProductItem) => {
    dispach(decrementQuantityItemInCartAction(item))
  }

  const handleSelectedPaymentMethod = (method: string) => {
    dispach(SelectedPaymentMethodAction(method))
  }
  const quantityItensInCart = useMemo(() => {
    return order.itens
      .map((item) => item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }, [order.itens])

  const updateShippingAddress = (address: ShippingAddress) => {
    dispach(updateShippingAddressAction(address))
  }

  const initialDateOrder = () => {
    dispach(initialOrder())
  }

  const finishedOrder = (order: Order) => {
    dispach(
      finishedOrderAction({
        status: order?.status,
        shippingAddress: order?.shippingAddress,
      }),
    )
    orders.push(order)
    initialDateOrder()
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addToCart,
        quantityItensInCart,
        removeItemToOrder,
        decrementQuantityItemInCart,
        incrementQuantityItemInCart,
        selectedPaymetMethod,
        handleSelectedPaymentMethod,
        updateShippingAddress,
        finishedOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
