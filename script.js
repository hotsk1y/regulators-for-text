const textItems = document.querySelector('.items')
const fontSizeInput = document.querySelector('#font-size')
const fontColorInput = document.querySelector('#font-color')
const fontWeightInput = document.querySelector('#font-weight')
const fontStyletInput = document.querySelector('#font-style')
const letterSpacingInput = document.querySelector('#letter-spacing')
const lineHeightInput = document.querySelector('#line-height')
const resetButton = document.querySelector('#reset')

// set default data settings
const setDefaultSettings = () => {
  data = {
    size: '14px',
    color: '#000000',
    weight: 'normal',
    style: 'normal',
    letterSpacing: '0px',
    lineHeight: '14px'
  }
  localStorage.setItem('fontControls', JSON.stringify(data))
}

// get localstorage data
const getLocalStorageData = () => {
  data = JSON.parse(localStorage.getItem('fontControls'))
  if (data == null) {
    setDefaultSettings()
  }
  return data
}
getLocalStorageData()

// set font settings from localstorage
const setFontSettings = () => {
  textItems.style.fontSize = data.size
  fontSizeInput.value = data.size.replace('px', '')
  textItems.style.color = data.color
  fontColorInput.value = data.color
  textItems.style.fontWeight = data.weight
  if (fontWeightInput.options[0].value === data.weight) {
    fontWeightInput.options[0].selected = true
  }
  if (fontWeightInput.options[1].value === data.weight) {
    fontWeightInput.options[1].selected = true
  }
  if (fontWeightInput.options[2].value === data.weight) {
    fontWeightInput.options[2].selected = true
  }
  textItems.style.fontStyle = data.style
  if (fontStyletInput.options[0].value === data.style) {
    fontStyletInput.options[0].selected = true
  }
  if (fontStyletInput.options[1].value === data.style) {
    fontStyletInput.options[1].selected = true
  }
  textItems.style.letterSpacing = data.letterSpacing
  letterSpacingInput.value = data.letterSpacing.replace('px', '')
  textItems.style.lineHeight = data.lineHeight
  lineHeightInput.value = data.lineHeight.replace('px', '')
}

// set size value to localstorage and apply new settings
fontSizeInput.addEventListener('change', (event) => {
  const sizeValue = `${event.target.value}px`
  data.size = sizeValue
  localStorage.setItem('fontControls', JSON.stringify(data))
  textItems.style.fontSize = data.size
})

// set color value and apply new settings
fontColorInput.addEventListener('change', (event) => {
  const colorValue = event.target.value
  data.color = colorValue
  localStorage.setItem('fontControls', JSON.stringify(data))
  textItems.style.color = data.color
})

// set weight value and apply new settings
fontWeightInput.addEventListener('change', (event) => {
  const weightValue = fontWeightInput.value
  data.weight = weightValue
  localStorage.setItem('fontControls', JSON.stringify(data))
  textItems.style.fontWeight = data.weight
})

// set style value and apply new settings
fontStyletInput.addEventListener('change', (event) => {
  const styleValue = fontStyletInput.value
  data.style = styleValue
  localStorage.setItem('fontControls', JSON.stringify(data))
  textItems.style.fontStyle = data.style
})

// set letter-spacing value to localstorage and apply new settings
letterSpacingInput.addEventListener('change', (event) => {
  const letterSpacingValue = `${event.target.value}px`
  data.letterSpacing = letterSpacingValue
  localStorage.setItem('fontControls', JSON.stringify(data))
  textItems.style.letterSpacing = data.letterSpacing
})

// set line-height value to localstorage and apply new settings
lineHeightInput.addEventListener('change', (event) => {
  const lineHeightValue = `${event.target.value}px`
  data.lineHeight = lineHeightValue
  localStorage.setItem('fontControls', JSON.stringify(data))
  textItems.style.lineHeight = data.lineHeight
})

// reset font styles
resetButton.addEventListener('click', (event) => {
  setDefaultSettings()
  setFontSettings()
})

setFontSettings()