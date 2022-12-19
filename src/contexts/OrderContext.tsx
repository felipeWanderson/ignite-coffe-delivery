import { createContext, ReactNode, useMemo, useState } from 'react'

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

type Order = {
  id: string
  status: string
  itens: ProductItem[] | []
  shippingAddress: {}
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
  addToCart: (product: Product, quantity: number) => void
  removeItemToOrder: (product: Product) => void
  incrementQuantityItemInCart: (item: ProductItem) => void
  decrementQuantityItemInCart: (item: ProductItem) => void
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
    shippingAddress: {},
    paymentMethod: '',
    subTotal: 0,
    valueDelivery: 3.5,
    amount: 0,
  } as Order)

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

  const quantityItensInCart = useMemo(() => {
    return order.itens
      .map((item) => item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }, [order.itens])

  const calculatedSubTotalAmount = useMemo(() => {
    return order.itens
      .map((item) => item.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }, [order.itens])
  const calculatedAmount = useMemo(() => {
    return calculatedSubTotalAmount + order.valueDelivery
  }, [calculatedSubTotalAmount, order.valueDelivery])

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
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
