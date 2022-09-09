import VMasker from 'vanilla-masker'

export function formatToPattern(value: string, format: string) {
  return VMasker.toPattern(value ?? '', format)
}

export function formatToNumber(value: string) {
  return VMasker.toNumber(value ?? '')
}

export function formatPhoneNumber(phoneNumber: string, useDDD = false) {
  const phoneOnlyNumbers = formatToNumber(phoneNumber)
  let format = ''
  if (phoneOnlyNumbers.length === 9) {
    format = `${useDDD ? '(xx)' : '(99)'} 9 9999-9999`
  } else {
    format = '(99) 9 9999-9999'
  }

  return formatToPattern(phoneOnlyNumbers, format)
}
