import { FavoriteBorder, Favorite } from '@styled-icons/material-outlined'
import { Plus } from '@styled-icons/boxicons-regular/Plus'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'
import * as S from './styles'

export type ProCardProps = {
  title: string
  description: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
  onOpenDetails?: (value: string) => void
}

const ProCard = ({
  title,
  description,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'green',
  ribbonSize = 'small',
  onFav,
  onOpenDetails
}: ProCardProps) => {
  const onExpandProfessionalDetails = () => {
    !!onOpenDetails && onOpenDetails(title)
  }

  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.FavButton onClick={onFav} role="button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>R${price}</S.Price>}
          <p>Valor Hora</p>
          <S.Price>R${promotionalPrice || price}</S.Price>
          <Button
            icon={<Plus />}
            size="small"
            onClick={onExpandProfessionalDetails}
          />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProCard
