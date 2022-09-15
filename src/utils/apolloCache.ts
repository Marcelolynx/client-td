import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        profissionais: concatPagination(['where', 'sort'])
      }
    },
    Wishlist: {
      fields: {
        profissionais: {
          merge(_, incoming) {
            return incoming
          }
        }
      }
    }
  }
})
