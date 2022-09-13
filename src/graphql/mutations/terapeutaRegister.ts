import { gql } from '@apollo/client'
import { TOption } from 'components/Dropdown'

export type TTerapeutaRegisterData = {
  data: {
    id: number
  }
}

export type TTerapeutaRegisterVariables = {
  nome: string
  email: string
  telefone: string
  especialidades: TOption[]
  senha: string
}

export const MUTATION_TERAPEUTA_REGISTER = gql`
  mutation TerapeutaRegister(
    $nome: String!
    $email: String!
    $telefone: String!
    $especialidades: JSON!
    $senha: String!
  ) {
    createTerapeuta(
      data: {
        nome: $nome
        email: $email
        telefone: $telefone
        especialidades: $especialidades
        senha: $senha
      }
    ) {
      data {
        id
      }
    }
  }
`
