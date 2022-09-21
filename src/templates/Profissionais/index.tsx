import { useState } from 'react'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ProCard from 'components/ProCard/'
import { Grid } from 'components/Grid'
import BannerAdsense from 'components/BannerAdsense'
import { useQueryProfessionals } from 'graphql/queries/professionals'
import { getImageUrl } from 'utils/getImageUrl'
import { useModal } from 'contexts/ModalContext'
import Portal from 'components/Portal'
import Modal from 'components/Modal'

import * as S from './styles'
import ProfessionalModalContent from 'components/ProfessionalModalContent'

export type TModalContent = {
  name: string
  price?: number
  promotional_price?: number
  description?: string
  short_description?: string
  img: string
}

export type ProfissionaisTemplateProps = {
  filterItems: ItemProps[]
}

const ProfissionaisTemplate = ({ filterItems }: ProfissionaisTemplateProps) => {
  const { modalIsOpen, openModal } = useModal()
  const [modalInfo, setModalInfo] = useState<TModalContent>({
    img: '',
    name: ''
  })

  const handleOpenModal = (data: TModalContent): void => {
    setModalInfo(data)
    openModal()
  }

  const {
    data: professionals,
    loading,
    fetchMore
  } = useQueryProfessionals({
    notifyOnNetworkStatusChange: true,
    variables: {
      pagination: {
        start: 0,
        limit: 9
      }
    }
  })

  if (!professionals) return <p>Carregando...</p>

  const { data, meta } = professionals.profissionais

  const hasMoreToLoad = data?.length < (meta?.pagination.total || 0)

  const handleShowMore = () => {
    fetchMore({
      variables: {
        pagination: { limit: 9, start: data?.length }
      }
    })
  }

  return (
    <Base>
      <S.Wrapper>
        <S.Main>
          <ExploreSidebar
            items={filterItems}
            onFilter={() => console.log('filter')}
          />

          <section>
            <S.Banner>
              <BannerAdsense />
            </S.Banner>

            {data?.length ? (
              <>
                <Grid>
                  {data?.map(
                    ({
                      id,
                      attributes: {
                        name,
                        price,
                        description,
                        promotional_price,
                        short_description,
                        cover
                      }
                    }) => (
                      <ProCard
                        key={id}
                        shortDescription={short_description}
                        fullDescription={description}
                        price={price}
                        promotionalPrice={promotional_price}
                        title={name}
                        img={`${getImageUrl(cover?.data?.attributes!.url)}`}
                        onOpenDetails={(v) => handleOpenModal(v)}
                      />
                    )
                  )}
                </Grid>

                {hasMoreToLoad && (
                  <S.ShowMore>
                    {loading ? (
                      <S.ShowMoreLoading
                        src="/img/dots.svg"
                        alt="Loading more games..."
                      />
                    ) : (
                      <S.ShowMoreButton onClick={handleShowMore}>
                        <p>Ver Mais</p>
                        <ArrowDown size={35} />
                      </S.ShowMoreButton>
                    )}
                  </S.ShowMore>
                )}
              </>
            ) : null}
          </section>
        </S.Main>

        {modalIsOpen && (
          <Portal>
            <Modal content={<ProfessionalModalContent {...modalInfo} />} />
          </Portal>
        )}
      </S.Wrapper>
    </Base>
  )
}

export default ProfissionaisTemplate
