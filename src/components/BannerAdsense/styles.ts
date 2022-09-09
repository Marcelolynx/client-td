import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 768px;
  height: 90px;
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
