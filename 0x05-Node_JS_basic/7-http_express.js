const express = require('express');
const studentCount = require('./3-read_file_async');

const args = process.argv.slice(2);
const data = args[0];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await studentCount(data);
    res.send(`${'This is the list of our students\n'}${students.join('\n')}`);
  } catch (err) {
    res.send(`${'This is the list of our students\n'}${err.message}`);
  }
});

app.listen(1245, () => {
});
module.exports = app;
