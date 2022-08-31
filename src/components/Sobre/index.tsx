import * as S from './styles'

const Sobre = () => {
  return (
    <S.Wrapper>
      <S.Illustration
        src="/img/Imagem-home-01.jpg"
        alt="uma sessao de terapia sendo realizada"
      />
      <S.About>
        <S.Title>O que é o Terapia de Todos?</S.Title>
        <S.Description>
          É o cartão que da acesso ao maior Clube de Benefícios do Brasil
          <br />e oferece benefícios de descontos progressivos conforme a<br />
          quantidade de dependentes na sua familia.
        </S.Description>
      </S.About>
    </S.Wrapper>
  )
}

export default Sobre
