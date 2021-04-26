const textItems = document.querySelector('.items')
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