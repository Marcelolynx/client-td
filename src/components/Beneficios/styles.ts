import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  width: 1400px;
  height: 310px;
  display: flex;
  align-content: flex-start;
  color: ${theme.colors.primary};
  justify-content: start;
`

export const Illustration = styled.img`
  width: 525px;
  height: 310px;
`
export const Textfield = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  text-align: start;

  button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 10px;
    height: 60px;
    width: 250px;
    font-size: 26px;
    border-radius: 20px;
    margin: 25px;
    font-weight: bold;
    border: none;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
`

export const Icons = styled.img`
  height: 49px;
  width: 49px;
  margin: 0 10px 10px 0;
`
