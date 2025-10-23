function mask(value, maskPattern, autoAdvance) {
  if (!value || !maskPattern) return { maskedValue: "", advanced: false }

  const pureValue = value.replace(/[^a-zA-Z0-9]/g, '')
  let maskedValue = ''
  let valueIdx = 0
  let advanced = false

  for (let i = 0; i < maskPattern.length; i++) {
    if (valueIdx >= pureValue.length) break;

    const inputChar = pureValue[valueIdx]

    if (maskPattern[i] !== '0' && maskPattern[i] !== 'A') {
      maskedValue += maskPattern[i]
      continue
    }

    if (maskPattern[i] === '0' && !/\d/.test(inputChar)) break;
    if (maskPattern[i] === 'A' && !/[a-zA-Z]/.test(inputChar)) break;

    maskedValue += pureValue[valueIdx++]

    let nextChar = maskPattern[i + 1]

    if (autoAdvance && nextChar && nextChar !== '0' && nextChar !== 'A') {
      advanced = true
      maskedValue += nextChar
      i++
    }
  }

  return { maskedValue, advanced }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[mask]').forEach(input => {
    const maskPattern = input.getAttribute('mask')
    const autoAdvance = input.getAttribute('mask-auto-advance')

    input.maxLength = maskPattern.length

    const applyMask = (event) => {
      let cursorPos = event.target.selectionStart

      const { maskedValue, advanced } = mask(event.target.value, maskPattern, autoAdvance)
      event.target.value = maskedValue

      let inCursorPos = maskedValue[cursorPos - 1]

      if (advanced && event.data && maskPattern[cursorPos] != '0' && maskPattern[cursorPos] != 'A') {
        cursorPos++
      }

      if (event.data && maskedValue.length > cursorPos) {
        while (!/\d/.test(inCursorPos) && !/[a-zA-Z]/.test(inCursorPos)) {
          inCursorPos = maskedValue[cursorPos - 1]
          cursorPos++
        }
      }

      event.target.setSelectionRange(cursorPos, cursorPos)
    }

    input.addEventListener("input", applyMask)
    input.addEventListener("paste", applyMask)
  })
})
