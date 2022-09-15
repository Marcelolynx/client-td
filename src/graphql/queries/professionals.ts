import { gql, QueryHookOptions, useQuery } from '@apollo/client'

interface IPagination {
  page?: number | null
  pageSize?: number | null
  start?: number | null
  limit?: number | null
}

export interface Query_professional_cover {
  url: string
}

interface IAttributes {
  id: string
  attributes: {
    name: string
    slug: string
    price: number
    short_description: string
    cover: {
      data: {
        attributes: Query_professional_cover | null
      }
    }
  }
}

interface IMeta {
  pagination: {
    total: number
  }
}

export interface QueryProfessionals {
  meta: IMeta
  data: IAttributes[]
}

export interface QueryProfessionalsVariables {
  filters?: any | null
  pagination?: IPagination | null
  sort?: string[] | null
}

export const QUERY_PROFESSIONALS = gql`
  query Professionals(
    $sort: [String]
    $pagination: PaginationArg
    $filters: ProfissionalFiltersInput
  ) {
    profissionais(sort: $sort, pagination: $pagination, filters: $filters) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          name
          slug
          price
          short_description
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export function useQueryProfessionals(
  options?: QueryHookOptions<QueryProfessionals, QueryProfessionalsVariables>
) {
  return useQuery<QueryProfessionals, QueryProfessionalsVariables>(
    QUERY_PROFESSIONALS,
    options
  )
}
