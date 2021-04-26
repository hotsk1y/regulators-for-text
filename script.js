const textItems = document.querySelector('.items')
const fontSizeInput = document.querySelector('#fontSize')
const fontColorInput = document.querySelector('#color')
const fontWeightInput = document.querySelector('#fontWeight')
const fontStyletInput = document.querySelector('#fontStyle')
const letterSpacingInput = document.querySelector('#letterSpacing')
const lineHeightInput = document.querySelector('#lineHeight')
const resetButton = document.querySelector('#reset')
const inputControls = document.querySelectorAll('.inputControl')

const setDefaultSettings = () => {
  data = {
    fontSize: '14px',
    color: '#000000',
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: '0px',
    lineHeight: '14px'
  }
  localStorage.setItem('fontControls', JSON.stringify(data))
  return data
}

const getLocalStorageData = () => {
  try {
    data = JSON.parse(localStorage.getItem('fontControls'))
    if (data == null) {
      setDefaultSettings()
    }
  } catch (error) {
    console.log(error)
  }
  return data
}
data = getLocalStorageData()

const setFontSettings = () => {
  textItems.style.fontSize = data.fontSize
  fontSizeInput.value = data.fontSize.replace('px', '')
  textItems.style.color = data.color
  fontColorInput.value = data.color
  textItems.style.fontWeight = data.fontWeight
  fontWeightInput.value = data.fontWeight
  textItems.style.fontStyle = data.fontStyle
  fontStyletInput.value = data.fontStyle
  textItems.style.letterSpacing = data.letterSpacing
  letterSpacingInput.value = data.letterSpacing.replace('px', '')
  textItems.style.lineHeight = data.lineHeight
  lineHeightInput.value = data.lineHeight.replace('px', '')
}

// track changes of each control
for (let i = 0; i < inputControls.length; i++) {
  const styleValue = inputControls[i].id
  inputControls[i].addEventListener('change', event => {
    if (inputControls[i].dataset.type === 'pixel') {
      data[styleValue] = `${event.target.value}px`
    } else {
      data[styleValue] = event.target.value
    }
    localStorage.setItem('fontControls', JSON.stringify(data))
    textItems.style[styleValue] = data[styleValue]
  })
}

// reset font styles
resetButton.addEventListener('click', (event) => {
  setDefaultSettings()
  setFontSettings()
})

setFontSettings()