import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { Telephone } from '@styled-icons/bootstrap/Telephone'
import { RibbonStar } from '@styled-icons/fluentui-system-filled/RibbonStar'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormLink, FormWrapper } from 'components/Form'
import { useState } from 'react'
import { FieldErrors, UsersPermissionsRegisterInput } from 'utils/validations'
import {
  MUTATION_TERAPEUTA_REGISTER,
  TAssociadoRegisterData,
  TTerapeutaRegisterVariables
} from 'graphql/mutations/terapeutaRegister'
import { useMutation } from '@apollo/client'

const FormSignUpTerapeuta = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    name: '',
    email: '',
    password: ''
  })

  // const [createAssociado, { loading }] = useMutation<
  //   TAssociadoRegisterData,
  //   TTerapeutaRegisterVariables
  // >(MUTATION_TERAPEUTA_REGISTER, {
  //   onError: () =>
  //     setFormError(
  //       'Erro ao criar a conta. Por favor, tente novamente mais tarde.'
  //     ),
  //   onCompleted: () => {
  //     alert('User criado com sucesso!')
  //   }
  // })

  // const handleInput = (field: string, value: string) => {
  //   setFormError('')
  //   setFieldError({})
  //   setValues((s) => ({ ...s, [field]: value }))
  // }

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault()
  //   setFormError('')

  //   const errors = signUpValidate(values)

  //   if (Object.keys(errors).length) {
  //     setFieldError(errors)
  //     return
  //   }

  //   setFieldError({})

  //   createAssociado({
  //     variables: {
  //       email: values.email,
  //       nomeCompleto: values.name,
  //       password: values.password
  //     }
  //   })
  // }

  return (
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
}

export default FormSignUpTerapeuta
