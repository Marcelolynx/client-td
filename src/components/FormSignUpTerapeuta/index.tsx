import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { Telephone } from '@styled-icons/bootstrap/Telephone'
import { RibbonStar } from '@styled-icons/fluentui-system-filled/RibbonStar'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FormLink, FormWrapper } from 'components/Form'

const FormSignUpTerapeuta = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Nome"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        name="Telefone"
        placeholder="Telefone"
        type="telefone"
        icon={<Telephone />}
      />
      <TextField
        name="especialidade"
        placeholder="Especialidade Principal"
        type="especialidade"
        icon={<RibbonStar />}
      />

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
      <TextField
        name="confirm-password"
        placeholder="Confirme a senha"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Cadastrar Agora!
      </Button>

      <FormLink>
        Já possui uma conta?{' '}
        <Link href="/sign-in">
          <a>Login</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUpTerapeuta
