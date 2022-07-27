import * as S from './styles'
import { Dice1 } from '@styled-icons/bootstrap/Dice1'
import { Check2 } from '@styled-icons/bootstrap/Check2'
import { Dice2 } from '@styled-icons/bootstrap/Dice2'
import Button from 'components/Button'

const Cta = () => {
  return (
    <S.Wrapper>
      <S.TextCta>Nossos planos são ideais para você!</S.TextCta>
      <S.TextVantagens>
        Tem dependentes? inclua sua familia
        <br /> e ganhe descontos ainda maiores.
      </S.TextVantagens>
      <S.Textterapeutas>
        Tenha acesso a terapeutas pertinho de você.
        <br /> Consultas presenciais e online.
      </S.Textterapeutas>

      <S.InfoPrice>
        <S.ValorMensal> valor mensal</S.ValorMensal>
        <div>valor anual (10% de desconto)</div>{' '}
      </S.InfoPrice>

      <S.ContainerCard>
        <S.BoxCard>
          <S.SingleCard>
            <div className="pricebox">
              <div className="BoxIcon">
                <Dice1 className="iconCard" />
              </div>
              <span>
                Single
                <br />
                R$19,90 / mês
              </span>
            </div>
            <S.BoxList>
              <ul>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>Consultas presenciais e online</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>A Partir de 30% de desconto</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>Descontos em medicamentos</p>
                  </S.RowItem>
                </li>
              </ul>
            </S.BoxList>
            <S.Button> Assine agora</S.Button>
          </S.SingleCard>

          <S.FamilyCard>
            <div className="pricebox">
              <div className="BoxIcon">
                <Dice2 className="iconCard" />
              </div>
              <span>
                Family
                <br />
                R$39,90 / mês
              </span>
            </div>
            <S.BoxList>
              <ul>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>Consultas presenciais e online</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>A Partir de 30% de Desconto</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>Descontos em medicamentos</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>Dependentes diretos da mesma casa</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>01 Consulta gratís ao ano</p>
                  </S.RowItem>
                </li>
              </ul>
            </S.BoxList>
            <S.ButtonWhite> Assine agora</S.ButtonWhite>
          </S.FamilyCard>

          <S.SingleCard>
            <div className="pricebox">
              <div className="BoxIcon">
                <Dice2 className="iconCard" />
              </div>
              <span>
                Super Family
                <br />
                R$39,90 / mês
              </span>
            </div>
            <S.BoxList>
              <ul>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>Todas as vantagesn da Family</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>A Partir de 35% de desconto</p>
                  </S.RowItem>
                </li>
                <li>
                  <S.RowItem>
                    <Check2 className="icon" />
                    <p>Dependentes diretos e indiretos</p>
                  </S.RowItem>
                </li>
              </ul>
            </S.BoxList>
            <S.Button> Assine agora</S.Button>
          </S.SingleCard>
        </S.BoxCard>
      </S.ContainerCard>
    </S.Wrapper>
  )
}

export default Cta
