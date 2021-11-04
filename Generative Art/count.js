item1 = 0;
item2 = 0;
item3 = 0;
item4 = 0;
item5 = 0;
item6 = 0;
item7 = 0;
item8 = 0;
item9 = 0;
item10 = 0;
item11 = 0;
item12 = 0;
item13 = 0;

for (let i = 1; i <= 2; i++) {
    part_meta = require("./output/"+(i)+".json")
    attributes = part_meta.attributes
    console.log(attributes)
}