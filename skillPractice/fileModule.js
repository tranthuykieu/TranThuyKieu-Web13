const fs = require('fs');

const writeFileCustom = function(filePath, writeData) {
    fs.writeFile(filePath, JSON.stringify(writeData), (err) => {
        if(err) console.log(err)
        else console.log("Ghi file thanh cong");
    });
}

const readfileCustom = function(filePath){
    fs.readFile(filePath,'utf8', (err, data) => {
        if(err) console.log(err)
        else {
            console.log("Doc file thanh cong");
            console.log(data);
        }
    })
}
module.exports = {
    writeFileCustom,
    readfileCustom 
}
