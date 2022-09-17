import { gql } from '@apollo/client'

export type TUserRegisterData = {
  jwt: string
}

export type TUserRegisterVariables = {
  username: string
  email: string
  password: string
}

export const USER_REGISTER = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
    }
  }
`
