const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const fileContents = data.toString().split('\n');
      let students = fileContents.filter((item) => item);
      students = students.map((item) => item.split(','));

      const fields = {};
      for (const i in students) {
        if (i) {
          if (!fields[students[i][3]]) {
            fields[students[i][3]] = [];
          }
          fields[students[i][3]].push(students[i][0]);
        }
      }

      delete fields.field;
      let info;
      const numOfStudents = students.length ? students.length - 1 : 0;
      info = `Number of students: ${numOfStudents}`;
      const output = [];
      output.push(info);

      for (const key of Object.keys(fields)) {
        info = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;

        console.log(info);
        output.push(info);
      }
      resolve(output);
    });
  });
}

module.exports = countStudents;
