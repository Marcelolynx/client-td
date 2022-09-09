import { useEffect, useState } from 'react'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import * as S from './styles'

export type TOption = {
  value: string
  label: string
}

export type DropdownProps = {
  options: TOption[]
  icon?: React.ReactNode
  onDropdownChange?: (value: string) => void
}

const Dropdown = ({ icon, options = [], onDropdownChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState({
    value: '',
    label: 'Selecione uma especialidade'
  })

  useEffect(() => {
    const handler = () => setIsOpen(false)

    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  })

  const handleOpenMenu = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setIsOpen((prevState) => !prevState)
  }

  const onItemClick = (option: { value: string; label: string }): void => {
    setSelectedValue(option)

    !!onDropdownChange && onDropdownChange(option.value)
  }

  return (
    <S.DropdownWrapper>
      {!!icon && <S.Icon>{icon}</S.Icon>}
      <S.DropdownContainer>
        <S.DropdownInput onClick={handleOpenMenu}>
          <div className="dropdown-selected-value">{selectedValue.label}</div>
          <ChevronDown size={24} />
        </S.DropdownInput>
        {isOpen && (
          <S.DropdownMenu>
            {options.map((option) => (
              <S.Item key={option.value} onClick={() => onItemClick(option)}>
                {option.label}
              </S.Item>
            ))}
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
    </S.DropdownWrapper>
  )
}

export default Dropdown
