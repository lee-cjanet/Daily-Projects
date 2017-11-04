const fs = require('fs');


// ERROR OBJECT:
// { Error: ENOENT: no such file or directory, open './animas.txt'
//     at Error (native)
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: './animas.txt' }

fs.writeFile('./example.txt', 'I will be written to example.txt', err => {
  // - only param for callback is error
  // - if file already EXIST, will be OVERWRITTEN
  if (err) {
    console.log(err);
  } else {
    console.log("file successfully written!");
  }
});

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
