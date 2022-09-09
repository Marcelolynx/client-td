import Joi from 'joi'

export interface UsersPermissionsRegisterInput {
  name: string
  email: string
  password: string
  specialtie: string
  phone: string
}

export type FieldErrors = {
  [key: string]: string
}

const fieldsValidations = {
  name: Joi.string().min(5).required().messages({
    'string.empty': `Favor preencher um nome válido`,
    'any.required': `Favor preencher um nome válido`,
    'string.min': `Favor preencher um nome válido`
  }),
  phone: Joi.string().min(11).messages({
    'string.empty': `Favor preencher um telefone válido`,
    'any.required': `Favor preencher um telefone válido`,
    'string.min': `Favor preencher um telefone válido`
  }),
  specialtie: Joi.string(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Preencha com um e-mail válido',
      'string.empty': `Favor preencher um e-mail válido`,
      'any.required': `Favor preencher um e-mail válido`
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': `Favor preencher uma senha válida`,
      'string.min': `A senha deve conter no mínimo 8 caracteres`,
      'any.required': `Favor preencher uma senha válida`,
      'string.pattern.base': `A senha fornecida não atende os requisitos mínimos de segurança. Mínimo de 8 caracteres e adicione ao menos um caractere especial`
    })
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Por favor, valide a sua senha',
      'string.empty': `Favor preencher com a mesma senha utilizada anteriormente`,
      'any.required': `Favor preencher com a mesma senha utilizada anteriormente`
    })
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'name'>
export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signUpValidate(
  values: Omit<UsersPermissionsRegisterInput, 'specialtie' | 'phone'>
) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signUpTerapeutaValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
