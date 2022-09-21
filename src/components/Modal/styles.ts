import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerWrapper = styled.div`
  ${media.greaterThan('medium')`
    height: 800px;
    min-width: 600px;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 100%;
    width: 100%;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      position: fixed;
      z-index: ${theme.layers.menu};
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      overflow: hidden;
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    `}
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.div`
  position: relative;
  top: 0;
  right: 0;
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray};
  }
`
