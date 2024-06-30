const file = require('fs');
const os = require('os');

// write file

//snchronously
// file.writeFileSync('test.txt', 'Hello World');

//asynchronus
// file.writeFile('test.txt', 'Hello World asynchronus', (err) => {});


//read file

//snchronously
//  const data = file.readFileSync('./contact.txt','utf-8');
//  console.log(data);

//asynchronus
//  file.readFile('./contact.txt','utf-8', (err, data) => {
//     if(err) console.log(err)
//     else console.log(data);
//  })


//append file
// file.appendFileSync('contact.txt', `age: 23`);



//copy file
// file.copyFileSync('contact.txt', 'contact2.txt');


//delete file
// file.unlinkSync('contact3.txt')

//blocking code / synchronous code
// console.log("1");
// const res=file.readFileSync('./contact.txt','utf-8');
// console.log(res);
// console.log("2");



//non-blocking code / asynchronous code
// console.log("1");
// file.readFile('./contact.txt','utf-8', (err, data) => {
//     if(err) console.log(err)
//     else console.log(data);
// })
// console.log("2");

// os cpu length
console.log(os.cpus().length);