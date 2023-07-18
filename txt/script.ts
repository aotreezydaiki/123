import * as fs from 'fs'

function writeFile(filePath: string, data: string) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Ошибка:', err)
    } else {
      console.log('Файл записан в:', filePath)
    }
  })
}

function writeAndCreateFile(filePath: string, data: string) {
  fs.access(filePath, (err) => {
    if (err) {
      writeFile(filePath, data)
    } else {
      fs.readFile(filePath, 'utf8', (err, fileData: string) => {
        if (err) {
          console.error('Ошибка:', err)
        } else {
          const updatedData = fileData + data
          writeFile(filePath, updatedData)
        }
      })
    }
  })
}

const filePath = '/txt/text2.txt'
const data = 'fddgfhjughikyui'

writeAndCreateFile(filePath, data)

