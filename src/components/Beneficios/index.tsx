import Sobre from 'components/Sobre'
import * as S from './styles'

const Beneficios = () => {
  return (
    <S.Wrapper>
      <S.Illustration
        src="/img/Imagem-home-02.jpg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
      <S.Textfield>
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
        <button>Adquira já o seu</button>
      </S.Textfield>
    </S.Wrapper>
  )
}

export default Beneficios
