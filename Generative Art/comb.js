const fs = require("fs");
const process = require("process");
let hash = '';
img_hash = '';
var img = {};
var part_meta = '';
var meta = '';

for (let i = 1; i <= 1000; i++) {
    hash = require("./temp/"+(i)+".json")
    img_hash = ("https://gateway.pinata.cloud/ipfs/" + hash)
    //img = {hash};
    part_meta = require("./output/"+(i)+".json")
    part_meta.image = img_hash;
    fs.writeFileSync("./Metadata/"+(i)+".json", JSON.stringify(part_meta));
    console.log(part_meta)
  }