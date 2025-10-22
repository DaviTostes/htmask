function mask(value, maskPattern) {
  if (!value || !maskPattern) return

  const pureValue = value.replace(/[^a-zA-Z0-9]/g, '')
  let masked = ''
  let valueIdx = 0

  for (let maskChar of maskPattern) {
    if (valueIdx >= pureValue.length) break;

    const inputChar = pureValue[valueIdx]

    if (maskChar !== '0' && maskChar !== 'A') {
      masked += char
      continue
    }

    if (maskChar === '0' && !/\d/.test(inputChar)) break;
    if (maskChar === 'A' && !/[a-zA-Z]/.test(inputChar)) break;

    masked += pureValue[valueIdx++]
  }

  return masked
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[mask]').forEach(input => {
    const inputMask = input.getAttribute('mask')
    input.maxLength = inputMask.length

    input.addEventListener('input', (i) => {
      i.target.value = mask(i.target.value, inputMask)
    })
  })
})
