const item = document.querySelectorAll('.item')
const itemText = document.querySelectorAll('.item-text')
const localStorageItem = JSON.parse(localStorage.getItem('fontControls'))

let data = JSON.parse(localStorage.getItem('fontControls'))

const setDefauldData = (id) => {
  data = []
  localStorage.clear()
  for (let i = 0; i < item.length; i++) {
    const dataItem = {
      id: i,
      fontSize: '14px',
      fontColor: '#000',
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: '0px',
      lineHeight: '20px',
    }
    data.push(dataItem)
  }
  localStorage.setItem('fontControls', JSON.stringify(data))
}

if (data === null) {
  setDefauldData()
}

class Regulator {
  constructor() {

  }

  createFontSizeInput() {
    for (let i = 0; i < item.length; i++) {
      const fontSizeInput = document.createElement('input');
      const div = document.createElement('div');
      div.innerHTML = 'Font Size: '
      div.setAttribute('class', 'font-size')
      fontSizeInput.setAttribute('type', 'number');
      fontSizeInput.setAttribute('min', '8');
      fontSizeInput.setAttribute('max', '72');
      fontSizeInput.setAttribute('value', data[i].fontSize.replace('px', ''));
      itemText[i].style.fontSize = data[i].fontSize
      fontSizeInput.addEventListener('change', (event) => {
        const fontSize = `${event.target.value}px`
        itemText[i].style.fontSize = fontSize
        data[i].fontSize = fontSize
        localStorage.setItem('fontControls', JSON.stringify(data))
      })
      itemText[i].after(div)
      div.append(fontSizeInput)
    }
  }

  createFontColorInput() {
    for (let i = 0; i < item.length; i++) {
      const div = document.createElement('div');
      div.innerHTML = 'Color: '
      div.setAttribute('class', 'font-color')
      const fontColorInput = document.createElement('input');
      fontColorInput.setAttribute('type', 'color');
      fontColorInput.setAttribute('value', data[i].fontColor);
      itemText[i].style.color = data[i].fontColor
      fontColorInput.addEventListener('change', (event) => {
        itemText[i].style.color = event.target.value
        data[i].fontColor = event.target.value
        localStorage.setItem('fontControls', JSON.stringify(data))
      })
      itemText[i].after(div)
      div.append(fontColorInput)
    }
  }

  createFontWeightInput() {
    for (let i = 0; i < item.length; i++) {
      const div = document.createElement('div');
      div.innerHTML = 'Weight: '
      div.setAttribute('class', 'font-weight')

      const fontWeightInput = document.createElement('select');
      fontWeightInput.setAttribute('id', `fontWeight${i}`);
      itemText[i].style.fontWeight = data[i].fontWeight

      let thin = new Option('Thin', '100');
      fontWeightInput.append(thin);

      let normal = new Option('Normal', '400');
      fontWeightInput.append(normal);

      let bold = new Option('Bold', '900');
      fontWeightInput.append(bold);

      if (data[i].fontWeight == 900 || data[i].fontWeight === 'bold') {
        bold.selected = true
      }
      if (data[i].fontWeight == 400 || data[i].fontWeight === 'normal') {
        normal.selected = true
      }
      if (data[i].fontWeight == 100 || data[i].fontWeight === 'thin') {
        thin.selected = true
      }

      fontWeightInput.addEventListener('change', (event) => {
        itemText[i].style.fontWeight = event.target.value
        data[i].fontWeight = event.target.value
        localStorage.setItem('fontControls', JSON.stringify(data))
      })
      itemText[i].after(div)
      div.append(fontWeightInput)
    }

  }

  createFontStyleInput() {
    for (let i = 0; i < item.length; i++) {
      const div = document.createElement('div');
      div.innerHTML = 'Style: '
      div.setAttribute('class', 'font-style')

      const fontStyleInput = document.createElement('select');
      fontStyleInput.setAttribute('id', `fontStyle${i}`);
      itemText[i].style.fontStyle = data[i].fontStyle

      let normal = new Option('Normal', 'normal');
      fontStyleInput.append(normal);

      let italic = new Option('Italic', 'italic')
      fontStyleInput.append(italic);

      if (data[i].fontStyle == 'normal') {
        normal.selected = true
      } else {
        italic.selected = true
      }

      fontStyleInput.addEventListener('change', (event) => {
        itemText[i].style.fontStyle = event.target.value

        data[i].fontStyle = event.target.value
        localStorage.setItem('fontControls', JSON.stringify(data))
      })
      itemText[i].after(div)
      div.append(fontStyleInput)
    }
  }

