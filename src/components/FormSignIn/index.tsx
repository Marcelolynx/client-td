import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import { useRouter } from 'next/router'

import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FieldErrors, signInValidate } from 'utils/validations'

import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({ email: '', password: '' })
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setFormError('')
    setFieldError({})
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/home'
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    setFormError('Erro - Favor verificar suas credenciais')
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

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Login</span>}
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
