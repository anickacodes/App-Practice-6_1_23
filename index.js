/**
 *
 * LET'S DEVELOP A CODEBASE
 *
 * ##referencing any packages will need a package json installed
 *
 * node - enter - process -
 * Object.keys(process) [seen in node]
 * install/generate package.json aka npm init -y
 *
 * in scripts - prebuilt commands, such as "start" - should be synonymous
 * w your files
 * npm run "file-name" - capitalization is important
 * npm start - does what our package.json specifies
 * npm install, start, run, create - built-in npm commands
 * as value inside "start" changes, npm start will still do what it is intended
 *
 * "name" key should match file/directory name
 *
 * npm install @faker-js/faker@7 --save-dev || faker api
 * generates package block , adds dependencies, external api's
 *
 * npms run w a package.json -
 *
 * create a products.js file to manipulate
 */

//////process obj + process.argv

const { createRandomProduct } = require("./products");
const { writeJSONFile, readJSONFile } = require("./helper");
////run: funtion to run our entire command line app

function run() {
  //console.log("Welcome to our products app!")

  //console.log("Us creating random products via require:", createRandomProduct())
  let productsData = readJSONFile("./data", "products.json");
  productsData.push(createRandomProduct());

  writeJSONFile("./data", "products.json", productsData);
  //cconsole.log(productsData)
}

run();
