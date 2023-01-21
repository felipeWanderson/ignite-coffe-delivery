import { useCallback, FocusEvent, useState } from 'react'
import { Control, useController } from 'react-hook-form'
import InputMask, { Props as ReactMaskProps } from 'react-input-mask'
import { InputContainer } from './styled'

interface InputProps extends ReactMaskProps {
  optional?: boolean
  sizeInput?: 'small' | 'medium' | 'large'
  control: Control<any, any>
  name: string
}
export function Input({
  optional = false,
  sizeInput = 'large',
  mask = '',
  name,
  control,
  onBlur,
  disabled,
  ...rest
}: InputProps) {
  const { field } = useController({
    name,
    control,
  })
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setIsFilled(field.ref.length > 0)
      onBlur && onBlur(event)
    },
    [onBlur, field],
  )

  return (
    <InputContainer isFocused={isFocused} isFilled={isFilled} size={sizeInput}>
      <InputMask
        mask={mask}
        inputRef={field.ref}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={field.onChange}
        value={field.value}
        name={field.name}
        disabled={disabled}
        {...rest}
      />
      {optional && <span>Opicional</span>}
    </InputContainer>
  )
}
