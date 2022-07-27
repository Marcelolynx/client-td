import * as S from './styles'

const Sobre = () => {
  return (
    <S.Wrapper>
      <S.Illustration
        src="/img/Imagem-home-01.jpg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
      <S.TextBeneficios>
        <span>
          O aque é o <br />
          Terapia de Todos?
        </span>
        <h3>
          É o cartão que da acesso ao maior Clube de Benefícios do Brasil
          <br />e oferece benefícios de descontos progressivos conforme a<br />
          quantidade de dependentes na sua familia.
        </h3>
      </S.TextBeneficios>
    </S.Wrapper>
  )
}

export default Sobre
