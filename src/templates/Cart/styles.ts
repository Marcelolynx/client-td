import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 20px;
  `}
`

export const Content = styled.div``

export const Recomended = styled.div``
