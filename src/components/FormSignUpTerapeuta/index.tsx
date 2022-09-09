import Link from 'next/link'
import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline
} from '@styled-icons/material-outlined'
import { Telephone } from '@styled-icons/bootstrap/Telephone'
import { RibbonStar } from '@styled-icons/fluentui-system-filled/RibbonStar'
import { useMutation } from '@apollo/client'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form'
import { useState } from 'react'
import {
  FieldErrors,
  signUpTerapeutaValidate,
  UsersPermissionsRegisterInput
} from 'utils/validations'
import {
  MUTATION_TERAPEUTA_REGISTER,
  TTerapeutaRegisterData,
  TTerapeutaRegisterVariables
} from 'graphql/mutations/terapeutaRegister'
import Dropdown, { TOption } from 'components/Dropdown'
import { formatToNumber } from 'utils/formatters'

export type TFormSignUpTerapeuta = {
  options: TOption[]
}

const OtherSpecialties = 'Outro'

const FormSignUpTerapeuta = ({ options }: TFormSignUpTerapeuta) => {
  const [formError, setFormError] = useState('')
  const [showOtherSpecialtieField, setShowOtherSpecialtieField] =
    useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    name: '',
    email: '',
    password: '',
    specialtie: '',
    phone: ''
  })

  const [createTerapeuta, { loading }] = useMutation<
    TTerapeutaRegisterData,
    TTerapeutaRegisterVariables
  >(MUTATION_TERAPEUTA_REGISTER, {
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

  const handleDropdown = (value: string) => {
    value === OtherSpecialties.toLowerCase()
      ? setShowOtherSpecialtieField(true)
      : setShowOtherSpecialtieField(false)
    setValues((s) => ({ ...s, specialtie: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpTerapeutaValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createTerapeuta({
      variables: {
        email: values.email,
        nome: values.name,
        senha: values.password,
        especialidade: values.specialtie,
        telefone: values.phone
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
          name="Telefone"
          placeholder="Telefone"
          type="text"
          formatPhone
          error={fieldError?.phone}
          onInputChange={(v) => handleInput('phone', formatToNumber(v))}
          icon={<Telephone />}
        />
        <Dropdown
          icon={<RibbonStar />}
          options={options}
          onDropdownChange={(v) => handleDropdown(v)}
        />
        {showOtherSpecialtieField && (
          <TextField
            name="specialtie"
            placeholder="Especialidade"
            type="text"
            onInputChange={(v) => handleInput('specialtie', v)}
          />
        )}
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

export default FormSignUpTerapeuta
