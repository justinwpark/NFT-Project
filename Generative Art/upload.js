const process = require("process");
const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
const PINATA_API_KEY = "1f0cb908bb6962a85dba";
const PINATA_SECRET_API_KEY =
  "e6773697ce574ae60084ced2e8e1f42cfba50c48dee23def6f13707dcc9f6d4f";
const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);
var readableStreamForFile = ''

//var imgPath = "./output/1.png";

const readStream = (imgPath) => {
  readableStreamForFile = fs.createReadStream(imgPath);
  return (readableStreamForFile);
};

var options = {};

const pintoPinata = async (readableStreamForFile, options, _editionCount) => {
  await pinata
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



module.exports = {
  readableStreamForFile,
  PINATA_API_KEY,
  PINATA_SECRET_API_KEY,
  pinata,
  options,
  pintoPinata,
  readStream,
};
