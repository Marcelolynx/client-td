import * as S from './styles'

const Hero = () => {
  return (
    <S.Wrapper>
      <S.TextHero>
        <h1>
          Terapias <br />
          integrativas
        </h1>
        <h2>
          com descontos <br />
          nas consultas
        </h2>
        <p>
          faça seu cartão e obtenha
          <br /> acesso aos melhores terapeutas com
          <br /> valores reduzidos.
        </p>
        <S.ButtonHero>
          <input
            type="text"
            name="pesquisa"
            placeholder="O que você procura?"
          />
          <S.Button>Iniciar</S.Button>
        </S.ButtonHero>
      </S.TextHero>
      <div>
        <S.Illustration
          src="/img/familia-1.png"
          alt="Um desenvolvedor de frente para uma tela com código."
        />
        <S.ContentCard>
          <S.CartaoImg
            src="/img/cartao.png"
            alt="Um desenvolvedor de frente para uma tela com código."
          />
        </S.ContentCard>
        <S.ContentPreco>
          <S.Preco
            src="/img/preco.png"
            alt="Um desenvolvedor de frente para uma tela com código."
          />
        </S.ContentPreco>
      </div>
    </S.Wrapper>
  )
}

export default Hero
