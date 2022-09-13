import { useState } from 'react'
import Link from 'next/link'
<<<<<<< HEAD
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { Location } from '@styled-icons/entypo/Location'
=======
import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline
} from '@styled-icons/material-outlined'
>>>>>>> 01ccf356589c5fea474ddad276fcce2188420612

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form'
import {
  FieldErrors,
  signUpValidate,
  UsersPermissionsRegisterInput
} from 'utils/validations'
import {
  MUTATION_ASSOCIADO_REGISTER,
  TAssociadoRegisterData,
  TAssociadoRegisterVariables
} from 'graphql/mutations/associadoRegister'
import { useMutation } from '@apollo/client'

<<<<<<< HEAD
import * as S from './styles'
import { FormLink, FormWrapper } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Nome"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="localidade"
        placeholder="Localidade"
        type="localidade"
        icon={<Location />}
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
=======
type TFormSignUp = Omit<UsersPermissionsRegisterInput, 'specialtie' | 'phone'>

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<TFormSignUp>({
    name: '',
    email: '',
    password: ''
  })

  const [createAssociado, { loading }] = useMutation<
    TAssociadoRegisterData,
    TAssociadoRegisterVariables
  >(MUTATION_ASSOCIADO_REGISTER, {
    onError: () =>
      setFormError(
        'Erro ao criar a conta. Por favor, tente novamente mais tarde.'
      ),
    onCompleted: () => {
      alert('User criado com sucesso!')
    }
  })

  const handleInput = (field: string, value: string) => {
    setFormError('')
    setFieldError({})
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createAssociado({
      variables: {
        email: values.email,
        nomeCompleto: values.name,
        password: values.password
      }
    })
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          name="name"
          placeholder="Nome"
          type="text"
          error={fieldError?.name}
          onInputChange={(v) => handleInput('name', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="text"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirme a senha"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Cadastrar Agora!</span>}
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
}
>>>>>>> 01ccf356589c5fea474ddad276fcce2188420612

export default FormSignUp
