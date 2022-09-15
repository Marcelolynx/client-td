import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ProCard from 'components/ProCard/'
import { Grid } from 'components/Grid'
import BannerAdsense from 'components/BannerAdsense'
import { useQueryProfessionals } from 'graphql/queries/professionals'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

export type ProfissionaisTemplateProps = {
  filterItems: ItemProps[]
}

const ProfissionaisTemplate = ({ filterItems }: ProfissionaisTemplateProps) => {
  const {
    data: profissionais,
    loading,
    fetchMore
  } = useQueryProfessionals({
    notifyOnNetworkStatusChange: true,
    variables: {
      pagination: {
        limit: 2
      }
    }
  })

  if (!profissionais) return <p>loading...</p>

  const {
    data
    // meta: {
    //   pagination: { total }
    // }
  } = profissionais

  const hasMoreToLoad =
    profissionais.data?.length < (profissionais.meta?.pagination.total || 0)

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 12,
        pagination: { start: profissionais.data?.length }
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
                  {data.map(
                    ({
                      id,
                      attributes: {
                        name,
                        price,
                        short_description,
                        cover: {
                          data: { attributes }
                        }
                      }
                    }) => (
                      <ProCard
                        key={id}
                        description={short_description}
                        price={String(price)}
                        title={name}
                        img={`${getImageUrl(attributes!.url)}`}
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
      </S.Wrapper>
    </Base>
  )
}

export default ProfissionaisTemplate
