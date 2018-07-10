const fs = require("fs");

const writeFileCustom = function(filePath, writeData){
    fs.writeFile(filePath, JSON.stringify(writeData), function(err){
        if (err) console.log(err)
        else console.log("ghi file thanh cong");
    });
}

const readFileCustom = function(filePath, onReadFileDone){
    fs.readFile(filePath,"utf8", function(err, data){
        if(err) console.log(err)
        // else console.log("Doc file thanh cong: " + data)
        else onReadFileDone(data);
    })
}

module.exports = {
    readFileCustom,
    writeFileCustom
};
