process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const inPut = process.stdin.read();
  if (inPut) {
    process.stdout.write(`Your name is: ${inPut}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
