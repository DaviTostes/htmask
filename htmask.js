function mask(value, maskPattern) {
  if (!value || !maskPattern) return ""

  const pureValue = value.replace(/[^a-zA-Z0-9]/g, '')
  let masked = ''
  let valueIdx = 0

  for (let maskChar of maskPattern) {
    if (valueIdx >= pureValue.length) break;

    const inputChar = pureValue[valueIdx]

    if (maskChar !== '0' && maskChar !== 'A') {
      masked += maskChar
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
    const maskPattern = input.getAttribute('mask')
    input.maxLength = maskPattern.length

    const applyMask = (event) => {
      let cursorPos = event.target.selectionStart

      const maskedValue = mask(event.target.value, maskPattern)
      event.target.value = maskedValue

      let inCursorPos = maskedValue[cursorPos - 1]

      if (event.data && maskedValue.length >= cursorPos) {
        while (!/\d/.test(inCursorPos) && !/[a-zA-Z]/.test(inCursorPos)) {
          cursorPos++
          inCursorPos = maskedValue[cursorPos - 1]
        }
      }

      event.target.setSelectionRange(cursorPos, cursorPos)
    }

    input.addEventListener("input", applyMask)
    input.addEventListener("paste", applyMask)
  })
})
