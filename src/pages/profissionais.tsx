import { GetServerSidePropsContext } from 'next'

import ProfissionaisTemplate, {
  ProfissionaisTemplateProps
} from 'templates/Profissionais'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import {
  QueryProfessionals,
  QueryProfessionalsVariables,
  QUERY_PROFESSIONALS
} from 'graphql/queries/professionals'

export default function ProfissionaisPage(props: ProfissionaisTemplateProps) {
  return <ProfissionaisTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryProfessionals, QueryProfessionalsVariables>({
    query: QUERY_PROFESSIONALS,
    variables: {
      pagination: {
        limit: 1
      }
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
