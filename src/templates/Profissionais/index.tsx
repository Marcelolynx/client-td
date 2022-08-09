import Base from 'templates/Base'
import * as S from './styles'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ProCard, { ProCardProps } from 'components/ProCard/'
import { Grid } from 'components/Grid'

export type ProfissionaisTemplateProps = {
  profissionais?: ProCardProps[]
  filterItems: ItemProps[]
}

const ProfissionaisTemplate = ({
  filterItems,
  profissionais = []
}: ProfissionaisTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('filter')}
      />
      <section>
        <Grid>
          {profissionais.map((item) => (
            <ProCard key={item.title} {...item} />
          ))}
        </Grid>
        <S.ShowMore role="button" onClick={() => console.log('Show More')}>
          <p>Ver Mais</p>
          <ArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default ProfissionaisTemplate
