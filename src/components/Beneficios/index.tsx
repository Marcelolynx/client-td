import * as S from './styles'

const Beneficios = () => {
  return (
    <S.Wrapper>
      <S.Illustration
        src="/img/Imagem-home-02.jpg"
        alt="alguem segurando um cartao do terapia de todos"
      />
      <S.BenefitsContainer>
        <S.ContentInfo>
          <S.Icons src="/img/icons/star.png" alt="icone de uma estrela" />
          <p>Desconto em consultas presenciais e online</p>
        </S.ContentInfo>
        <S.ContentInfo>
          <S.Icons src="/img/icons/descontos.png" alt="icone de um cifrão" />
          <p>Desconto em medicamentos</p>
        </S.ContentInfo>
        <S.ContentInfo>
          <S.Icons src="/img/icons/heart.png" alt="icone de uma estrela" />
          <p>Inclua dependentes</p>
        </S.ContentInfo>
        <S.Button>Adquira já o seu</S.Button>
      </S.BenefitsContainer>
    </S.Wrapper>
  )
}

export default Beneficios
