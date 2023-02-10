export const numberFormatter = (input: number = 0, type?: 'billion' | 'IDR') => {
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

  if (type) {
    if (stringValue[0] === '-') {
      if (stringValue[1] === '.') {
        const updatedString = stringValue.slice(2, stringValue.length)
        return `-${type === 'IDR' ? 'IDR ' : ''} ${updatedString} ${type === 'billion' ? 'B' : ''}`
      }
      const updatedString = stringValue.slice(1, stringValue.length)
      return `-${type === 'IDR' ? 'IDR ' : ''} ${updatedString} ${type === 'billion' ? 'B' : ''}`
    }
    return `${type === 'IDR' ? 'IDR ' : ''} ${stringValue} ${type === 'billion' ? 'B' : ''}`
  }

  return `${stringValue}`
}
