import * as fs from 'fs'; 

class Info{
  constructor(
  public filepath: string = './txt/text2.txt',
  public data: string = 'adaewwqe'
  ){}
}
const popsicle = new Info;
 
function writeFile(filePath: string, data: string): void { 
  fs.writeFile(filePath, data, (err) => { 
    if (err) { 
      console.error('Error:', err); 
    } else { 
      console.log('File created in:', filePath); 
    } 
  }); 
} 
 
function fileAccessErrorHandler(err, filepath: string, data: string): void { 
  if (err) { 
    writeFile(filepath, data); 
  } else { 
    readFile(filepath, data); 
  } 
} 
 
function createAndWriteFile(filepath: string, data: string): void { 
  fs.access(filepath, (err) => fileAccessErrorHandler(err, filepath, data)); 
} 
 
function readFile(filePath: string, data: string): void { 
  fs.readFile(filePath, 'utf8', (err, fileData: string) => { 
    if (err) { 
      console.error('Error:', err); 
    } else { 
      const updatedData = fileData + data; 
      writeFile(filePath, updatedData); 
    } 
  }); 
} 

createAndWriteFile(popsicle.filepath, popsicle.data);

