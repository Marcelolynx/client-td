import React, { useState } from 'react'
import Link from 'next/link'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FormError, FormLink, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FieldErrors, signInValidate } from 'utils/validations'

import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState({ email: '', password: '' })
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInput = (field: string, value: string) => {
    setFormError('')
    setFieldError({})
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Senha"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
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
}

export default FormSignIn
