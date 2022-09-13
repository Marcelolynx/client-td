import { MouseEvent, useEffect, useState } from 'react'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import { Close } from '@styled-icons/material-rounded/Close'

import * as S from './styles'
import { OtherSpecialties } from 'utils/constants'

export type TOption = {
  value: string
  label: string
}

export type DropdownProps = {
  options: TOption[]
  icon?: React.ReactNode
  error?: string
  onDropdownChange?: (value: TOption[]) => void
  handleOtherSpecialtieField: () => void
}

const Dropdown = ({
  icon,
  options = [],
  error,
  onDropdownChange,
  handleOtherSpecialtieField
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<TOption[]>([])

  useEffect(() => {
    const handler = () => setIsOpen(false)

    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  })

  useEffect(() => {
    !!onDropdownChange && onDropdownChange(selectedValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue])

  const handleOpenMenu = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setIsOpen((prevState) => !prevState)
  }

  const onItemClick = (option: { value: string; label: string }): void => {
    let options

    if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
      options = removeOption(option)
    } else {
      options = [...selectedValue, option]
    }

    setSelectedValue(options)
  }

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return 'Selecione uma especialidade'
    }

    return (
      <S.TagsContainer>
        {selectedValue.map((option) => (
          <S.Tags key={option.value}>
            {option.label}
            <span
              onClick={(e) => onTagRemove(e, option)}
              className="dropdown-tag-close"
            >
              <Close size={20} />
            </span>
          </S.Tags>
        ))}
      </S.TagsContainer>
    )
  }

  const removeOption = (option: { value: string; label?: string }) => {
    if (option.value === OtherSpecialties.toLowerCase())
      handleOtherSpecialtieField()
    return selectedValue.filter((o) => o.value !== option.value)
  }

  const onTagRemove = (
    e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
    option: TOption
  ) => {
    e.stopPropagation()
    setSelectedValue(removeOption(option))
  }

  const isSelected = (option: { value: string; label: string }) => {
    return selectedValue.filter((o) => o.value === option.value).length > 0
  }

  return (
    <>
      <S.DropdownWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.DropdownContainer>
          <S.DropdownInput onClick={handleOpenMenu}>
            <S.DropdownValues>{getDisplay()}</S.DropdownValues>
            <ChevronDown size={24} />
          </S.DropdownInput>
          {isOpen && (
            <S.DropdownMenu>
              {options.map((option) => (
                <S.Item
                  selected={isSelected(option)}
                  key={option.value}
                  onClick={() => onItemClick(option)}
                >
                  {option.label}
                </S.Item>
              ))}
            </S.DropdownMenu>
          )}
        </S.DropdownContainer>
      </S.DropdownWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </>
  )
}

export default Dropdown
