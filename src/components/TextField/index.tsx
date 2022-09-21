import { useState, InputHTMLAttributes } from 'react'
import { formatPhoneNumber } from 'utils/formatters'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  formatPhone?: boolean
  removeInputBackground?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  error,
  disabled = false,
  formatPhone = false,
  removeInputBackground = false,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = formatPhone
      ? formatPhoneNumber(e.currentTarget.value, true)
      : e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper
      disabled={disabled}
      error={!!error}
      removeInputBackground={removeInputBackground}
    >
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper removeInputBackground={removeInputBackground}>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          autoComplete="off"
          removeInputBackground={removeInputBackground}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
