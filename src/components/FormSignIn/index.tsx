import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import { FormLink, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Login
      </Button>

      <FormLink>
        Ainda não possui cadastro?{' '}
        <Link href="/sign-up">
          <a>Cadastrar</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
