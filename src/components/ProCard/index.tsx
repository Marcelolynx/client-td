import * as S from './styles'
import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite
} from '@styled-icons/material-outlined'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'

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
  onFav
}: ProCardProps) => (
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
        {!!promotionalPrice && <S.Price isPromotional>{price}/vh</S.Price>}
        <p>Valor Hora</p>
        <S.Price>{promotionalPrice || price}/vh</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default ProCard
