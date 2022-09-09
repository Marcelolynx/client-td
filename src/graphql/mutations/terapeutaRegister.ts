import { gql } from '@apollo/client'

export type TTerapeutaRegisterData = {
  data: {
    id: number
  }
}

export type TTerapeutaRegisterVariables = {
  nome: string
  email: string
  telefone: string
  especialidade: string
  senha: string
}

export const MUTATION_TERAPEUTA_REGISTER = gql`
  mutation TerapeutaRegister(
    $nome: String!
    $email: String!
    $telefone: String!
    $especialidade: ENUM_TERAPEUTA_ESPECIALIDADE!
    $senha: String!
  ) {
    createTerapeuta(
      data: {
        nome: $nome
        email: $email
        telefone: $telefone
        especialidade: $especialidade
        senha: $senha
      }
    ) {
      data {
        id
      }
    }
  }
`
