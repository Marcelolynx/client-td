import { Download } from '@styled-icons/boxicons-solid/Download'
import * as S from './styles'

export type paymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type ListItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: paymentInfoProps
}
const ListItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: ListItemProps) => (
  <S.Wrapper>
    <S.ListContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.ListContent>
    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default ListItem
