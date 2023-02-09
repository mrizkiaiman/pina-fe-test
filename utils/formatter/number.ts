export const numberFormatter = (input: number = 0, isBillion?: boolean) => {
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

  if (isBillion) {
    if (stringValue[0] === '-') {
      if (stringValue[1] === '.') {
        const updatedString = stringValue.slice(2, stringValue.length)
        return `-${updatedString} B`
      }
      const updatedString = stringValue.slice(1, stringValue.length)
      return `-${updatedString} B`
    }

    return `${stringValue} B`
  }

  return `${stringValue}`
}
