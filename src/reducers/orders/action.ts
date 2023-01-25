import { ProductItem, ShippingAddress } from '../../contexts/OrderContext'

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_ITEM_TO_ORDER = 'REMOVE_ITEM_TO_ORDER',
  INCREMENT_QUANTITY_ITEM_IN_CART = 'INCREMENT_QUANTITY_ITEM_IN_CART',
  DECREMENT_QUANTITY_ITEM_IN_CART = 'DECREMENT_QUANTITY_ITEM_IN_CART',
  SELECTED_PAYMENT_METHOD = 'SELECTED_PAYMENT_METHOD',
  UPDATE_SHIPPING_ADDRESS = 'UPDATE_SHIPPING_ADDRESS',
  FINISHED_ORDER = 'FINISHED_ORDER',
  INITIAL_ORDER = 'INITIAL_ORDER',
}

type finishedOrderProps = {
  status: string
  shippingAddress: ShippingAddress
}

export const addToCartAction = (productItem: ProductItem) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: {
      productItem,
    },
  }
}

export const removeItemToOrderAcion = (id: string) => {
  return {
    type: ActionType.REMOVE_ITEM_TO_ORDER,
    payload: {
      id,
    },
  }
}

export const incrementQuantityItemInCartAction = (item: ProductItem) => {
  return {
    type: ActionType.INCREMENT_QUANTITY_ITEM_IN_CART,
    payload: {
      item,
    },
  }
}

export const decrementQuantityItemInCartAction = (item: ProductItem) => {
  return {
    type: ActionType.DECREMENT_QUANTITY_ITEM_IN_CART,
    payload: {
      item,
    },
  }
}

export const SelectedPaymentMethodAction = (method: string) => {
  return {
    type: ActionType.SELECTED_PAYMENT_METHOD,
    payload: {
      paymentMethod: method,
    },
  }
}

export const updateShippingAddressAction = (address: ShippingAddress) => {
  return {
    type: ActionType.UPDATE_SHIPPING_ADDRESS,
    payload: {
      shippingAddress: address,
    },
  }
}

export const initialOrder = () => {
  return {
    type: ActionType.INITIAL_ORDER,
  }
}

export const finishedOrderAction = ({
  status,
  shippingAddress,
}: finishedOrderProps) => {
  return {
    type: ActionType.FINISHED_ORDER,
    payload: {
      status,
      shippingAddress,
    },
  }
}
