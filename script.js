const textItems = document.querySelector('.items')
const resetButton = document.querySelector('#reset')
const inputControls = document.querySelectorAll('.inputControl')

const getLocalStorageData = () => {
  try {
    data = JSON.parse(localStorage.getItem('fontControls'))
    if (data == null) {
      data = {
        fontSize: '14px',
        color: '#000000',
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: '0px',
        lineHeight: '14px'
      }
      localStorage.setItem('fontControls', JSON.stringify(data))
    }
  } catch (error) {
    console.log(error)
  }
  return data
}
getLocalStorageData()

const setLocalStorageData = (newData) => {
  localStorage.setItem('fontControls', JSON.stringify(newData))
}

const setFontSettings = () => {
  for (let i = 0; i < inputControls.length; i++) {
    const styleValue = inputControls[i].id
    if (inputControls[i].dataset.type === 'pixel') {
      inputControls[i].value = data[styleValue].replace('px', '')
    } else {
      inputControls[i].value = data[styleValue]
    }
    textItems.style[styleValue] = data[styleValue]
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
    textItems.style[styleValue] = data[styleValue]
  })
}

// reset font styles
resetButton.addEventListener('click', (event) => {
  data = {
    fontSize: '14px',
    color: '#000000',
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: '0px',
    lineHeight: '14px'
  }
  localStorage.setItem('fontControls', JSON.stringify(data))
  setFontSettings(data)
})

setFontSettings()