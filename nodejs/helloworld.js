const fileModule = require("./fileModule"); 

// fileModule("testModule.json",{ a: "tranthuykieu"});

// fxileModule.writeFileCustom("testModule.json", {a: "thuykieu", b: "hihi"});

// fileModule.readFileCustom("testModule.json");

fileModule.readFileCustom("testModule.json", function(fileData){
    console.log(fileData);
})

// Asynchronous
// console.log("Bat dau ghi file");
// fs.writeFile("test.txt","Hello world",function(err){
//     if(err) console.log(err)
//     else console.log("Ghi file thanh cong");
// });
// console.log("Ket thuc ghi file.");


// Synchronous
// console.log("Bat dau ghi file");
// let writeDone = fs.writeFileSync("test.txt", "Hello writeFileSyn");
// console.log("Ghi gile thanh cong " + writeDone);
// console.log("Ket thuc ghi file");



// console.log("Bat dau doc file");
// fs.readFile("test.txt", function(err, data){
//     if(err) console.log(err)
//     else console.log("Read file thanh cong: " + data);
// });
// console.log("Ket thuc doc file");


// Doc file Synchronous
// console.log("Bat dau doc file");
// let fileData = fs.readFileSync("test.txt");
// console.log("Doc file thanh cong: " + fileData);
// console.log("Ket thuc doc file");



// let writeData = {
//     a: 5,
//     b: 6 
// }

// let jsonData = JSON.stringify(writeData);

// console.log("Bat dau ghi file ");
// fs.writeFile("test.json", jsonData, function(err){
//     if(err) console.log(err)
//     else console.log("Ghi file thanh cong");
// });
// console.log("Ket thuc ghi file");



// get value of a certain element
// fs.readFile("test.json", function(err, data){
//     if (err) console.log(err)
//     else console.log("In this file: " + JSON.parse(data).a);
// })



