const http = require('http');
const studentCount = require('./3-read_file_async');

const args = process.argv.slice(2);
const data = args[0];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = studentCount(data);
      res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  // res.statusCode = 404;
  res.end();
});

app.listen(1245, () => {});

module.exports = app;
