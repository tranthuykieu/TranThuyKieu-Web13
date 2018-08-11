const fs = require('fs');
const fileModule = require('./fileModule');

fileModule.writeFileCustom('test.txt', "Thuy Kieu ne hihi");
fileModule.readfileCustom('test.txt');

//ghi data vào file và chạy không đồng bộ - kem theo callback
//function callback tra ve error (case: gap loi khi ghi vao file)

// fs.writeFile("test.txt", 'hey guys', (err) => {
//     if(err){
//         console.error(err);
//     }
//     else console.log("Success!");
// });


//ghi data vào file và chạy đồng bộ - ko kem callback 
//chi ghi vao file & ko tra ve gi khac
// fs.writeFileSync('test.txt', 'day la write file syn');

//ghi file: ghi de len data cua file (xoa data cu di va ghi data moi vao)



//read file - kem callback
//callback tra ve err + data (data cua file doc)
//if data = null or undefined => error
//else => error: null or undefined
// fs.readFile('test.txt', (err, data) => {
//     if(err) console.log(err)
//     else console.log('doc file thanh cong: ' + data);
// });

//tra ve luon data cua file doc duoc + ko kem callback
//neu file doc ra o dang buffer: cho 'utf8' vao sau ten file

// console.log(fs.readFileSync('test.txt'));



// //object type
// let writeData = {
//     a: 5, 
//     b: 6
// }
// //convert object type -> JSON type
// let jsonData = JSON.stringify(writeData);
// fs.writeFile('test.json', jsonData, (err) => {
//     if(err) console.log(err)
//     else console.log("Thanh cong");
// }); 


// fs.readFile('test.txt', (err, data) => {
//     if(err) console.log(err)
//     else console.log("doc thanh cong: " + data);
// });


