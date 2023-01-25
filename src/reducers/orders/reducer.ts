import { CREDIT_CARD, ORDER_INITIAL } from '../../contants'
import { Order, ShippingAddress } from '../../contexts/OrderContext'
import { ActionType } from './action'

interface OrderState {
  order: Order
  selectedPaymetMethod: string
}

export const orderReducer = (state: OrderState, action: any) => {
  if (action.type === ActionType.ADD_TO_CART) {
    const product = state.order.itens.find(
      (item) => item.id === action.payload.productItem.id,
    )

    if (!product) {
      const itens = [...state.order.itens, action.payload.productItem]
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
  if (action.type === ActionType.REMOVE_ITEM_TO_ORDER) {
    const { itens } = state.order
    const itensInCart = itens.filter((itens) => itens.id !== action.payload.id)

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

  if (action.type === ActionType.INCREMENT_QUANTITY_ITEM_IN_CART) {
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
  if (action.type === ActionType.DECREMENT_QUANTITY_ITEM_IN_CART) {
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
  if (action.type === ActionType.SELECTED_PAYMENT_METHOD) {
    return {
      ...state,
      selectedPaymetMethod: action.payload.mthod,
    }
  }

  if (action.type === ActionType.UPDATE_SHIPPING_ADDRESS) {
    return {
      ...state,
      order: {
        ...state.order,
        shippingAddress: action.payload.shippingAddress,
      },
    }
  }

  if (action.type === ActionType.FINISHED_ORDER) {
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
  if (action.type === ActionType.INITIAL_ORDER) {
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
}
