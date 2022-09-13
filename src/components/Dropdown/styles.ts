import styled, { css, DefaultTheme } from 'styled-components'

export const DropdownWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: '0';
    & > svg {
      width: 100%;
    }
  `}
`
export const DropdownContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    padding-left: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    text-align: left;
    position: relative;
  `}
`

export const DropdownInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const DropdownValues = styled.div`
  width: 100%;
`

export const DropdownMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    transform: translateY(4px);
    width: 100%;
    border: 1px solid ${theme.colors.primary};
    background: ${theme.colors.white};
    border-radius: 5px;
    overflow-x: auto;
    max-height: 150px;
  `}
`

const wrapperModifiers = {
  selected: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

type ItemProps = {
  selected: boolean
}

export const Item = styled.div<ItemProps>`
  ${({ theme, selected }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;
    padding: 5px;

    ${selected && wrapperModifiers.selected(theme)}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    & div:not(:first-child) {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const Tags = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    border-radius: 20px;
    justify-content: space-between;
    align-content: center;
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    > span {
      color: ${theme.colors.black};
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
