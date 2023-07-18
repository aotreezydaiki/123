import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'


function syncWriteFile(filepath: string, content: string) {

  writeFileSync(join(__dirname, filepath), content, {
    flag: 'w'
  })

  const data = readFileSync(join(__dirname, filepath), 'utf-8')
  console.log(data)

  return data
}

syncWriteFile('text/text2.txt', 'gfhoktroyotrykotrkyo')
