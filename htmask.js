function mask(value, maskPattern) {
  const pureValue = value.replace(/[^a-zA-Z0-9]/g, '')
  let masked = ''
  let digitIndex = 0

  const isDigit = (c) => /\d/.test(c)
  const isLetter = (c) => /[a-zA-Z]/.test(c)

  const isZero = (c) => c === '0'
  const isA = (c) => c === 'A'

  for (let char of maskPattern) {
    if (digitIndex >= pureValue.length) break;

    if (!isZero(char) && !isA(char)) {
      masked += char
      continue
    }

    if (isZero(char) && !isDigit(pureValue[digitIndex])) break;
    if (isA(char) && !isLetter(pureValue[digitIndex])) break;

    masked += pureValue[digitIndex++]
  }

  return masked
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach(input => {
    const inputMask = input.getAttribute('mask')
    if (inputMask === null) return

    input.maxLength = inputMask.length

    input.addEventListener('input', (i) => {
      i.target.value = mask(i.target.value, inputMask)
    })
  })
})
