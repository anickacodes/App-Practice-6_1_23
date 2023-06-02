const fs = require("node:fs");

/**
 * 
 * Write our file system reading and writing functionality
 * 
 * 
 * fs system - The file system (fs) module allows you to work 
 * with the file system on your computer
 */


//console.log("keys", Object.keys(fs))
//console.log("the functionreadfilesync", Object.keys(fs.readFileSync))
//console.log("the functionwritefilesync", Object.keys(fs.writeFileSync))

///readfilesync ("pathToTheFile", "howToRedTheFile")
const path = "./data"
const fileName = "products.json"

const collection = fs.readFileSync(`${path}/${fileName}`, "utf-8")
//if collection is falsy , we get an empty arr 
//if no data, assign to empty array


// if condition? trueAction :(else) false
//const our = collection ? JSON.parse(collection) : []

//console.log("data from json file",our)

//abstraction 

function readJSONFile(path, fileName){
    const our = collection ? JSON.parse(collection) : [];

    //is it an empty file or not  ?? 
    return our;
}
/////writeFileSync(path, data, {encoding: "utf-8"})
///to write this file, convert data into string 
function writeJSONFile(path, fileName, data) {
    data = JSON.stringify(data)

    fs.writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})

    //return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
  }


  module.exports = {
    readJSONFile,
    writeJSONFile
  }