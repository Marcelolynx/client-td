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
import { OtherSpecialties } from 'utils/constants'

export type TFormSignUpTerapeuta = {
  options: TOption[]
}

const FormSignUpTerapeuta = ({ options }: TFormSignUpTerapeuta) => {
  const [formError, setFormError] = useState('')
  const [showOtherSpecialtieField, setShowOtherSpecialtieField] =
    useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [otherSpecialtie, setOtherSpecialtie] = useState<TOption>({
    label: '',
    value: ''
  })
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    name: '',
    email: '',
    password: '',
    specialtie: [],
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

  const checkOtherIsEnabled = (option: TOption[]): boolean => {
    let otherIsShown = false
    option.forEach((o) => {
      if (o.value === OtherSpecialties.toLowerCase()) otherIsShown = true
    })

    return otherIsShown
  }

  const handleInput = (field: string, value: string) => {
    setFormError('')
    setFieldError({})
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleOtherSpecialtieField = (): void => {
    setOtherSpecialtie({
      label: '',
      value: ''
    })
    setShowOtherSpecialtieField(false)
  }

  const handleDropdown = (option: TOption[]) => {
    if (checkOtherIsEnabled(option)) setShowOtherSpecialtieField(true)

    setFormError('')
    setValues((s) => ({ ...s, specialtie: option }))
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

    const reduceSpecialties =
      otherSpecialtie.value.length > 1
        ? values.specialtie
            .reduce(
              (result, specialtie) => {
                return specialtie.value !== OtherSpecialties.toLowerCase()
                  ? {
                      ...result,
                      specialties: [...result.specialties, specialtie]
                    }
                  : { ...result }
              },
              { specialties: [] as TOption[] }
            )
            .specialties.concat(otherSpecialtie)
        : values.specialtie

    createTerapeuta({
      variables: {
        email: values.email,
        nome: values.name,
        senha: values.password,
        especialidades: reduceSpecialties,
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
          error={fieldError?.specialtie}
          onDropdownChange={(v) => handleDropdown(v)}
          handleOtherSpecialtieField={handleOtherSpecialtieField}
        />
        {showOtherSpecialtieField && (
          <div style={{ paddingTop: '8px' }}>
            <TextField
              name="specialtie"
              placeholder="Outra especialidade"
              type="text"
              onInputChange={(v) =>
                setOtherSpecialtie({ value: v.toLowerCase(), label: v })
              }
            />
          </div>
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
