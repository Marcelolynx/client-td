import { Dice1 } from '@styled-icons/bootstrap/Dice1'
import { Check2 } from '@styled-icons/bootstrap/Check2'
import { Dice2 } from '@styled-icons/bootstrap/Dice2'
import Link from 'next/link'

import * as S from './styles'

export type TCardPrices = {
  type: string
  value: string
  planBenefits: string[]
  differentIcon: boolean
}

const CardPrices = ({
  type,
  value,
  planBenefits,
  differentIcon
}: TCardPrices) => {
  return (
    <S.BoxCard className="boxContainer">
      <S.SingleCard middleCard={differentIcon}>
        <div>
          <div className="pricebox">
            <div className="BoxIcon">
              {differentIcon ? (
                <Dice2 className="iconCard" />
              ) : (
                <Dice1 className="iconCard" />
              )}
            </div>
            <span>
              {type}
              <br />
              {value}
            </span>
          </div>
          <div>
            {planBenefits.map((benefit, index) => (
              <S.BoxList middleCard={differentIcon} key={index}>
                <ul>
                  <li>
                    <S.RowItem>
                      <Check2 className="icon" />
                      <p>{benefit}</p>
                    </S.RowItem>
                  </li>
                </ul>
              </S.BoxList>
            ))}
          </div>
        </div>
        <div>
          <Link href="/sign-up" passHref>
            <S.Button middleCard={differentIcon}>Assine agora</S.Button>
          </Link>
        </div>
      </S.SingleCard>
    </S.BoxCard>
  )
}

export default CardPrices
