const process = require("process");
const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
const PINATA_API_KEY = "7500394180570dd5ad7c";
const PINATA_SECRET_API_KEY =
  "d9fa3bcb8c63de040c3641206534ff381ec369320707756d9afe4a4a9cfd8503";
const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);
var readableStreamForFile = '';
var imgPath = "";
var read = "";

//var imgPath = "./output/1.png";

const readStream = (imgPath) => {
  readableStreamForFile = fs.createReadStream(imgPath);
  return (readableStreamForFile);
};

var options = {};

const pintoPinata = (readableStreamForFile, options, _editionCount) => {
  pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      let IPFS_HASH = result["IpfsHash"];
      fs.writeFileSync(`./temp/${_editionCount}.json`, JSON.stringify(IPFS_HASH));
      console.log("Pinned",_editionCount)
      return("IpfsHash")
    })
    .catch((err) => {
      console.log(err);
    });
};

const pinImg = (_editionCount) => {
  imgPath = `./output/${_editionCount}.png`;
  read = readStream(imgPath);
  options = {};
  pintoPinata(read, options, _editionCount);
  console.log("Saved:",_editionCount)
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const doSomething = async () => {
  for (let i = 1; i <= 1000; i++) {
    await sleep(1000)
    pinImg(i)
  }
}

doSomething()