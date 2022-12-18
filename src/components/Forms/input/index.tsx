import { useCallback, useRef, useState } from 'react'
import InputMask, { Props as ReactMaskProps } from 'react-input-mask'
import { InputContainer } from './styled'

interface InputProps extends ReactMaskProps {
  optional?: boolean
  sizeInput?: 'small' | 'medium' | 'large'
}
export function Input({
  optional = false,
  sizeInput = 'large',
  mask = '',
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <InputContainer isFocused={isFocused} isFilled={isFilled} size={sizeInput}>
      <InputMask
        mask={mask}
        inputRef={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type="text"
        {...rest}
      />
      {optional && <span>Opicional</span>}
    </InputContainer>
  )
}
