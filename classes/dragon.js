// Your code here

const { newFixFrameDecoder } = require("fix/handlers/fixFrameDecoder");


class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    // let resArr = [];
    // for (let i = 0; i < dragons.length; i++){
    //   resArr.push(dragons[i].name);
    // }
    // return resArr;

    return dragons.map(dragon => {
      return dragon.name;
    })
  }
}

//--------------Local test-----------------------------
const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "Black");
console.log(toothless);
console.log(toothless.breathesFire());

console.log(Dragon.getDragons(puff, toothless));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
