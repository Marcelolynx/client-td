import { InMemoryCache } from '@apollo/client'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        profissionais: {
          keyArgs: ['filters'],
          merge(existing, incoming) {
            if (!existing) return incoming

            return {
              data: [...existing.data, ...incoming.data],
              meta: incoming.meta
            }
          }
        }
      }
    }
  }
})
