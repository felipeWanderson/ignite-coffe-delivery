import { createContext, ReactNode, useMemo, useReducer, useState } from 'react'
import { CREDIT_CARD, ORDER_INITIAL } from '../contants'
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

interface OrderState {
  order: Order
  selectedPaymetMethod: string
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
  const [orderState, dispach] = useReducer(
    (state: OrderState, action: any) => {
      if (action.type === 'ADD_TO_CART') {
        const product = state.order.itens.find(
          (item) => item.id === action.payload.productItem.id,
        )

        if (!product) {
          const itens = [...state.order.itens, action.payload.productItem]
          const subTotal = itens
            .map((item) => item.price)
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0,
            )
          const amount = subTotal + state.order.valueDelivery
          return {
            ...state,
            order: {
              ...state.order,
              itens,
              subTotal,
              amount,
            },
          }
        }

        const itens = state.order.itens.map((item) => {
          if (item.id === action.payload.productItem.id) {
            const quantity = item.quantity + action.payload.productItem.quantity

            return {
              ...item,
              quantity,
              price: item.priceUnit * quantity,
            }
          }

          return item
        })

        const subTotal = itens
          .map((item) => item.price)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const amount = subTotal + state.order.valueDelivery
        return {
          ...state,
          order: {
            ...state.order,
            itens,
            subTotal,
            amount,
          },
        }
      }
      if (action.type === 'REMOVE_ITEM_TO_ORDER') {
        const { itens } = state.order
        const itensInCart = itens.filter(
          (itens) => itens.id !== action.payload.id,
        )

        console.log('itensInCart', itensInCart)

        const subTotal = itensInCart
          .map((item) => item.price)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const amount = subTotal + state.order.valueDelivery
        return {
          ...state,
          order: {
            ...state.order,
            itens: itensInCart,
            subTotal,
            amount,
          },
        }
      }

      if (action.type === 'INCREMENT_QUANTITY_ITEM_IN_CART') {
        const { item } = action.payload
        const orderItens = state.order.itens.map((orderItem) => {
          if (orderItem.id === item.id) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
              price: (orderItem.quantity + 1) * orderItem.priceUnit,
            }
          }

          return orderItem
        })

        const subTotal = orderItens
          .map((item) => item.price)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const amount = subTotal + state.order.valueDelivery

        return {
          ...state,
          order: {
            ...state.order,
            itens: orderItens,
            subTotal,
            amount,
          },
        }
      }
      if (action.type === 'DECREMENT_QUANTITY_ITEM_IN_CART') {
        const { item } = action.payload
        const orderItens = state.order.itens.map((orderItem) => {
          if (orderItem.id === item.id) {
            return {
              ...orderItem,
              quantity: orderItem.quantity - 1,
              price: (orderItem.quantity - 1) * orderItem.priceUnit,
            }
          }

          return orderItem
        })

        const subTotal = orderItens
          .map((item) => item.price)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const amount = subTotal + state.order.valueDelivery
        return {
          ...state,
          order: {
            ...state.order,
            itens: orderItens,
            subTotal,
            amount,
          },
        }
      }
      if (action.type === 'SELECTED_PAYMENT_METHOD') {
        return {
          ...state,
          selectedPaymetMethod: action.payload.mthod,
        }
      }

      if (action.type === 'UPDATE_SHIPPING_ADDRESS') {
        return {
          ...state,
          order: {
            ...state.order,
            shippingAddress: action.payload.shippingAddress,
          },
        }
      }

      if (action.type === 'FINISHED_ORDER') {
        const { status, shippingAddress } = action.payload

        return {
          ...state,
          order: {
            ...state.order,
            status,
            shippingAddress,
          },
        }
      }
      if (action.type === 'INITIAL_ORDER') {
        return {
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
        }
      }

      return state
    },
    {
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
    },
  )

  const { order, selectedPaymetMethod } = orderState

  const addToCart = (product: Product, quantity: number) => {
    const productItem: ProductItem = {
      ...product,
      priceUnit: product.price,
      quantity,
      price: product.price * quantity,
    }

    dispach({
      type: 'ADD_TO_CART',
      payload: {
        productItem,
      },
    })
  }

  const removeItemToOrder = (product: Product) => {
    dispach({
      type: 'REMOVE_ITEM_TO_ORDER',
      payload: {
        id: product.id,
      },
    })
  }

  const incrementQuantityItemInCart = (item: ProductItem) => {
    dispach({
      type: 'INCREMENT_QUANTITY_ITEM_IN_CART',
      payload: {
        item,
      },
    })
  }
  const decrementQuantityItemInCart = (item: ProductItem) => {
    dispach({
      type: 'DECREMENT_QUANTITY_ITEM_IN_CART',
      payload: {
        item,
      },
    })
  }

  const handleSelectedPaymentMethod = (method: string) => {
    dispach({
      type: 'SELECTED_PAYMENT_METHOD',
      payload: {
        paymentMethod: method,
      },
    })
  }
  const quantityItensInCart = useMemo(() => {
    return order.itens
      .map((item) => item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }, [order.itens])

  const updateShippingAddress = (address: ShippingAddress) => {
    dispach({
      type: 'UPDATE_SHIPPING_ADDRESS',
      payload: {
        shippingAddress: address,
      },
    })
  }

  const initialDateOrder = () => {
    dispach({
      type: 'INITIAL_ORDER',
      payload: {},
    })
  }

  const finishedOrder = (order: Order) => {
    dispach({
      type: 'FINISHED_ORDER',
      payload: {
        status: order?.status,
        shippingAddress: order?.shippingAddress,
      },
    })
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
