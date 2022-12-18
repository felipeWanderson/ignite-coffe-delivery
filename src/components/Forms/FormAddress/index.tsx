import { Input } from '../input'
import { FormAddressContainer, InputGroup } from './styled'

export function FormAddress() {
  return (
    <FormAddressContainer>
      <InputGroup>
        <Input
          mask="99999-999"
          maskPlaceholder={null}
          placeholder="CEP"
          sizeInput="medium"
        />
      </InputGroup>
      <InputGroup>
        <Input mask="" placeholder="Nome" sizeInput="large" />
      </InputGroup>

      <InputGroup>
        <Input mask="" placeholder="Número" sizeInput="medium" maxLength={5} />
        <Input mask="" placeholder="Complemento" sizeInput="large" optional />
      </InputGroup>

      <InputGroup>
        <Input mask="" placeholder="Bairro" sizeInput="medium" />
        <Input mask="" placeholder="Cidade" sizeInput="large" />
        <Input mask="" placeholder="UF" sizeInput="small" maxLength={2} />
      </InputGroup>
    </FormAddressContainer>
  )
}
