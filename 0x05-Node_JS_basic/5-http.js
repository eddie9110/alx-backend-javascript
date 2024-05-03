const http = require('http');
const studentCount = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = studentCount(process.argv[2]);
      res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.end();
});

app.listen(1245, () => {});

module.exports = app;
