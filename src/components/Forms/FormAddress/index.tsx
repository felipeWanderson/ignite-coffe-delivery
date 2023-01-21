import { FocusEvent, useCallback, useContext, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { OrderContext } from '../../../contexts/OrderContext'
import { Input } from '../input'
import { FormAddressContainer, InputGroup } from './styled'

export function FormAddress() {
  const { order, updateShippingAddress } = useContext(OrderContext)
  const shippingAddressInOrder = useMemo(() => {
    return order.shippingAddress
  }, [order])
  const {
    control,
    formState: {
      defaultValues = {
        shippingAddress: shippingAddressInOrder,
      },
    },
    setValue,
  } = useFormContext()

  const updateAddress = useCallback(
    async (zipCode: string) => {
      const response = await fetch(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      ).then((response) => {
        if (!response.ok) {
          return
        }

        return response.json()
      })

      updateShippingAddress({
        zipCode: response?.cep,
        name: '',
        address1: response?.logradouro,
        address2: '',
        address3: response?.complemento,
        neighborhood: response?.bairro,
        city: response?.localidade,
        state: response?.uf,
      })

      setValue('shippingAddress.zipCode', response?.cep)
      setValue('shippingAddress.address1', response?.logradouro)
      setValue('shippingAddress.address3', response?.complemento)
      setValue('shippingAddress.neighborhood', response?.bairro)
      setValue('shippingAddress.city', response?.localidade)
      setValue('shippingAddress.state', response?.uf)
    },
    [updateShippingAddress, setValue],
  )

  const handleOnBlurZipCode = async (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value.length < 9) {
      return
    }

    await updateAddress(value)
  }

  return (
    <FormAddressContainer>
      <InputGroup>
        <Input
          mask="99999-999"
          maskPlaceholder={null}
          placeholder="CEP"
          sizeInput="medium"
          type="text"
          control={control}
          name="shippingAddress.zipCode"
          onBlur={handleOnBlurZipCode}
        />
      </InputGroup>
      <InputGroup>
        <Input
          mask=""
          placeholder="Nome"
          sizeInput="large"
          type="text"
          control={control}
          name="shippingAddress.name"
        />
      </InputGroup>
      <InputGroup>
        <Input
          mask=""
          placeholder="Logadouro"
          sizeInput="large"
          name="shippingAddress.address1"
          type="text"
          control={control}
          disabled
        />
      </InputGroup>

      <InputGroup>
        <Input
          mask=""
          placeholder="Número"
          sizeInput="medium"
          maxLength={5}
          name="shippingAddress.address2"
          type="text"
          control={control}
        />
        <Input
          mask=""
          placeholder="Complemento"
          sizeInput="large"
          optional
          name="shippingAddress.address3"
          type="text"
          control={control}
        />
      </InputGroup>

      <InputGroup>
        <Input
          mask=""
          placeholder="Bairro"
          sizeInput="medium"
          name="shippingAddress.neighborhood"
          type="text"
          control={control}
          disabled
        />
        <Input
          mask=""
          placeholder="Cidade"
          sizeInput="large"
          name="shippingAddress.city"
          type="text"
          control={control}
          disabled
        />
        <Input
          mask=""
          placeholder="UF"
          sizeInput="small"
          maxLength={2}
          name="shippingAddress.state"
          type="text"
          control={control}
          disabled
        />
      </InputGroup>
    </FormAddressContainer>
  )
}