  createLetterSpacingInput() {
    for (let i = 0; i < item.length; i++) {
      const div = document.createElement('div');
      div.innerHTML = 'Letter Spacing: '
      div.setAttribute('class', 'letter-spacing')

      const letterSpacingInput = document.createElement('input');
      itemText[i].style.letterSpacing = data[i].letterSpacing
      letterSpacingInput.setAttribute('value', data[i].letterSpacing.replace('px', ''));
      letterSpacingInput.setAttribute('type', 'number');
      letterSpacingInput.setAttribute('min', '0');
      letterSpacingInput.setAttribute('max', '72');
      letterSpacingInput.addEventListener('change', (event) => {
        itemText[i].style.letterSpacing = `${event.target.value}px`
        data[i].letterSpacing = `${event.target.value}px`
        localStorage.setItem('fontControls', JSON.stringify(data))
      })
      itemText[i].after(div)
      div.append(letterSpacingInput)
    }
  }

  createLineHeightInput() {
    for (let i = 0; i < item.length; i++) {
      const div = document.createElement('div');
      div.innerHTML = 'Line Height: '
      div.setAttribute('class', 'line-height')

      const LineHeightInput = document.createElement('input');
      itemText[i].style.lineHeight = data[i].lineHeight
      LineHeightInput.setAttribute('type', 'number');
      LineHeightInput.setAttribute('min', '0');
      LineHeightInput.setAttribute('max', '100');
      LineHeightInput.setAttribute('value', data[i].lineHeight.replace('px', ''));
      LineHeightInput.addEventListener('change', (event) => {
        itemText[i].style.lineHeight = `${event.target.value}px`
        data[i].lineHeight = `${event.target.value}px`
        localStorage.setItem('fontControls', JSON.stringify(data))
      })
      itemText[i].after(div)
      div.append(LineHeightInput)
    }
  }

  resetSettings(id) {
    const fontSizeInput = document.querySelectorAll('.font-size > input')
    const fontColorInput = document.querySelectorAll('.font-color > input')
    const fontWeightInput = document.querySelectorAll('.font-weight > select')
    const fontStyleInput = document.querySelectorAll('.font-style > select')
    const letterSpacingInput = document.querySelectorAll('.letter-spacing > input')
    const lineHeightInput = document.querySelectorAll('.line-height > input')

    itemText[id].style.fontSize = '14px'
    data[id].fontSize = '14px'
    fontSizeInput[id].value = 14

    itemText[id].style.color = '#000000'
    data[id].fontColor = '#000000'
    fontColorInput[id].value = '#000000'

    itemText[id].style.fontWeight = 400
    data[id].fontWeight = 400
    fontWeightInput[id].options[1].selected = true    

    itemText[id].style.fontStyle = 'normal'
    data[id].fontStyle = 'normal'
    fontStyleInput[id].options[0].selected = true

    itemText[id].style.letterSpacing = '0px'
    data[id].letterSpacing = '0px'
    letterSpacingInput[id].value = 0

    itemText[id].style.lineHeight = '20px'
    data[id].lineHeight = '20px'
    lineHeightInput[id].value = 20

    localStorage.setItem('fontControls', JSON.stringify(data))
  }

  createResetButton() {
    for (let i = 0; i < item.length; i++) {
      const resetButton = document.createElement('button');
      resetButton.innerHTML = 'Reset'
      resetButton.setAttribute('value', 'reset');
      item[i].append(resetButton)
      resetButton.addEventListener('click', (event) => {
        this.resetSettings(data[i].id)
      })
    }
  }

  createRegButtons() {
    this.createFontSizeInput()
    this.createFontColorInput()
    this.createFontWeightInput()
    this.createFontStyleInput()
    this.createLetterSpacingInput()
    this.createLineHeightInput()
    this.createResetButton()
  }
}

const controls = new Regulator()
controls.createRegButtons()