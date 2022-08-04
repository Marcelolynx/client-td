import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  height: 516px;
  background-image: url('/img/Background-Hero.jpg');
  margin: 0 auto;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
`
export const ContentCard = styled.div`
  width: 250px;
  margin-top: -130px;
  margin-left: 250px;
  z-index: ${theme.layers.overlay};
`
export const ContentPreco = styled.div`
  width: 138px;
  margin-top: -540px;
  margin-left: 520px;
  z-index: ${theme.layers.overlay};
`

export const Illustration = styled.img`
  width: 400px;
  height: 576px;
  margin-top: -25px;
`

export const CartaoImg = styled.img`
  width: 250px;
  height: 155px;
  z-index: ${theme.layers.overlay};
`

export const Preco = styled.img`
  width: 138px;
  height: 210px;
  z-index: ${theme.layers.overlay};
`

export const TextHero = styled.div`
  text-align: left;
  margin-left: 25px;
  margin-top: 50px;

  h1 {
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    line-height: 100%;
    margin-bottom: 20px;
  }

  h2 {
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    font-weight: 300;
    line-height: 100%;
  }

  p {
    margin-top: 20px;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    font-weight: 300;
    line-height: 150%;
  }
`

export const ButtonHero = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
  input {
    width: 350px;
    height: 50px;
    border: none;
    padding: 20px;
    border-radius: 20px;
    background: ${theme.colors.white};
    color: black;
    position: absolute;
  }
`
export const Button = styled.button`
  width: 150px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 20px;
  height: 44px;
  border: none;
  margin: 0 5px;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: ${theme.font.sizes.medium};
  cursor: pointer;
  position: relative;
`
