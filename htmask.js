function mask(value, maskPattern) {
  const pureValue = value.replace(/[^a-zA-Z0-9]/g, '')
  let masked = ''
  let digitIndex = 0

  for (let char of maskPattern) {
    if (digitIndex >= pureValue.length) break;

    let isDigit = /^[0]$/.test(char)
    let isLetter = /^[A]$/.test(char)

    if (!isDigit && !isLetter) {
      masked += char
      continue
    }

    masked += pureValue[digitIndex++]
  }

  return masked
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach(input => {
    const inputMask = input.getAttribute('mask')
    if (inputMask === null) return;

    input.setAttribute('maxlength', inputMask.length)

    input.addEventListener('input', (i) => {
      i.target.value = mask(i.target.value, inputMask)
    })
  })
})
