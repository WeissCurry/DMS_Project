
let colors = require("colors")
let result = colors.bgCyan("Halo")

let namaUcup = "haiiiii"
console.log(result)
console.log(namaUcup.bgYellow);
console.log(namaUcup.bold.red);

console.log("");
console.log("INI TULISAN NGEGGAS".bold.red);

console.log("ucup surucup".strikethrough.grey);

const ereyY = ["ucup", "ucup", "ucup", "ucup", "ucup"]

for (let i = 0; i < ereyY.length; i++) {
    console.log(ereyY[i].bold);
    console.log(ereyY[i].strip);
    console.log(ereyY[i].stripColors.bgWhite);
}