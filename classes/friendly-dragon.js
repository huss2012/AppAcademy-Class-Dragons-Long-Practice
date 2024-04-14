// Your code here
const Dragon = require("./dragon");

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend) {
        super(name, color, lifeGoals, friend);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }


    hasLifeGoals() {
        this.lifeGoals.forEach(lifeGoal => {
            console.log(`${this.name} likes to ${lifeGoal}`)
        });
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}

//-----------Local Test-------------------------
const puff = new FriendlyDragon(
    "Puff",
    "green",
    [
        "live by the sea",
        "frolick in the autumn mist",
        "help small children"
    ],
    "Jackie Paper"
)

console.log(puff);
console.log(puff.breathesFire());
puff.hasLifeGoals();
console.log(puff.helpsPeople());

const toothless = new FriendlyDragon(
    "Toothless",
    "black",
    [
        "save the town of Burke",
        "fly with a kid on his back",
        "hang out with Vikings"
    ],
    "Hiccup"
)

console.log(toothless);
console.log(toothless.breathesFire());
toothless.hasLifeGoals();
console.log(toothless.helpsPeople());
//---------------Exporting the class------------
try {
    module.exports = FriendlyDragon;
} catch {
    module.exports = null;
}
