import { gql } from '@apollo/client'

export type TAssociadoRegisterData = {
  data: {
    id: number
  }
}

export type TAssociadoRegisterVariables = {
  nomeCompleto: string
  email: string
  password: string
}

export const MUTATION_ASSOCIADO_REGISTER = gql`
  mutation AssociadoRegister(
    $nomeCompleto: String!
    $email: String!
    $password: String!
  ) {
    createAssossiado(
      data: { nomeCompleto: $nomeCompleto, email: $email, password: $password }
    ) {
      data {
        id
      }
    }
  }
`
