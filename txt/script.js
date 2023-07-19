const fs = require('fs')



function writeFile(filePath, data) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Ошибка:', err)
    } else {
      console.log('Файл записан в:', filePath)
    }
  })
}

function w() {
  let filePath = './txt/text.txt'
  let data = '4534543535431wefdsdfs'

    fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      writeFile(filePath, data)
    } else {
      writeFile(filePath, data)
    }
  })
}

w()
