export const numberFormatter = (input: number = 0, isRupiah?: boolean) => {
  let result = ''
  let numberrev = input.toString().split('').reverse().join('')
  for (let i = 0; i < numberrev.length; i++) {
    if (i % 3 == 0) {
      result += numberrev.substr(i, 3) + '.'
    }
  }
  const stringValue = `${result
    .split('', result.length - 1)
    .reverse()
    .join('')}`

  if (isRupiah) {
    if (stringValue[0] === '-') {
      if (stringValue[1] === '.') {
        const updatedString = stringValue.slice(2, stringValue.length)
        return `- Rp. ${updatedString}`
      }
      const updatedString = stringValue.slice(1, stringValue.length)
      return `- Rp. ${updatedString}`
    }

    return `Rp. ${stringValue}`
  }

  return `${stringValue}`
}
