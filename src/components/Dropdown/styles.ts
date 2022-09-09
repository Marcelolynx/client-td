import styled, { css } from 'styled-components'

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
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DropdownMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    transform: translateY(4px);
    width: 100%;
    border: 1px solid #ccc;
    background: ${theme.colors.white};
    border-radius: 5px;
    overflow-x: auto;
    max-height: 150px;
  `}
`

export const Item = styled.div`
  cursor: pointer;
  padding: 5px;
`
