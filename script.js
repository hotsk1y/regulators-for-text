const textItems = document.querySelector('.items')
const resetButton = document.querySelector('#reset')
const inputControls = document.querySelectorAll('.inputControl')

const defaultStyles = {
  fontSize: '14px',
  color: '#000000',
  fontWeight: 'normal',
  fontStyle: 'normal',
  letterSpacing: '0px',
  lineHeight: '14px'
}

const getLocalStorageData = (defaultData) => {  
  const str = localStorage.getItem('fontControls')
  try {
    return {
      ...defaultData,
      ...JSON.parse(str)
    }
  } catch (error) {
    return defaultData
  }
}
let data = getLocalStorageData(defaultStyles)

const setLocalStorageData = (newData) => {
  localStorage.setItem('fontControls', JSON.stringify(newData))
}

const setFontSettings = (styles) => {
  for (let i = 0; i < inputControls.length; i++) {
    const styleValue = inputControls[i].id
    if (inputControls[i].dataset.type === 'pixel') {
      inputControls[i].value = styles[styleValue].replace('px', '')
    } else {
      inputControls[i].value = styles[styleValue]
    }
    textItems.style[styleValue] = styles[styleValue]
  }
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
    setLocalStorageData(data)
    setFontSettings(data)
  })
}

// reset font styles
resetButton.addEventListener('click', (event) => {
  localStorage.setItem('fontControls', JSON.stringify(defaultStyles))
  setFontSettings(defaultStyles)
})

setFontSettings(data)