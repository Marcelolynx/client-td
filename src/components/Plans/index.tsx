import CardPrices, { TCardPrices } from 'components/CardPrices'
import * as S from './styles'

type TPlans = {
  plans: TCardPrices[]
}

const Plans = ({ plans }: TPlans) => {
  return (
    <S.Wrapper>
      <S.Title>Nossos planos são ideais para você!</S.Title>
      <S.Subtitle>
        Tem dependentes? Inclua sua familia e ganhe descontos ainda maiores.
      </S.Subtitle>
      <S.Description>
        Tenha acesso a terapeutas pertinho de você. Consultas presenciais e
        online.
      </S.Description>

      <S.ContainerCard>
        {plans.map((plan) => (
          <CardPrices key={plan.type} {...plan} />
        ))}
      </S.ContainerCard>
    </S.Wrapper>
  )
}

export default Plans
