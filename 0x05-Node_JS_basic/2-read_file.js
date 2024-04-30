const fs = require('fs')

function countStudents(path) {
  try {
    const fileData = fs.readFileSync(path, 'utf8');
    console.log(fileData);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const data = fileData.split('\n')
  
}
