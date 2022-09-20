import styled from 'styled-components'

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
  height: 600px;
  max-width: 450px;
`

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 100%;
  width: 100%;

  h1 {
    font-size: 22px;
  }

  p {
    margin-top: 8px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.div`
  cursor: pointer;
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
    color: ${({ theme }) => theme.colors.gray.light};
  }
`
